import { gql } from "@apollo/client";

export const GET_CLIENTS=gql`
 query GetClients{
     clients{
     id,
    name,
    email,
    phone
  }}
`

export  const GET_USERS=gql`
query GetUsers{
    getUsers{
     id,
     name,
     age,
     isMarried
    }
   }
`