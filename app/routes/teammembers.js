import { Outlet } from "@remix-run/react";

export default function TeamMembersRoute() {
  return (
    <div>
      <h1>TEAMMEMBERS SECTION</h1>
      <main>
        <Outlet />
      </main>
    </div>
  );
}