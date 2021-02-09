import {useState} from 'react'

const UserSummary = ({user}) => {
    console.log(user)

    const [showInfo, setShowInfo] = useState(false);

    const toggleShow = () => {
        console.log("HAHAHAHAH")
        setShowInfo(!showInfo);
    }
    
    return (
        <div>
        {user?
        <div key={user.email}>
            <p>{user.name.first} {user.name.last}</p>
            <p>{user.email}</p>
            {showInfo ? 
            <div>
                <p>{user.login.username}</p>
                <img src ={user.picture.medium} alt="user pgoto"/>
                <p>{user.location.street.number} {user.location.street.name} </p>
                <p>{user.location.city}, {user.location.country} </p>
            </div>
            : ""}
            <button onClick={toggleShow}>{showInfo ? "Show Less" : "Show More"}</button>
        </div>
        :
        <div>
            There is no user data.
        </div>
        }
        </div>

    )
}

export default UserSummary;