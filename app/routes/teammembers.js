import { LinksFunction } from "@remix-run/node";
import { Outlet, Link } from "@remix-run/react";
import { json } from "@remix-run/node"; // or cloudflare/deno
import { useLoaderData } from "@remix-run/react";

import stylesUrl from "~/styles/index.css";

import { db } from "~/utils/db.server";
import { getUser } from "~/utils/session.server";

export function links() {
  return [{ rel: "stylesheet", href: stylesUrl }];
}

export const loader = async ({ request }) => {
  const TeammemberListItems = await db.TeamMember.findMany({
    take: 5,
    orderBy: { createdAt: "desc" },
    select: { id: true, firstName: true, lastName: true },
  });
  const user = await getUser(request);

  const data = {
    TeammemberListItems,
    user,
  };
  return json(data);
};

export default function TeamMembersRoute() {
  const data = useLoaderData();

  return (
    <div>
      <div>
        <h1>TEAMMEMBERS SECTION</h1>
        {data.user ? (
          <div className="user-info">
            <span>{`Hi ${data.user.username}`}</span>
            <form action="/logout" method="post">
              <button type="submit" className="button">
                Logout
              </button>
            </form>
          </div>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
      <div className="container">
        <div className="item item-1">
          <ul>
            {data.TeammemberListItems.map((TeamMember) => (
              <li key={TeamMember.id}>
                {TeamMember.firstName} {TeamMember.lastName}
              </li>
            ))}
          </ul>
        </div>

        <div className="item item-2">
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
