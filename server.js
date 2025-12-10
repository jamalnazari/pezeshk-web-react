import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const app = express();
app.use(express.json());

// افزودن کاربر
app.post("/users", async (req, res) => {
  const user = await prisma.user.create({
    data: req.body,
  });
  res.json(user);
});

// گرفتن لیست کاربران
app.get("/users", async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

app.listen(3001, () => {
  console.log("Server running on http://localhost:3001");
});