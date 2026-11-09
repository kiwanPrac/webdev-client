
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAccountContext, type User } from "../AccountContext";

export default function Profile() {
  const [profile, setProfile] = useState<User | null>(null);
  const [dob, setDob] = useState("2000-01-01");
  const { currentUser, setCurrentUser } = useAccountContext();
  const router = useRouter();

  useEffect(() => {
    if (!currentUser) {
      router.push("/account/signin");
      return;
    }
    setProfile(currentUser);
  }, [currentUser, router]);

  const signout = () => {
    setCurrentUser(null);
    router.push("/account/signin");
  };

  const inputStyle =
    "mb-2 w-full rounded border border-neutral-300 px-3 py-2";

  if (!currentUser || !profile) return null;

  return (
    <div id="wd-profile-screen" className="max-w-sm">
      <h1 className="mb-3 text-2xl font-semibold">Profile</h1>

      <input
        id="wd-username"
        value={profile.username}
        onChange={(e) =>
          setProfile({ ...profile, username: e.target.value })
        }
        placeholder="username"
        className={`wd-username ${inputStyle}`}
      />

      <input
        id="wd-password"
        value={profile.password}
        onChange={(e) =>
          setProfile({ ...profile, password: e.target.value })
        }
        placeholder="password"
        type="password"
        className={`wd-password ${inputStyle}`}
      />

      <input
        id="wd-firstname"
        value={profile.firstName}
        onChange={(e) =>
          setProfile({ ...profile, firstName: e.target.value })
        }
        placeholder="First Name"
        className={inputStyle}
      />

      <input
        id="wd-lastname"
        value={profile.lastName}
        onChange={(e) =>
          setProfile({ ...profile, lastName: e.target.value })
        }
        placeholder="Last Name"
        className={inputStyle}
      />

      <input
        id="wd-dob"
        type="date"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
        className={inputStyle}
      />

      <input
        id="wd-email"
        type="email"
        value={profile.email}
        onChange={(e) =>
          setProfile({ ...profile, email: e.target.value })
        }
        className={inputStyle}
      />

      <select
        id="wd-role"
        value={profile.role}
        onChange={(e) =>
          setProfile({
            ...profile,
            role: e.target.value as User["role"],
          })
        }
        className={inputStyle}
      >
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select>

      <button
        type="button"
        id="wd-signout-btn"
        onClick={signout}
        className="mb-2 block w-full rounded bg-blue-600 px-3 py-2 text-center text-white"
      >
        Sign out
      </button>
    </div>
  );
}
