import { Outlet } from "@remix-run/react";

export default function AllocationsRoute() {
  return (
    <div>
      <h1>ALLOCATIONS SECTION</h1>
      <main>
        <Outlet />
      </main>
    </div>
  );
}