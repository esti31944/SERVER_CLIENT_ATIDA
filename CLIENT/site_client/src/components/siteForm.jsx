import React, { useState } from "react";

function SiteForm({ onAdd }) {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [image, setImage] = useState("");
  const [score, setScore] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ name, url, image, score: Number(score) });
    setName("");
    setUrl("");
    setImage("");
    setScore("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <h3>הוספת אתר חדש</h3>
      <input
        type="text"
        placeholder="שם האתר"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />{" "}
      <br />
      <input
        type="text"
        placeholder="כתובת URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        required
      />{" "}
      <br />
      <input
        type="text"
        placeholder="תמונה (URL)"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        required
      />{" "}
      <br />
      <input
        type="number"
        placeholder="ציון (0-10)"
        value={score}
        onChange={(e) => setScore(e.target.value)}
        required
      />{" "}
      <br />
      <button type="submit">הוסף אתר</button>
    </form>
  );
}

export default SiteForm;
