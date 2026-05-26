import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { ApolloProvider } from '@apollo/client/react';
import Header from './Header';
import Clients from './Client';
import AddClientModal from './components/AddClientModal';


//Apollo Uses merge()
//Apollo Client automatically caches query results. Apollo tries to merge old cache + new cache.
// Default behavior can create:
// duplicate items
// stale data
// unexpected cache updates
// So we define custom merge behavior.
// existing =Old cached data.
// incoming=New data coming from server.


//merge(existing,incoming){
//   return incoming;
// }  It says: "Ignore old cache completely and replace it with new data."


const cache=new InMemoryCache({
  typePolicies:{
    Query:{
      fields:{
        clients:{
          merge(existing,incoming){
            return incoming;
          }
        },
        projects:{
          merge(existing,incoming){
            return incoming;
          }
        }
      }
    }
  }
})

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://localhost:5000',
  }),
  cache,
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Header/>
      <div className='container'>
        <AddClientModal/>
     <Clients/>
      </div>
    </ApolloProvider>
  );
}

export default App;