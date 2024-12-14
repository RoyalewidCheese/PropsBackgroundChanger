import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";

const App = () => {
  // State to manage the background color
  const [bgColor, setBgColor] = useState("white");

  // Function to handle color change
  const handleChangeColor = (color) => {
    setBgColor(color);
  };

  return (
    <div style={{ backgroundColor: bgColor, minHeight: "100vh" }}>
      <Container className="d-flex flex-column align-items-center justify-content-center vh-100">
        <h1 className="mb-4">Change Your Background Color</h1>
        <div>
          {/* Buttons to change the background color */}
          <Button
            variant="primary"
            className="m-2"
            onClick={() => handleChangeColor("blue")}
          >
            Blue
          </Button>
          <Button
            variant="success"
            className="m-2"
            onClick={() => handleChangeColor("green")}
          >
            Green
          </Button>
          <Button
            variant="warning"
            className="m-2"
            onClick={() => handleChangeColor("yellow")}
          >
            Yellow
          </Button>
          <Button
            variant="danger"
            className="m-2"
            onClick={() => handleChangeColor("red")}
          >
            Red
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default App;
