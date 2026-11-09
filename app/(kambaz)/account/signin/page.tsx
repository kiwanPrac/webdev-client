"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAccountContext } from "../AccountContext";
import users from "../../database/users.json";

export default function Signin() {
  const router = useRouter();
  const { setCurrentUser } = useAccountContext();

  const [username, setUsername] = useState("ada");
  const [password, setPassword] = useState("123");

  const signin = () => {
    const user = users.find(
      (user) =>
        user.username === username &&
        user.password === password
    );

    if (user) {
      setCurrentUser(user);
      router.push("/dashboard");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div id="wd-signin-screen" className="max-w-sm">
      <h1 className="mb-3 text-2xl font-semibold">Sign in</h1>

      <input
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="wd-username mb-2 w-full rounded border border-neutral-300 px-3 py-2"
      />

      <input
        placeholder="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="wd-password mb-2 w-full rounded border border-neutral-300 px-3 py-2"
      />

      <button
        id="wd-signin-btn"
        type="button"
        onClick={signin}
        className="mb-2 block w-full rounded bg-blue-600 px-3 py-2 text-center text-white"
      >
        Sign in
      </button>

      <Link id="wd-signup-link" href="/account/signup">
        Sign up
      </Link>

      <div className="mt-4">
        <label
          htmlFor="wd-ai-signin-note"
          className="mb-2 block font-medium"
        >
          Sample note
        </label>
        <input
          id="wd-ai-signin-note"
          placeholder="sample note"
          className="w-full rounded border border-neutral-300 px-3 py-2"
        />
      </div>
    </div>
  );
}
