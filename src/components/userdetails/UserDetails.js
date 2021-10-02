import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

const UserDetails = () => {
   const {userId}=useParams();
   const history=useHistory();
   const [user,setUser] = useState([]);
   useEffect(()=>{
       fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
       .then(res=>res.json())
       .then(data=>setUser(data))
   },[userId]);

   
const btnHandeler=()=>{
    history.push(`/users`);

}


 //  console.log(userId);
    return (
        <div>
            <h3>User Details of {userId}</h3>
            <p>Name: {user.name}</p>
            <p>phone: {user.phone}</p>
            <p>website:{user.website}</p>
            <p>city: {user?.address?.city}</p>

            <button onClick={btnHandeler}>See All Users </button>
            
        </div>
    );
};

export default UserDetails;