const userData = [
    {
name:"James",
city:"New York",
description:"Front-End Developer",
skills:["UI/UX", "Front-End Development", "HTML" , "CSS" ,"JAVASCRIPT" , "Tailwind CSS" ,"React" , "Node"],
online:false,
profile:"images/team2.jpg",

    },
    {
        name:"John",
        city:"America",
        description:"Front-End Developer",
        skills:["UI/UX", "Front-End Development", "HTML" , "CSS" ,"JAVASCRIPT" , "Tailwind CSS" ,"React" , "Node"],
        online:true,
        profile:"images/team3.jpg",
          
    },
];
function User(props) {
    return<div className="card-container">
        <span className={props.online?"pro online":"pro offline"}>{props.online?"ONLINE":"OFFLINE"}</span>
        <img src={props.profile} className="img" alt="user"/>
        <h3>{props.name}</h3>
        <h3>{props.city}</h3>
        <p>{props.description}</p>
        <div className="buttons">
            <button className="primary">Message</button>
            <button className="primary outline">Following</button>
        </div>
        <div className="skills">
            <h6>Skills</h6>
            <ul>
                {props.skills.map((skill,index)=>(
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </div>
    </div>
}
const UserCard = () => {
  return (
  <>
  {userData.map((user,index)=>(
        <User key={index} name={user.name} 
        city={user.city}
        description={user.description} 
        online={user.online}
        skills={user.skills} 
        profile={user.profile}
        />
    ))}
  </> 
  )
}

export default UserCard
