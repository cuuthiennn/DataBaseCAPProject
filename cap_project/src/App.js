import { Container } from "react-bootstrap";
import "./App.css";
import { Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <Container fluid>
          <Routes></Routes>
        </Container>
      </div>
    </>
  );
}

export default App;
