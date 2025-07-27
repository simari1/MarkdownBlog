"use client";
import { useState } from "react";
import { UploadButton } from "@/components/uploadbutton";
import UploadedImages from "@/components/uploadedimages";

export type UploadedImage = {
  url: string;
  alt?: string;
};

export default function AdminPage() {
  const [uploadedImages, setUploadedImages] = useState<UploadedImage[]>([]);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">画像アップロード</h1>
      <UploadButton setUploadedImages={setUploadedImages} />
      <UploadedImages uploadedImages={uploadedImages} />
    </div>
  );
}
