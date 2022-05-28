import React, { useState } from "react";
import { Stage, Layer, Star } from "react-konva";
// import { Html } from "react-konva-utils";
import "./App.css";

const generateShapes = () => {
  return [...Array(10)].map((_, i) => ({
    id: i.toString(),
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    rotation: Math.random() * 180,
    isDragging: false,
  }));
};

const INITIAL_STATE = generateShapes();

const App = () => {
  const [stars, setStars] = useState(INITIAL_STATE);

  const handleDragStart = (e: any) => {
    const id = e.target.id();
    setStars(
      stars.map((star) => {
        return {
          ...star,
          isDragging: star.id === id,
        };
      })
    );
  };

  const handleDragEnd = (e: any) => {
    setStars(
      stars.map((star) => {
        return {
          ...star,
          isDragging: false,
        };
      })
    );
  };

  return (
    <>
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          {stars.map((star) => (
            <Star
              key={star.id}
              id={star.id}
              x={star.x}
              y={star.y}
              numPoints={5}
              innerRadius={20}
              outerRadius={40}
              fill="#89b717"
              opacity={0.8}
              draggable
              rotation={star.rotation}
              shadowColor="black"
              shadowBlur={10}
              shadowOpacity={0.6}
              shadowOffsetX={star.isDragging ? 10 : 5}
              shadowOffsetY={star.isDragging ? 10 : 5}
              scaleX={star.isDragging ? 1.2 : 1}
              scaleY={star.isDragging ? 1.2 : 1}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
            />
          ))}
        </Layer>
      </Stage>
      <div className="wrapContainer">
        <div className="main">
          <input type="checkbox" id="chk" aria-hidden="true" />
          <div className="signup">
            <form>
              <label htmlFor="chk" aria-hidden="true">
                Sign up
              </label>
              <input type="text" name="txt" placeholder="User name" required />
              <input type="email" name="email" placeholder="Email" required />
              <input
                type="password"
                name="pswd"
                placeholder="Password"
                required
              />
              <button>Sign up</button>
            </form>
          </div>

          <div className="login">
            <form>
              <label htmlFor="chk" aria-hidden="true">
                Login
              </label>
              <input type="email" name="email" placeholder="Email" required />
              <input
                type="password"
                name="pswd"
                placeholder="Password"
                required
              />
              <button>Login</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
