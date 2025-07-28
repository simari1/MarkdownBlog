"use client";

import { CldUploadWidget } from "next-cloudinary";
import type { UploadedImage } from "@/pages/admin";

type UploadButtonProps = {
  setUploadedImages: React.Dispatch<React.SetStateAction<UploadedImage[]>>; // 型を any[] に一時変更
};

export const UploadButton = ({ setUploadedImages }: UploadButtonProps) => {
  return (
    <CldUploadWidget
      signatureEndpoint="/api/sign-cloudinary"
      options={{
        folder: "blog-assets",
        sources: ["local", "url", "camera"],
        multiple: false,
      }}
      onOpen={() => {
        // Upload widget opened
      }}
      onSuccess={(result) => {
        if (
          result &&
          result.info &&
          typeof result.info === "object" &&
          "secure_url" in result.info
        ) {
          const secureUrl = result.info.secure_url as string;
          const publicId = result.info.public_id as string;

          // public_idからalt textを生成（ファイル名部分を使用）
          const altText = publicId.split("/").pop()?.split(".")[0] || "";
          setUploadedImages((prev) => [
            ...prev,
            { url: secureUrl, alt: altText },
          ]);
        } else {
          // Failed to extract secure URL from result
        }
      }}
      onError={() => {
        // Upload error occurred
      }}
    >
      {({ open }) => (
        <button
          onClick={() => open?.()}
          className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
        >
          Upload Image
        </button>
      )}
    </CldUploadWidget>
  );
};
