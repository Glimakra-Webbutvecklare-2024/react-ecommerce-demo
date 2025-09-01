import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


function Profile() {
      const [user, setUser] = useState(null);

      const { userId } = useParams();

      useEffect(() => {
              fetch(`https://dummyjson.com/users/${userId}`)
                      .then(res => res.json())
                      .then(data => setUser(data))
      }, []);

    if (!user) {
        return <p>No user found</p>;
    }
    
    return (<>
        <h1>Profile</h1>
        <p>{user.firstName}</p>
        </>
    )
}

export default Profile;