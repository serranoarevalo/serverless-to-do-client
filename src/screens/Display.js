import React, { useState, useEffect } from "react";
import { API, Storage } from "aws-amplify";

export default ({ match }) => {
  const [loading, setLoading] = useState(true);
  const [note, setNote] = useState({});
  const [url, setURL] = useState(null);
  useEffect(() => {
    const getNote = async () => {
      try {
        const note = await API.get("notes", `/notes/${match.params.id}`);
        setNote(note);
        if (note.attachment) {
          const attachment = await Storage.get(note.attachment);
          setURL(attachment);
        }
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    getNote();
  }, [match]);
  return (
    <>
      {loading && <h1>Loading</h1>}
      {note && (
        <>
          <h1>{note.content}</h1>
          <img src={url} />
        </>
      )}
    </>
  );
};
