"use client";

import { create } from "zustand";
import enrollmentsJson from "../database/enrollments.json";

export type Enrollment = (typeof enrollmentsJson)[number];

type EnrollmentsStore = {
  enrollments: Enrollment[];
  enroll: (user: string, course: string) => void;
  unenroll: (user: string, course: string) => void;
};

export const useEnrollmentsStore = create<EnrollmentsStore>((set) => ({
  enrollments: enrollmentsJson,

  enroll: (user, course) =>
    set((state) => {
      const alreadyEnrolled = state.enrollments.some(
        (e) => e.user === user && e.course === course
      );

      if (alreadyEnrolled) return state;

      return {
        enrollments: [
          ...state.enrollments,
          {
            _id: crypto.randomUUID(),
            user,
            course,
          },
        ],
      };
    }),

  unenroll: (user, course) =>
    set((state) => ({
      enrollments: state.enrollments.filter(
        (e) => !(e.user === user && e.course === course)
      ),
    })),
}));
