import React, { useState } from "react";
import Nav from "./Nav";

import hogsData from "../porkers_data";

import HogList from "./HogList";
import FilterBar from "./FilterBar";
import HogForm from "./HogForm";

function App() {
  const [hogs, setHogs] = useState(hogsData);
  const [showGreasedOnly, setShowGreasedOnly] = useState(false);
  const [sortBy, setSortBy] = useState("");
  const [hiddenHogs, setHiddenHogs] = useState([]);

  function handleHideHog(name) {
    setHiddenHogs([...hiddenHogs, name]);
  }

  function handleAddHog(newHog) {
    setHogs([...hogs, newHog]);
  }

  let displayedHogs = hogs.filter(
    (hog) => !hiddenHogs.includes(hog.name)
  );

  if (showGreasedOnly) {
    displayedHogs = displayedHogs.filter(
      (hog) => hog.greased
    );
  }

  if (sortBy === "name") {
    displayedHogs = [...displayedHogs].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  }

  if (sortBy === "weight") {
    displayedHogs = [...displayedHogs].sort(
      (a, b) => a.weight - b.weight
    );
  }

  return (
    <div className="App">
      <Nav />

      <FilterBar
        showGreasedOnly={showGreasedOnly}
        setShowGreasedOnly={setShowGreasedOnly}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      <HogForm onAddHog={handleAddHog} />

      <HogList
        hogs={displayedHogs}
        onHideHog={handleHideHog}
      />
    </div>
  );
}

export default App;