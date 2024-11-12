"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ProfilePage() {
  const router = useRouter();
  const [data, setData] = useState("nothing");

  const logout = async () => {
    try {
      const response = await axios.get("/api/users/logout");
      console.log("Logout Succeesfull", response.data);
      router.push("/login");
    } catch (error: any) {
      console.log("User didn't logout", error.message);
    }
  };

  const getUserDetails = async () => {
    const res = await axios.get("/api/users/me");
    console.log(res.data);
    setData(res.data.data._id);
  };

  return (
    <div>
      <h1>Profile</h1>
      <p>Welcome to your profile page</p>
      <h2>
        {data === "nothing" ? (
          "Nothing"
        ) : (
          <Link href={`/profile/${data}`}>{data}</Link>
        )}
      </h2>
      <button
        onClick={logout}
        className="bg-blue-500 text-white font-semibold p-2 rounded w-80 hover:bg-blue-600"
      >
        Logout
      </button>
      <button
        onClick={getUserDetails}
        className="bg-blue-500 text-white font-semibold p-2 rounded w-80 hover:bg-blue-600"
      >
        Get User Details
      </button>
    </div>
  );
}
