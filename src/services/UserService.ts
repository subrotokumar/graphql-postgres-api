import { InsertResult } from "kysely";
import { db } from "../db/client";

export type UserType = {
  id: number | undefined;
  firstName: string;
  lastName: string | undefined;
  salt: string;
  email: string;
  password: string;
  profileImageUrl: string | undefined;
};

async function addUser(user: UserType): Promise<InsertResult> {
  const { email, firstName, lastName, salt, password } = user;
  const res = await db
    .insertInto("users")
    .values({
      email: email,
      first_name: firstName,
      last_name: lastName,
      salt: salt,
      password: password,
    })
    .executeTakeFirstOrThrow();
  return res;
}
