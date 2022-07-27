import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

async function seed() {
  await Promise.all(
    getTeamMembers().map((teamMember) => {
      return db.teamMember.create({ data: teamMember });
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