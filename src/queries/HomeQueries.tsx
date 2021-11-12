import { useQuery, gql } from "@apollo/client";

const HomeInfo = gql`
  {
    users {
      id
      login
      avatar_url
    }
  }
`;

export function useHomeInfo() {
  const { data, loading, error } = useQuery(HomeInfo, {
    fetchPolicy: "cache-and-network",
  });

  return {
    loading: loading,
    error: error,
    info: data,
  };
}
