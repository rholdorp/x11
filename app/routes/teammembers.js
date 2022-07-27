import { Outlet } from "@remix-run/react";

export default function TeamMemberRoute() {
  return (
    <div>
      <h1>TEAMMEMBER SECTION</h1>
      <main>
        <Outlet />
      </main>
    </div>
  );
}