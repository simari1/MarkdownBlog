import type { NextApiRequest, NextApiResponse } from "next";
import { cloudinary } from "@/lib/cloudinary";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end("Method Not Allowed");

  const timestamp = Math.floor(Date.now() / 1000);
  const folder = "blog-assets";
  const upload_preset = "ml_default";

  const paramsToSign = {
    timestamp,
    folder,
    source: "uw",
  };

  const signature = cloudinary.utils.api_sign_request(
    paramsToSign,
    cloudinary.config().api_secret!
  );

  res.json({
    timestamp,
    signature,
    folder,
    apiKey: cloudinary.config().api_key!,
    cloudName: cloudinary.config().cloud_name!,
  });
}
