import React, { useState } from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";

const SharhHal = () => {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (note.trim() !== "") {
      setNotes((prev) => [...prev, note]);
      setNote("");
    }
  };

  return (
    <div className="container mt-4">
      <h4 className="mb-3">ثبت شرح حال</h4>
      <form onSubmit={handleSubmit}>
        <Input
          name="note"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="شرح حال بیمار"
        />
        <Button type="submit" variant="primary">ثبت</Button>
      </form>

      <ul className="mt-3">
        {notes.map((n, i) => (
          <li key={i}>{n}</li>
        ))}
      </ul>
    </div>
  );
};

export default SharhHal;