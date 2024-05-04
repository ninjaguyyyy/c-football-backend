import { PrismaClient, User } from "@prisma/client";

import { USER_SEEDS } from "./seeds";

const prisma = new PrismaClient();

async function main() {
  // Seed data here
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

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

//   Nhờ a/c @HaiNHP_Dev_U2 @QuyenTM_Br_U2 confirm có xử lý force logout seller đã bị delete bới admin (liên quan tới bug 993)

// Hiện tại:
// - Admin xóa seller
// - Nếu seller đang đăng nhập thì họ vẫn sử dụng chức năng bình thường

// Xử lý cho bug 993:
// - Admin xóa seller
// - Tự động logout seller bị xóa đó đi

// https://dipro-vn.backlog.com/view/TRUST-993
