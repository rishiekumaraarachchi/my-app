import image from "../Images/image.jpg";

function Main(props) {
  return (
    <div>
      <img src={image} alt="img" />
      <p>Name: {props.name}</p>
      <p>City: {props.city}</p>
      <p>Position: {props.position}</p>
    </div>
  );
}

export default Main;
