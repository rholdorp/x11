import { ActionFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";

import { db } from "~/utils/db.server";

export async function action({ request }) {
  const form = await request.formData();
  const firstName = form.get("first_name");
  const lastName = form.get("last_name");
  console.log("first = " + firstName)
  console.log("last = " + lastName)
  // we do this type check to be extra sure and to make TypeScript happy
  // we'll explore validation next!
  if (
    typeof firstName !== "string" ||
    typeof lastName !== "string"
  ) {
    throw new Error(`Form not submitted correctly.`);
  }

  const fields = { firstName, lastName };

  const joke = await db.TeamMember.create({ data: fields });
  return redirect(`/teammembers/`);
}


export default function NewTeamMemberRoute() {
    return (
      <div>
        <p>Add a team member</p>
        <form method="post">
          <div>
            <label>
              First name: <input type="text" name="first_name" />
            </label>
          </div>
          <div>
            <label>
              Last name: <input type="text" name="last_name" />
            </label>
          </div>
          <div>
            <button type="submit" className="button">
              Add
            </button>
          </div>
        </form>
      </div>
    );
  }