import { FaTrash } from 'react-icons/fa';



export default function ClientRow({ user }) {

    
  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.age}</td>
      <td>{user.isMarried ? 'Yes' : 'No'}</td>
      <td>
        <button className='btn btn-danger btn-sm'  >
          <FaTrash />
        </button>
      </td>
    </tr>
  );
}