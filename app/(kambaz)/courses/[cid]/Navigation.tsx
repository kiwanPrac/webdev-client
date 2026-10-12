"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "../../kambaz.css";

export default function CourseNavigation({ cid }: { cid: string }) {
  const pathname = usePathname() ?? "";

  const links = [
    { label: "Home", href: `/courses/${cid}/home`, id: "wd-course-home-link" },
    { label: "Modules", href: `/courses/${cid}/modules`, id: "wd-course-modules-link" },
    { label: "Piazza", href: `/courses/${cid}/piazza`, id: "wd-course-piazza-link" },
    { label: "Zoom", href: `/courses/${cid}/zoom`, id: "wd-course-zoom-link" },
    { label: "Assignments", href: `/courses/${cid}/assignments`, id: "wd-course-assignments-link" },
    { label: "Quizzes", href: `/courses/${cid}/quizzes`, id: "wd-course-quizzes-link" },
    { label: "Grades", href: `/courses/${cid}/grades`, id: "wd-course-grades-link" },
    { label: "People", href: `/courses/${cid}/people/table`, id: "wd-course-people-link" },
  ];

  return (
    <div
      id="wd-courses-navigation"
      className="wd list-group rounded-none text-lg"
    >
      {links.map((link) => {
        const active =
          pathname === link.href ||
          pathname.startsWith(link.href + "/");

        return (
          <Link
            key={link.id}
            href={link.href}
            id={link.id}
            className={
              active
                ? "list-group-item active border-0"
                : "list-group-item border-0 text-red-600"
            }
          >
            {link.label}
          </Link>
        );
      })}
    </div>
  );
}