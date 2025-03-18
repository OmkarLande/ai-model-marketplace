const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcryptjs");

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

module.exports = { signup };
