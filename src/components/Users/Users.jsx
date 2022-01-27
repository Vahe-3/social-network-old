import React from "react";
import Paginator from './../common/Paginator/Paginator';
import User from "./User/User";



let Users = (props) => {




   

    return (

        <div>


            
            <Paginator  totalItemsCount={props.totalUsersCount} 
                        pageSize={props.pageSize}
                        currentPage={props.currentPage} 
                        setCurrentPage={props.setCurrentPage} 
                        addNewUsers={props.addNewUsers} />


            {props.users.map(u => <User user={u} {...props} key={u.key} /> )}
            

        </div>
    )
}

export default Users;

