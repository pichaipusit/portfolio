import React, { useRef, useState } from "react";
import "./BlackCard.css";
import genFriends from "../images/gen-friends.png";

function BlackCard() {
  const [islightOn, setIslightOn] = useState(false);
  const secretRef = useRef();

  const handleClick = (e) => {
    e.preventDefault();
    setIslightOn(!islightOn);
    secretRef.current.animate(
      {
        opacity: [0, 1],
      },
      {
        duration: 600,
        fill: "forwards",
      }
    );
  };
  return (
    <div id="black">
      <div
        onClick={handleClick}
        className={`magicCard ${islightOn && "lightOn"}`}
      >
        <div className="secret-content" ref={secretRef}>
          {islightOn ? (
            <div className="secretReveal">
              <h2>Generation Bootcamp!</h2>
              <img
                width="100%"
                src={genFriends}
                alt="My friends at generation"
              />
              <p>
                I learn a lot from this, I found my weakness and a way to
                improve it,
                <br /> thanks to all the instructors and my friends.
              </p>
            </div>
          ) : (
            <h3 className="secretHidden">
              Don't click! <br /> it's a secret 🤫
            </h3>
          )}
        </div>
      </div>
    </div>
  );
}

export default BlackCard;
