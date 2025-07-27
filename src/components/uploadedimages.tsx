"use client";
import type { UploadedImage } from "@/pages/admin";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type UploadedImagesProps = {
  uploadedImages: UploadedImage[];
};

export default function UploadedImages({
  uploadedImages,
}: UploadedImagesProps) {
  const generateMarkdownImage = (url: string, alt: string = "") => {
    return `![${alt}](${url})`;
  };

  return (
    <div className="mt-4">
      {uploadedImages.length > 0 ? (
        uploadedImages.map((img, index) => (
          <div
            key={index}
            className="flex flex-row items-stretch gap-4 bg-gray-800 p-4 rounded mb-4 text-white"
          >
            <img
              src={img.url}
              alt={img.alt}
              className="w-32 h-10 object-cover rounded flex-shrink-0"
            />
            <p className="text-sm font-mono bg-gray-900 text-white p-2 rounded border border-gray-700 flex-1 flex items-center">
              {generateMarkdownImage(img.url, img.alt)}
            </p>
            <button
              onClick={async () => {
                await navigator.clipboard.writeText(
                  generateMarkdownImage(img.url, img.alt)
                );
                toast.success("Copied to clipboard", {
                  position: "bottom-center",
                  autoClose: 1500,
                  hideProgressBar: true,
                  closeOnClick: true,
                  pauseOnHover: false,
                });
              }}
              className="px-4 bg-blue-500 hover:bg-blue-600 transition text-white rounded flex-shrink-0 flex items-center justify-center h-10"
            >
              📋 コピー
            </button>
          </div>
        ))
      ) : (
        <div className="text-left mt-4 text-gray-500">nothing uploaded</div>
      )}
      <ToastContainer />
    </div>
  );
}
