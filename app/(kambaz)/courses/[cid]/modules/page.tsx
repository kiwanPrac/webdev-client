"use client";

import { useParams } from "next/navigation";
import Module from "./Module";
import ModulesControls from "./ModulesControls";
import { useModulesStore } from "../../../store/modulesStore";

export default function Modules() {
  const { cid } = useParams();
  const courseId = typeof cid === "string" ? cid : "";
  const modules = useModulesStore((state) => state.modules);
  const courseModules = modules.filter((module) => module.course === courseId);

  return (
    <div>
      <ModulesControls />

      <ul id="wd-modules" className="m-0 list-none p-0">
        {courseModules.map((module) => (
          <Module key={module._id} module={module} />
        ))}
      </ul>
    </div>
  );
}
