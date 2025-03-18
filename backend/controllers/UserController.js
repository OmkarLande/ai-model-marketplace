const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const signup = async (req, res) => {
  const { public_address, username, email, password, role } = req.body;

  if (!public_address || !username || !email || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const existingUserByUsername = await prisma.user.findUnique({
      where: { username },
    });

    if (existingUserByUsername) {
      return res.status(400).json({ error: "Username is already taken" });
    }

    const existingUserByEmail = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUserByEmail) {
      return res.status(400).json({ error: "Email is already registered" });
    }

    if (role !== "model_owner" && role !== "contributor") {
        return res.status(400).json({ error: "Invalid role. Role must be 'model_owner' or 'contributor'" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        public_address,
        username,
        email,
        password_hash: hashedPassword,
        nonce: Math.floor(Math.random() * 1000000).toString(),
      },
    });

    res.status(201).json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const login = async (req, res) => {
    const { email, password } = req.body;
    console.log("started")
    
    if (!email || !password) {
        return res.status(400).json({ error: "Email and password are required" });
    }
    
    try {
        const user = await prisma.user.findUnique({ where: { email } });
        
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        
        const isPasswordValid = await bcrypt.compare(password, user.password_hash);
        if (!isPasswordValid) {
            return res.status(401).json({ error: "Invalid credentials" });
        }
        
        const token = jwt.sign(
            { user_id: user.user_id, role: user.role, username: user.username },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );
        
        console.log("token: ", token);

        res.cookie("token", token, {
            httpOnly: true,
            // secure: process.env.NODE_ENV === "production",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });
        
        res.status(200).json({ message: "Login successful", user: { user_id: user.user_id, role: user.role } });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

module.exports = { signup, login };
