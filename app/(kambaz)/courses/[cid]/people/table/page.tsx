"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { FaUserCircle } from "react-icons/fa";
import * as db from "../../../../database";
import {
  emptyUser,
  type User,
} from "../../../../account/AccountContext";
import { useEnrollmentsStore } from "../../../../store/enrollmentsStore";

export default function PeopleTable() {
  const { cid } = useParams<{ cid: string }>();

  const enrollments = useEnrollmentsStore((state) => state.enrollments);
  const enroll = useEnrollmentsStore((state) => state.enroll);
  const unenroll = useEnrollmentsStore((state) => state.unenroll);

  const [users, setUsers] = useState<User[]>(db.users);
  const [user, setUser] = useState<User>({ ...emptyUser });
  const [showAddUser, setShowAddUser] = useState(false);

  const enrolled = users.filter((usr) =>
    enrollments.some(
      (enrollment) =>
        enrollment.user === usr._id && enrollment.course === cid
    )
  );

  const addUser = () => {
    if (!user.firstName.trim() || !user.lastName.trim()) return;

    const newUser = {
      ...user,
      _id: crypto.randomUUID(),
    };

    setUsers([...users, newUser]);
    enroll(newUser._id, cid);
    setUser({ ...emptyUser });
    setShowAddUser(false);
  };

  const removeUser = (userId: string) => {
    if (window.confirm("Are you sure you want to remove this person?")) {
      unenroll(userId, cid);
    }
  };

  const inputStyle =
    "w-full rounded border border-neutral-300 px-3 py-2 text-sm";

  return (
    <div id="wd-people-table" className="overflow-x-auto">
      <div className="mb-4 flex justify-end">
        <button
          type="button"
          onClick={() => setShowAddUser(!showAddUser)}
          className="rounded bg-blue-600 px-4 py-2 text-sm font-medium text-white"
        >
          {showAddUser ? "Cancel" : "Add Person"}
        </button>
      </div>

      {showAddUser && (
        <div className="mb-4 space-y-3 rounded border border-neutral-300 p-4">
          <h3 className="font-semibold">Add Person</h3>

          <input
            placeholder="First Name"
            value={user.firstName}
            onChange={(e) =>
              setUser({ ...user, firstName: e.target.value })
            }
            className={inputStyle}
          />

          <input
            placeholder="Last Name"
            value={user.lastName}
            onChange={(e) =>
              setUser({ ...user, lastName: e.target.value })
            }
            className={inputStyle}
          />

          <input
            placeholder="Login ID"
            value={user.loginId}
            onChange={(e) =>
              setUser({ ...user, loginId: e.target.value })
            }
            className={inputStyle}
          />

          <input
            placeholder="Section"
            value={user.section}
            onChange={(e) =>
              setUser({ ...user, section: e.target.value })
            }
            className={inputStyle}
          />

          <select
            value={user.role}
            onChange={(e) =>
              setUser({ ...user, role: e.target.value })
            }
            className={inputStyle}
          >
            <option value="STUDENT">STUDENT</option>
            <option value="FACULTY">FACULTY</option>
            <option value="TA">TA</option>
          </select>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={addUser}
              className="rounded bg-green-600 px-4 py-2 text-sm font-medium text-white"
            >
              Add
            </button>

            <button
              type="button"
              onClick={() => {
                setUser({ ...emptyUser });
                setShowAddUser(false);
              }}
              className="rounded border border-neutral-300 px-4 py-2 text-sm"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-neutral-300">
            <th className="p-2">Name</th>
            <th className="p-2">Login ID</th>
            <th className="p-2">Section</th>
            <th className="p-2">Role</th>
            <th className="p-2">Last Activity</th>
            <th className="p-2">Total Activity</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>

        <tbody>
          {enrolled.map((person) => (
            <tr key={person._id} className="odd:bg-neutral-50">
              <td className="wd-full-name p-2 text-nowrap">
                <FaUserCircle className="me-2 inline text-4xl text-neutral-500" />
                <span className="wd-first-name">{person.firstName}</span>{" "}
                <span className="wd-last-name">{person.lastName}</span>
              </td>

              <td className="wd-login-id p-2">{person.loginId}</td>
              <td className="wd-section p-2">{person.section}</td>
              <td className="wd-role p-2">{person.role}</td>
              <td className="wd-last-activity p-2">
                {person.lastActivity}
              </td>
              <td className="wd-total-activity p-2">
                {person.totalActivity}
              </td>

              <td className="p-2">
                <button
                  type="button"
                  onClick={() => removeUser(person._id)}
                  className="rounded bg-red-600 px-3 py-1 text-sm text-white"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
