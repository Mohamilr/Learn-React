import "./App.css";
import Button from "./components/Button/Button";

function App() {
  return (
    <div className="App">
      <Button text="contact ME" onClick={() => console.log("contact me")} />

      <hr />
      <Button
        text="send MEssage"
        otherClassName="danger"
        onClick={() => console.log("send message")}
      />

      <hr />

      <p>Login</p>
      <Button
        text="Login"
        otherClassName="primary"
        onClick={() => console.log("login successful")}
      />
    </div>
  );
}

export default App;
