import { useSelector, useDispatch } from "react-redux";
import { deleteAuthor } from "./author";
import { useState } from "react";
import UpdateAuthor from "./UpdateAuthor";

const AuthorList = () => { 

  const dispatch = useDispatch();
  const authors = useSelector((state) => state.author);
  const [isUpdateVisible, setIsUpdateVisible] = useState(false);

  function handleUpdate(id, firstName, lastName) {
    const updatedAuthor = {
      id: id,
      firstName: firstName,
      lastName: lastName
    }
    dispatch({ type: 'UPDATE', payload: updatedAuthor });
    
    setIsUpdateVisible(false);
  };

  // Delete the selected author
  const handleDeleteAuthor = (authorId) => {
    dispatch(deleteAuthor(authorId));
  };

  return (
    <>
      <div className="container">
        <h3>All Authors</h3>
        <table className="author-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {authors.map((author) => (
              <tr key={author.id}>
                <td>{author.id}</td>
                <td>{author.firstName}</td>
                <td>{author.lastName}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => {
          handleUpdate(author.id, author.firstName, author.lastName);
          setIsUpdateVisible(true);
        }}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleDeleteAuthor(author.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isUpdateVisible && <UpdateAuthor author={authors} handleUpdate={handleUpdate} />}
    </>
  );
};

export default AuthorList;
