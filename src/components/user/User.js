import React from 'react';
import { useHistory } from 'react-router-dom';
import './User.css'

const User = (props) => {
   // console.log(props);
    const {id,name,email,phone}=props.user;
    const url=`/user/${id}`;
    const history=  useHistory();

    const btnHandeler=()=>{
        history.push(url);
      

    }
    return (
        <div className="card">
            <h3>{name}</h3>
            <p>{email}</p>
            <p>{phone}</p>

            <button className="details-btn" onClick={btnHandeler} >See Details</button>
            
        </div>
    );
};

export default User;