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
    console.log("first")
    const existingUserByUsername = await prisma.user.findUnique({
        where: { username },
    });
    console.log("1")
    
    if (existingUserByUsername) {
        return res.status(400).json({ error: "Username is already taken" });
    }
    console.log("12")
    
    const existingUserByEmail = await prisma.user.findUnique({
        where: { email },
    });
    console.log("123")
    
    if (existingUserByEmail) {
        return res.status(400).json({ error: "Email is already registered" });
    }
    console.log("1234")
    
    if (role !== "model_owner" && role !== "contributor") {
        return res.status(400).json({ error: "Invalid role. Role must be 'model_owner' or 'contributor'" });
    }
    console.log("2")
    console.log("role: ", role);
    
    const hashedPassword = await bcrypt.hash(password, 10);
    
    console.log("3")
    const newUser = await prisma.user.create({
        data: {
            public_address,
            username,
            email,
            role,
            password_hash: hashedPassword,
            nonce: Math.floor(Math.random() * 1000000).toString(),
        },
    });
    console.log("4")
    
    res.status(201).json({ message: "User registered successfully", user: newUser });
    console.log("5")
} catch (error) {
      console.log("6")
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

        res.cookie("user_token", token, {
            httpOnly: true,
            // secure: process.env.NODE_ENV === "production",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });
        
        res.status(200).json({ message: "Login successful",token: token, user: { user_id: user.user_id, role: user.role } });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

const getUserById = async (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({ error: "User ID is required" });
    }

    try {
        const user = await prisma.user.findUnique({
            where: { user_id: parseInt(id) },
            select: {
                user_id: true,
                public_address: true,
                username: true,
                email: true,
                role: true,
                nonce: true,
            },
        });

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        res.status(200).json({ user });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { signup, login, getUserById };
