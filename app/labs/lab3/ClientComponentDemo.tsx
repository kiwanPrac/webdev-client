"use client";

import { usePathname } from "next/navigation";

export default function ClientComponentDemo() {
  const pathname = usePathname();
  return (
    <div id="wd-client-component-demo">
      <h1>Client Component Demo</h1>
      <p>Current pathname: {pathname}</p>
      <p>Last segment: {pathname.split("/").pop()}</p>
      <p>Pathname length: {pathname.length}</p>
    </div>
  );
}