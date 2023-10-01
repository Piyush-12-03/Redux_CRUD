import { AddAuthor } from "./AddAuthor";
import AuthorList from "./authorList";

const Display = ({ page }) => {
    console.log("Display" + page);
    return (
      <div>
        {page === "AddAuthor" ? (<><AddAuthor/></>):page==='authorList'?(<><AuthorList/></>):'Welcome to the Writer`s Library'}
      </div>
    );
  };
  
  export default Display;