//import { GET_CLIENTS } from "./queries/ClientQueries";
import { useQuery } from "@apollo/client/react";
//import ClientRow from "./components/ClientRow";
import { Spinner } from "./components/Spinner";
import {GET_USERS} from "./queries/ClientQueries";
import UserRow from "./components/UserRow";



export default function Clients() {
  //const {loading,error,data}=useQuery(GET_CLIENTS)
  const {loading,error,data}=useQuery(GET_USERS)

  console.log("data1",data)
  

  // if (loading ) return <p><Spinner/></p>;
  // if (error ) return <p>Something Went Wrong</p>;

    if ( loading) return <p><Spinner/></p>;
  if ( error) return <p>Something Went Wrong</p>;

  return (
    <>
      {/* {!loading && !error && (
        <table className='table table-hover mt-3'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
           {data.clients.map((client)=>{
             return <ClientRow key={client.id} client={client}/>;
           })}
          </tbody>
        </table>
      )} */}

       {!loading && !error && (
        <table className='table table-hover mt-3'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
           {data.getUsers.map((user)=>{
             return <UserRow key={user.id}  user={user}/>;
           })}
          </tbody>
        </table>
      )}
    </>
  );
}