import Modules from "../modules/page";
import CourseStatus from "./Status";

export default function Home() {
  return (
    <div id="wd-home">
      <div className="flex gap-4">
        <div className="flex-1 min-w-0">
          <Modules />
        </div>
        <div className="hidden lg:block w-[250px] shrink-0">
          <CourseStatus />
        </div>
      </div>
    </div>
  );
}