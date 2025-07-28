"use client";
import { useEffect, useState } from "react";
import { UploadButton } from "@/components/uploadbutton";
import UploadedImages from "@/components/uploadedimages";

export type UploadedImage = {
  url: string;
  alt?: string;
};

export default function AdminPage() {
  const [uploadedImages, setUploadedImages] = useState<UploadedImage[]>([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [inputPassword, setInputPassword] = useState("");

  useEffect(() => {
    const token = sessionStorage.getItem("admin-token");
    if (!token) return;

    fetch("/api/auth", {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.valid) setIsAuthenticated(true);
      });
  }, []);

  const handleLogin = async () => {
    const res = await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password: inputPassword }),
    });

    const { success, token } = await res.json();
    if (success) {
      sessionStorage.setItem("admin-token", token);
      setIsAuthenticated(true);
    } else {
      alert("パスワードが違います");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">画像アップロード</h1>
        <div className="flex flex-col space-y-4">
          <input
            type="password"
            className="border border-gray-300 rounded-md p-2 text-black w-32"
            placeholder="パスワード"
            value={inputPassword}
            onChange={(e) => setInputPassword(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md w-32"
            onClick={handleLogin}
          >
            ログイン
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">画像アップロード</h1>
        <UploadButton setUploadedImages={setUploadedImages} />
        <UploadedImages uploadedImages={uploadedImages} />
      </div>
    );
  }
}
