import React, { useState } from "react";

function HogForm({ onAddHog }) {
  const [formData, setFormData] =
    useState({
      name: "",
      weight: "",
      specialty: "",
      greased: false,
    });

  function handleChange(e) {
    const {
      name,
      value,
      type,
      checked,
    } = e.target;

    setFormData({
      ...formData,
      [name]:
        type === "checkbox"
          ? checked
          : value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newHog = {
      ...formData,
      weight: Number(formData.weight),
      image:
        "https://picsum.photos/300",
      "highest medal achieved":
        "bronze",
    };

    onAddHog(newHog);

    setFormData({
      name: "",
      weight: "",
      specialty: "",
      greased: false,
    });
  }

  return (
    <form
      className="ui form"
      onSubmit={handleSubmit}
    >
      <div className="field">
        <label htmlFor="name">
          Name:
        </label>

        <input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div className="field">
        <label htmlFor="weight">
          Weight:
        </label>

        <input
          id="weight"
          type="number"
          name="weight"
          value={formData.weight}
          onChange={handleChange}
        />
      </div>

      <div className="field">
        <label htmlFor="specialty">
          Specialty:
        </label>

        <input
          id="specialty"
          name="specialty"
          value={formData.specialty}
          onChange={handleChange}
        />
      </div>

      <div className="field">
        <input
          id="greased"
          type="checkbox"
          name="greased"
          checked={formData.greased}
          onChange={handleChange}
        />

        <label htmlFor="greased">
          Greased?
        </label>
      </div>

      <button type="submit">
        Add Hog
      </button>
    </form>
  );
}

export default HogForm;