import { FaTrash } from 'react-icons/fa';
import { useMutation } from '@apollo/client/react';
import { DELETE_CLIENT } from '../queries/clientMutations';
import { GET_CLIENTS } from '../queries/ClientQueries';


export default function ClientRow({ client }) {

    
  const [deleteClient]=useMutation(DELETE_CLIENT,{
    variables:{id:client.id},

    //  Big Issue : after  deleting the client the client list is not updating because we are not refetching the query after deleting the client
    // 1 case 
    //refetchQueries:['GetClients']  || refetchQueries:[{query:GET_CLIENTS}]  || refetchQueries:[{query:GET_CLIENTS,variables:{id:client.id}}]
    // 2 case   
    update(cache,{data:{deleteClient}}){
      const {clients}=cache.readQuery({query:GET_CLIENTS})
      cache.writeQuery({
        query:GET_CLIENTS,
        data:{clients:clients.filter(client=>client.id!==deleteClient.id)}
      })
    }

    // explanation of update function
    // 1 update(cache,{data:{deleteClient}}) 

    // explanation of data = {
//   deleteClient:{
//     id:"123",
//     name:"Ganesh"
//   }}

// const {clients}=cache.readQuery({
//   query:GET_CLIENTS
// })

//explanation 
// clients = [
//   {id:"1",name:"Ganesh"},
//   {id:"2",name:"Rahul"},
//   {id:"3",name:"Amit"}
// ]


}
  )

  return (
    <tr>
      <td>{client.name}</td>
      <td>{client.email}</td>
      <td>{client.phone}</td>
      <td>
        <button className='btn btn-danger btn-sm' onClick={deleteClient} >
          <FaTrash />
        </button>
      </td>
    </tr>
  );
}