import { sleep } from "~/utils/sleep";

import type { User } from "./types";

export async function getUserFromRequest(_req: Request): Promise<User | null> {
  await sleep(85);

  const user: User = {
    id: "1",
    email: "a@a.com",
    role: "admin",
  };

  return user;
}
