import Link from "next/link";

export default async function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string; aid: string }>;
}) {
  const { cid } = await params;

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
          defaultValue="A1 - ENV + HTML"
          className={inputStyle}
        />
      </div>

      <div>
        <label htmlFor="wd-description" className={labelStyle}>
          Description
        </label>
        <textarea
          id="wd-description"
          defaultValue="The assignment is available online Submit a link to the landing page of"
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
          defaultValue={100}
          className={inputStyle}
        />
      </div>

      <div>
        <label htmlFor="wd-group" className={labelStyle}>
          Assignment Group
        </label>
        <select id="wd-group" className={inputStyle}>
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
        <select id="wd-display-grade-as" className={inputStyle}>
          <option>Percentage</option>
          <option>Points</option>
        </select>
      </div>

      <div>
        <label htmlFor="wd-submission-type" className={labelStyle}>
          Submission Type
        </label>
        <select id="wd-submission-type" className={inputStyle}>
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
            <input id="wd-assign-to" className={inputStyle} />
          </div>

          <div>
            <label htmlFor="wd-due-date" className={labelStyle}>
              Due
            </label>
            <input
              type="date"
              id="wd-due-date"
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
        rows={4}
        className={inputStyle}
      />
      </div>
      <div className="flex justify-end gap-3 border-t border-neutral-300 pt-4">
        <Link
          href={`/courses/${cid}/assignments`}
          id="wd-cancel"
          className="rounded border border-neutral-300 bg-white px-5 py-2 text-sm font-medium text-neutral-800 no-underline"
        >
          Cancel
        </Link>

        <Link
          href={`/courses/${cid}/assignments`}
          id="wd-save"
          className="rounded bg-red-600 px-5 py-2 text-sm font-medium text-white no-underline"
        >
          Save
        </Link>
      </div>
    </div>
  );
}
