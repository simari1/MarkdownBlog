import type { NextApiRequest, NextApiResponse } from "next";
import crypto from "crypto";

const correctPassword = process.env.ADMIN_PASSWORD;
const validTokens = new Set<string>(); // メモリ上で管理（MVP用）

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { password } = req.body;
    if (password === correctPassword) {
      const token = crypto.randomBytes(32).toString("hex");
      validTokens.add(token);
      res.status(200).json({ success: true, token });
    } else {
      res.status(401).json({ success: false });
    }
  } else if (req.method === "GET") {
    const authHeader = req.headers.authorization;
    const token = authHeader?.replace("Bearer ", "");
    if (token && validTokens.has(token)) {
      res.status(200).json({ valid: true });
    } else {
      res.status(401).json({ valid: false });
    }
  } else {
    res.status(405).end();
  }
}
