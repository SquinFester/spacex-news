import { GraphQLClient } from "graphql-request";

export const graphQLClient = new GraphQLClient(
  "https://spacex-production.up.railway.app/"
);
