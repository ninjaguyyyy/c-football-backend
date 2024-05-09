import { Role, User } from "@prisma/client";

export const USER_SEEDS = [
  {
    id: 1,
    password: "$2a$12$.lHHTj1jOdDGN2DQCPIYneW62zcwTXeV8aflajbJK68KIuGaUM2oS", // "123456Aa"
    email: "user@example.com",
    emailVerifiedAt: new Date(),
    role: Role.User,
    name: "user",
    createdAt: new Date(),
    updatedAt: new Date(),
    token: "DGN2DQCPIYneW62zcwTXeV8aflajbJK68KIuG",
  },
];

export async function seedUsers(prisma) {
  for (const user of USER_SEEDS) {
    await prisma.user.upsert({
      where: {
        id: user.id || undefined,
      },
      update: user as User,
      create: user as User,
    });
  }
}
