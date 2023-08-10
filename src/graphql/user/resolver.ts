const queries = {
  hello: () => `Hello Graphql`,
  say: (_: any, { name }: { name: String }) => `Hey ${name}, How are you`,
};

const muations = {
  createUser: async (
    _: any,
    {
      firstName,
      lastName,
      email,
      password,
    }: {
      firstName: String;
      lastName: String;
      email: String;
      password: String;
    }
  ) => {},
};

export const resolver = {
  queries,
  muations,
};
