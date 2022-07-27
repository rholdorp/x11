export default function NewTeamMember() {
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