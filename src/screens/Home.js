import React, { useState, useEffect } from "react";
import { API } from "aws-amplify";
import { Link } from "react-router-dom";
import { useUser } from "../userContext";

export default () => {
  const [loading, setLoading] = useState(true);
  const [notes, setNotes] = useState([]);
  const user = useUser();
  useEffect(() => {
    const getNotes = async () => {
      try {
        const notes = await API.get("notes", "/notes");
        setNotes(notes);
      } catch (e) {
        console.log(e);
      }
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
              <li key={note.noteId}>
                👉🏻 <Link to={`note/${note.noteId}`}>{note.content}</Link>{" "}
              </li>
            ))}
          </ul>
        )
      ) : (
        <h3>Log in to see your notes</h3>
      )}
    </>
  );
};
