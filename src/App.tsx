import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink, from } from '@apollo/client';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';

import './App.scss';
import './css/globalStyles.scss';
import ApiConstants from './constants/ApiConstants';
import ScreenContainer from './screenComponents/ScreenContainer';

function App() {
  // const { state } = useContext(MainContext);
  const cache = new InMemoryCache({
    addTypename: false
  });

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    //added global error modal popup for network and graphQL errors
    // if (graphQLErrors) {
    //   errorStore?.dispatch?.addError(graphQLErrors);
    // }
    // if (networkError) {
    //   errorStore?.dispatch?.addError(['Network error']);
    // }
  });

  const httpLink = createHttpLink({
    uri: `${ApiConstants.API_URL}graphql`,
  });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        // authorization: state?.user?.auth_token,
      }
    };
  });

  const client = new ApolloClient({
    link: from([errorLink, authLink.concat(httpLink)]),
    cache,
  });

  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route path="*" element={<ScreenContainer />} />
          {/* <PrivateRoute path="/" render={ScreenContainer}/> */}
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
