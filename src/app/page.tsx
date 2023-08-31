import { getClient } from "@/lib/apollo-client";

import { gql } from "@apollo/client";

const query = gql`
  query Histories {
    histories {
      id
      title
    }
  }
`;

export default async function Home() {
  const { data } = await getClient().query({ query });
  console.log(data);

  return <main></main>;
}
