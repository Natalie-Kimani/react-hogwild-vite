import React from "react";

function FilterBar({
  showGreasedOnly,
  setShowGreasedOnly,
  sortBy,
  setSortBy,
}) {
  return (
    <div className="ui form">
      <div className="field">
        <input
          id="greased-filter"
          type="checkbox"
          checked={showGreasedOnly}
          onChange={() =>
            setShowGreasedOnly(
              !showGreasedOnly
            )
          }
        />

        <label htmlFor="greased-filter">
          Greased Pigs Only?
        </label>
      </div>

      <div className="field">
        <label htmlFor="sort-select">
          Sort by:
        </label>

        <select
          id="sort-select"
          value={sortBy}
          onChange={(e) =>
            setSortBy(e.target.value)
          }
        >
          <option value="">
            None
          </option>

          <option value="name">
            Name
          </option>

          <option value="weight">
            Weight
          </option>
        </select>
      </div>
    </div>
  );
}

export default FilterBar;