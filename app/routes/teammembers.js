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
      <div>
        <h1>TEAMMEMBERS SECTION</h1>
      </div>
      <div class="container">
        <div class="item item-1">
          <ul>
            {data.map((TeamMember) => (
              <li key={TeamMember.id}>{TeamMember.firstName} {TeamMember.lastName}</li>
            ))}
          </ul>
        </div>

        <div class="item item-2">
          <main>
            <Outlet />
          </main>
        </div>
      </div>

      <div>
        <Link to="new_teammember" className="button">
          Add team member
        </Link>
      </div>

    </div>
  );
}