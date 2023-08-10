import type { ColumnType } from "kysely";
export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;
export type Timestamp = ColumnType<Date, Date | string, Date | string>;

export type User = {
    id: Generated<number>;
    first_name: string;
    last_name: string | null;
    profile_image_url: string | null;
    email: string;
    password: string;
    salt: string;
};
export type DB = {
    users: User;
};
