import React from "react";
import { connect} from "react-redux";
import TableComponent from "./TableComponent";
import { sortUsersById, sortUsersByString, setUsers, 
      onFindeUsers, setUsersReserv, addNewUser,
      
} from "../../reducers/usersReducer";


const TableComponentContainer = (props) => {

  return <div >
     <TableComponent {...props}/>
    </div>
  
};
const mapStateToProps = (state)=>{
return{
  users: state.users.users,
  usersReserv: state.users.usersReserv
}
}

export default connect(mapStateToProps,
  {sortUsersById,sortUsersByString,setUsers,
  onFindeUsers,setUsersReserv,addNewUser
})(TableComponentContainer);
