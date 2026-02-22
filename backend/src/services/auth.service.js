// regra de negócio
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function authenticateUser(email, password) {
  const filePath = path.join(__dirname, "../data/users.json");

  const data = await fs.readFile(filePath, "utf-8");
  const users = JSON.parse(data);

  const user = users.find((u) => u.email === email && u.password === password);

  return user || null;
}
