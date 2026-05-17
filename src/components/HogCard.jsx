import React, { useState } from "react";

function HogCard({ hog, onHideHog }) {
  const [showDetails, setShowDetails] =
    useState(false);

  function handleToggleDetails() {
    setShowDetails(!showDetails);
  }

  function handleHide() {
    onHideHog(hog.name);
  }

  return (
    <div
      aria-label="hog card"
      className="ui card"
    >
      <div className="image">
        <img
          src={hog.image}
          alt={`Photo of ${hog.name}`}
        />
      </div>

      <div className="content">
        <h3 onClick={handleToggleDetails}>
          {hog.name}
        </h3>

        {showDetails && (
          <div>
            <p>
              Specialty: {hog.specialty}
            </p>

            <p>{hog.weight}</p>

            <p>
              {hog.greased
                ? "Greased"
                : "Nongreased"}
            </p>

            <p>
              {
                hog[
                  "highest medal achieved"
                ]
              }
            </p>
          </div>
        )}

        <button onClick={handleHide}>
          Hide Me
        </button>
      </div>
    </div>
  );
}

export default HogCard;