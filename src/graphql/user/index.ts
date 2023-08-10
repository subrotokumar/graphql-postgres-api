import { mutation } from "./mutation";
import { query } from "./query";
import { resolver } from "./resolver";
import { typeDefs } from "./typedefs";

export const User = {
  resolver,
  query,
  mutation,
  typeDefs,
};
