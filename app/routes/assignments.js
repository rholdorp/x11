import { Outlet } from "@remix-run/react";

export default function AssignmentsRoute() {
  return (
    <div>
      <h1>ASSIGNMENTS SECTION</h1>
      <main>
        <Outlet />
      </main>
    </div>
  );
}