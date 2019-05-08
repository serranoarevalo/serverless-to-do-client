import React, { useState, useEffect } from "react";
import { useUser } from "../userContext";
import { API } from "aws-amplify";

export default () => {
  const [loading, setLoading] = useState(true);
  const [notes, setNotes] = useState([]);
  const user = useUser();
  useEffect(() => {
    const getNotes = async () => {
      const notes = await API.get("notes", "/notes");
      setNotes(notes);
      setLoading(false);
    };
    getNotes();
  }, []);

  return (
    <>
      <h1>Home</h1>
      {user.isLoggedIn ? (
        loading ? (
          "Getting your notes..."
        ) : (
          <ul>
            {notes.map(note => (
              <li key={note.noteId}>👉🏻 {note.content}</li>
            ))}
          </ul>
        )
      ) : (
        <h3>Log in to see your notes</h3>
      )}
    </>
  );
};
