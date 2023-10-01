import React, { useState, useEffect } from 'react';

const UpdateAuthor = ({ author, handleUpdate }) => {

  useEffect(() => {
    setAuthorId(author.id);
    setFirstName(author.firstName);
    setLastName(author.lastName);
  }, [author]);

  const [id, setAuthorId] = useState(author.id);
  const [firstName, setFirstName] = useState(author.firstName);
  const [lastName, setLastName] = useState(author.lastName);

  function saveData() {
    console.log(id, firstName, lastName);
    handleUpdate(id, firstName, lastName);
  }

  return (
    <div className="">
      <input
        type="text"
        value={id}
        onChange={(e) => setAuthorId(e.target.value)}
      />
      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <button onClick={saveData}>save</button>
    </div>
  );
};

export default UpdateAuthor;
