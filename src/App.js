import logo from "./logo.svg";
import "./App.css";
import Main from "./Components/Main";
const mydata = [
  {
    id: 1,
    name: "A",
    city: "B",
    position: "Web Developer",
  },

  {
    id: 2,
    name: "C",
    city: "D",
    position: "Mern Developer",
  },

  {
    id: 3,
    name: "E",
    city: "F",
    position: "React Developer",
  },
];
// const NewBlock = () => {
//   return (
//     <div>
//       {mydata.map(({ name, city, position, id }) => {
//         return <Main key={id} name={name} city={city} position={position} />;
//       })}
//       ;
//     </div>
//   );
// };

function App() {
  const data = mydata.map(({ name, city, position, id }) => {
    // return <Main key={index} name={name} city={city} position={position} />;
    return <Main key={id} name={name} city={city} position={position} />;
  });

  return (
    <>
      <h1>Auk React App</h1>
      {data}
    </>
  );
}

export default App;
