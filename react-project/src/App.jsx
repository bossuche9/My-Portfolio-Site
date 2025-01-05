import './App.css'
import { useEffect, useReducer } from 'react';

function MyButton({openStatus,onStatus}) {
  return (
    <div>
      <button onClick = {() =>onStatus("true")}> 
    I'm a child button
      </button>
      <h1> Welcome to my Portfolio{""}
    {openStatus ? "The site has launched" : "The site is down"}
      </h1>
    </div>  
  ); 
}

const aboutMe = [
  "Masters in Computer Science",
  "Looking for Front end dev position and QA testers",
  "Experiecne with react development and moblie development"
];


  const myInfoObject = aboutMe.map((info, i) =>({
    id: i,
    title: info
  }));

 
function MyProfile({infos}){
  return(
    <main>
      <img src= "https://media.licdn.com/dms/image/v2/D4E03AQGLvm6VTLisGg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1729208356679?e=1741219200&v=beta&t=RLWNvcG6N7BGbCpKHwVJCleMWI-WktRAea9Fa5sNMac"
    alt = "picture of Uchenna Obi, the site creator"
      />
    <ul>
      {infos.map((info) => (
    <li key ={info.id} s>
      {info.title}
      </li>
    ))}
    
    </ul>
    </main>
  )
}


function App() {

  const [status, toggleStatus] = useReducer(
    (status) => !status,  
    true
  );

  useEffect(() => {
    console.log(`The site is ${status ? "launched" : "down"}.`);
  }, [status]);

  return (
    
    <div>
      <h2>Welcome to my Portfolio</h2>
      <MyProfile infos = {myInfoObject }/>
      <p>
    <button onClick={toggleStatus}>
      {status ? "launch" : "close"} site</button>
      </p>
      <MyButton onStatus = {toggleStatus} openStatus = {status}/>  
    </div>
    
    
  );
}

export default  App

