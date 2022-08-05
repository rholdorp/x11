import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

async function seed() {
  const x11 = await db.user.create({
    data: {
      username: "",
      passwordHash: "",
    },
  });

  await Promise.all(
    getTeamMembers().map((teamMember) => {
      const data = { teamChangerId: x11.id, ...teamMember };
      return db.teamMember.create({ data });
    })
  );
}

seed();

function getTeamMembers() {
  return [
    {
      firstName: "Alfa",
      lastName: "Zero",
    },
    {
      firstName: "Bravo",
      lastName: "One",
    },
    {
      firstName: "Charlie",
      lastName: "Two",
    },
    {
      firstName: "Delta",
      lastName: "Three",
    },
    {
      firstName: "Echo",
      lastName: "Four",
    },
    {
      firstName: "Foxtrot",
      lastName: "Five",
    },
  ];
}
