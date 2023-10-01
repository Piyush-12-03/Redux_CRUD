import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

export const AddAuthor = () => {

    const dispatch = useDispatch();
    const [id, setAuthorId] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
      
    const handle=(e)=>{
        e.preventDefault();
    }

    const getAuthorId = (e)=>{
      setAuthorId(e.target.value);
    }

    const getFirstName=(e)=>{
        setFirstName(e.target.value);
    }
    const getLastName=(e)=>{
        setLastName(e.target.value);
    }
    
    const addAuthor=(id, firstName, lastName)=>{
        let payload={id, firstName, lastName};
        dispatch({type:"ADD_AUTHOR", payload});
    }
  return (
    <>
    <form onSubmit={handle}>
    <div>
      <div className="display-5">
        Add Author
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
          ID
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Author`s Id"
            aria-label="Username"
            aria-describedby="basic-addon1"
            name='firstName'
            value={id}
            onChange={getAuthorId}
            required
          ></input>
        </div>
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            First Name
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Author`s FirstName"
            aria-label="Username"
            aria-describedby="basic-addon1"
            name='firstName'
            value={firstName}
            onChange={getFirstName}
            required
          ></input>
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Last Name
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Author`s LastName"
            aria-label="Username"
            aria-describedby="basic-addon1"
            name='lastName'
            value={lastName}
            onChange={getLastName}
            required
          ></input>
        </div>
        <button type="submit" name="addAuthor" onClick={()=>addAuthor(id, firstName, lastName)}>
          Click to Add Author
        </button>
        </form>
    </>
  );
};
