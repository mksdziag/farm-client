export type UserRole = "super-admin" | "admin" | "user";

export interface User {
  id: string;
  email: string;
  role: UserRole;
}
