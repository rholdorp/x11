import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

async function seed() {
  const x11 = await db.user.create({
    data: {
      username: "x11",
      passwordHash:
        "$2b$10$K7L1OJ45/4Y2nIvhRVpCe.FSmhDdWoXehVzJptJ/op0lSsvqNu/1u",
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
