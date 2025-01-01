import './App.css'

function MyButton({button}) {
  return (
    <p>
    <button>
      I'm a {button} ee
    </button>
    </p>
  );
}

const aboutMe = [
  "Masters in Computer Science",
  "Looking for Front end dev position",
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
    alt = "picture of Uchenna Obi, tyhe site creator"
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
  return (
    <main>
    <div>
      <h1>Welcome to my Portfolio</h1>
      <MyProfile infos = {myInfoObject }/>

      <MyButton button ="button" />
    </div>
    </main>
  );
}

export default  App

