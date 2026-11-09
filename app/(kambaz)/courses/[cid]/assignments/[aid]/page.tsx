"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  useAssignmentsStore,
  type Assignment,
} from "../../../../store/assignmentsStore";

export default function AssignmentEditor() {
  const { cid, aid } = useParams<{ cid: string; aid: string }>();
  const router = useRouter();

  const assignments = useAssignmentsStore((state) => state.assignments);
  const addAssignment = useAssignmentsStore((state) => state.addAssignment);
  const updateAssignment = useAssignmentsStore((state) => state.updateAssignment);

  const existingAssignment = assignments.find(
    (a) => a._id === aid && a.course === cid
  );

  const [assignment, setAssignment] = useState<Assignment>(() => ({
    _id: existingAssignment?._id ?? "",
    title: existingAssignment?.title ?? "",
    course: cid,
    description: existingAssignment?.description ?? "",
    points: existingAssignment?.points ?? 100,
    due: existingAssignment?.due ?? "",
    available: existingAssignment?.available ?? "",
    availableUntil: existingAssignment?.availableUntil ?? "",
  }));

  const [assignmentGroup, setAssignmentGroup] = useState("ASSIGNMENTS");
  const [displayGradeAs, setDisplayGradeAs] = useState("Percentage");
  const [submissionType, setSubmissionType] = useState("Online");
  const [assignTo, setAssignTo] = useState("");
  const [sampleNotes, setSampleNotes] = useState("");

  const saveAssignment = () => {
    if (!assignment.title.trim()) return;

    if (aid === "new") {
      addAssignment({
        title: assignment.title,
        course: cid,
        description: assignment.description,
        points: assignment.points,
        due: assignment.due,
        available: assignment.available,
        availableUntil: assignment.availableUntil,
      });
    } else if (existingAssignment) {
      updateAssignment({
        ...assignment,
        _id: existingAssignment._id,
        course: cid,
      });
    } else {
      return;
    }

    router.push(`/courses/${cid}/assignments`);
  };

  const cancelAssignment = () => {
    router.push(`/courses/${cid}/assignments`);
  };

  const inputStyle =
    "w-full rounded border border-neutral-300 bg-white px-3 py-2 text-sm";

  const labelStyle = "mb-2 block font-medium text-neutral-800";

  return (
    <div id="wd-assignments-editor" className="max-w-4xl space-y-6 p-4">
      <div>
        <label htmlFor="wd-name" className={labelStyle}>
          Assignment Name
        </label>
        <input
          id="wd-name"
          value={assignment.title}
          onChange={(e) =>
            setAssignment({ ...assignment, title: e.target.value })
          }
          className={inputStyle}
        />
        <p className="mt-2 text-sm text-neutral-600">
          Assignment id: {aid}
        </p>
      </div>

      <div>
        <label htmlFor="wd-description" className={labelStyle}>
          Description
        </label>
        <textarea
          id="wd-description"
          value={assignment.description}
          onChange={(e) =>
            setAssignment({ ...assignment, description: e.target.value })
          }
          rows={5}
          className={inputStyle}
        />
      </div>

      <div>
        <label htmlFor="wd-points" className={labelStyle}>
          Points
        </label>
        <input
          id="wd-points"
          type="number"
          value={assignment.points}
          onChange={(e) =>
            setAssignment({
              ...assignment,
              points: Number(e.target.value),
            })
          }
          className={inputStyle}
        />
      </div>

      <div>
        <label htmlFor="wd-group" className={labelStyle}>
          Assignment Group
        </label>
        <select
          id="wd-group"
          value={assignmentGroup}
          onChange={(e) => setAssignmentGroup(e.target.value)}
          className={inputStyle}
        >
          <option>ASSIGNMENTS</option>
          <option>QUIZZES</option>
          <option>EXAMS</option>
          <option>PROJECT</option>
        </select>
      </div>

      <div>
        <label htmlFor="wd-display-grade-as" className={labelStyle}>
          Display Grade as
        </label>
        <select
          id="wd-display-grade-as"
          value={displayGradeAs}
          onChange={(e) => setDisplayGradeAs(e.target.value)}
          className={inputStyle}
        >
          <option>Percentage</option>
          <option>Points</option>
        </select>
      </div>

      <div>
        <label htmlFor="wd-submission-type" className={labelStyle}>
          Submission Type
        </label>
        <select
          id="wd-submission-type"
          value={submissionType}
          onChange={(e) => setSubmissionType(e.target.value)}
          className={inputStyle}
        >
          <option>Online</option>
        </select>
      </div>

      <div>
        <h3 className="mb-3 font-medium text-neutral-800">
          Online Entry Options
        </h3>

        <div className="space-y-3">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              id="wd-text-entry"
              className="h-4 w-4"
            />
            Text Entry
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              id="wd-website-url"
              className="h-4 w-4"
            />
            Website URL
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              id="wd-media-recordings"
              className="h-4 w-4"
            />
            Media Recordings
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              id="wd-student-annotation"
              className="h-4 w-4"
            />
            Student Annotation
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              id="wd-file-upload"
              className="h-4 w-4"
            />
            File Upload
          </label>
        </div>
      </div>

      <div className="rounded border border-neutral-300 p-4">
        <h3 className="mb-4 text-lg font-semibold">Assign</h3>

        <div className="space-y-4">
          <div>
            <label htmlFor="wd-assign-to" className={labelStyle}>
              Assign to
            </label>
            <input
              id="wd-assign-to"
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              className={inputStyle}
            />
          </div>

          <div>
            <label htmlFor="wd-due-date" className={labelStyle}>
              Due
            </label>
            <input
              type="date"
              id="wd-due-date"
              value={assignment.due}
              onChange={(e) =>
                setAssignment({
                  ...assignment,
                  due: e.target.value,
                })
              }
              className={inputStyle}
            />
          </div>

          <div>
            <label htmlFor="wd-available-from" className={labelStyle}>
              Available from
            </label>
            <input
              type="date"
              id="wd-available-from"
              value={assignment.available}
              onChange={(e) =>
                setAssignment({
                  ...assignment,
                  available: e.target.value,
                })
              }
              className={inputStyle}
            />
          </div>

          <div>
            <label htmlFor="wd-available-until" className={labelStyle}>
              Until
            </label>
            <input
              type="date"
              id="wd-available-until"
              value={assignment.availableUntil ?? ""}
              onChange={(e) =>
                setAssignment({
                  ...assignment,
                  availableUntil: e.target.value,
                })
              }
              className={inputStyle}
            />
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="wd-ai-editor-notes" className={labelStyle}>
          Sample notes
        </label>
        <textarea
          id="wd-ai-editor-notes"
          value={sampleNotes}
          onChange={(e) => setSampleNotes(e.target.value)}
          rows={4}
          className={inputStyle}
        />
      </div>

      <div className="flex justify-end gap-3 border-t border-neutral-300 pt-4">
        <button
          type="button"
          onClick={cancelAssignment}
          id="wd-cancel"
          className="rounded border border-neutral-300 bg-white px-5 py-2 text-sm font-medium text-neutral-800"
        >
          Cancel
        </button>

        <button
          type="button"
          onClick={saveAssignment}
          id="wd-save"
          className="rounded bg-red-600 px-5 py-2 text-sm font-medium text-white"
        >
          Save
        </button>
      </div>
    </div>
  );
}
