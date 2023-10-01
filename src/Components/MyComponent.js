import { useState } from "react";
import { useDispatch } from "react-redux";
import Display from "../actions/Display";

const MyComponent=()=>{
const [currentPage, setCurrentPage] = useState(null);
  const dispatch = useDispatch();

  // const [page, setPage]=useState("Home")
  const handleClick = (page) => {
    console.log(page);
    setCurrentPage(page);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand">Writer`Library</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <button className="btn" aria-current="page" onClick={()=>handleClick("authorList")}>
                  All Author`s
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="btn"
                  onClick={() => handleClick("AddAuthor")}
                >
                  Add
                </button>
                <span>Click All Authors to get the Author List.....................................</span>
  <span>...............................................Click Add to add Author</span>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control"
                type="search"
                placeholder="Search Author"
                aria-label="Search"
              ></input>
              <button className="btn btn-primary" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
        <div>
        </div>
      </nav>
          <Display page={currentPage} />
    </>
  );
}
export default MyComponent;