"use client";
import Link from "next/link";
import Script from "next/script";
import React from "react";

export default function LoginPage() {
  const [user, setUser] = React.useState({
    username: "",
    password: "",
  });

  const onLogin = async () => {};

  return (
    <div className="h-screen bg-blue-300 flex justify-center items-center">
      <div className="flex flex-col items-center gap-5 border border-black mx-40 p-8 rounded-lg bg-white">
        {/* Lottie Animation */}
        <div>
          <Script src="https://unpkg.com/@lottiefiles/lottie-player@2.0.8/dist/lottie-player.js"></Script>
          <div
            dangerouslySetInnerHTML={{
              __html: `<lottie-player src="https://lottie.host/f03c6be5-a587-4ef6-aa6e-dfcdeaed4c9f/VxPvKGVJjT.json" background="#fff" speed="1" loop style="width: 300px; height: 300px" autoplay></lottie-player>`,
            }}
          />
        </div>

        {/* Horizontal Line */}
        <hr className="w-full border-gray-400" />

        {/* Login Form */}
        <div className="flex flex-col items-center gap-4 w-full">
          <input
            type="text"
            placeholder="Username"
            className="border border-gray-300 p-2 rounded w-80"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-300 p-2 rounded w-80"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <button
            onClick={onLogin}
            className="bg-blue-500 text-white font-semibold p-2 rounded w-80 hover:bg-blue-600"
          >
            Login
          </button>
          <div className="mt-2">
            Don’t have an account ?{" "}
            <Link href="/signup" className="text-blue-700 hover:underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
