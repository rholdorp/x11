import { LinksFunction } from "@remix-run/node";
import { Outlet, Link } from "@remix-run/react";
import { json } from "@remix-run/node"; // or cloudflare/deno
import { useLoaderData } from "@remix-run/react";

import stylesUrl from "~/styles/index.css";

import { db } from "~/utils/db.server";

export function links () {
  return [{ rel: "stylesheet", href: stylesUrl }];
}

export const loader = async () => {
  return json(await db.TeamMember.findMany());
};

export default  function TeamMembersRoute() {
  const data = useLoaderData();

  return (
    <div>
      <h1>TEAMMEMBERS SECTION</h1>
      <ul>
      {data.map((TeamMember) => (
        <li key={TeamMember.id}>{TeamMember.firstName} {TeamMember.lastName}</li>
      ))}
    </ul>

      <main>
        <Outlet />
      </main>
    </div>
  );
}