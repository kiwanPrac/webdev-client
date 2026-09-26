import AssignmentItem from "./AssignmentItem";

export default async function Assignments({
  params,
}: {
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;
  return (
    <div id="wd-assignments">
      <input
      id="wd-search-assignment"
      placeholder="Search for Assignments"
      />
      <button id="wd-add-assignment-group" type="button">
        + Group
      </button>
      <button id="wd-add-assignment" type="button">
        + Assignment
      </button>
      
      <h3 id = "wd-assignments-title">
      ASSIGNMENTS 40% of Total <button type="button">+</button>
      </h3>

      <ul id="wd-assignment-list">
        <AssignmentItem
          cid={cid}
          aid="A1"
          title="A1 ENV + HTML"
          details="Due date / Points"
          />
        <AssignmentItem
          cid={cid}
          aid="A2"
          title="A2 CSS + TAILWIND"
          details="Due date / Points"
          />
        <AssignmentItem
          cid={cid}
          aid="A3"
          title="A3 JS + REACT"
          details="Due date / Points"
          />

      </ul>
    </div>
  );
}
