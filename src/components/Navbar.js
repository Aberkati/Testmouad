import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { listCharacters } from "../actions/characterActions";

const Navbar = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    query.length > 0 && dispatch(listCharacters(query));
    if (window.location.pathname !== "/") {
      history.push("/");
    }
  };
  return (
    <div className="topnav">
      <Link to="/">
        <img className="logo" src="/marvel.png" alt="Marvel Logo" />
      </Link>

      <div className="search-container">
        <form onSubmit={onSubmit}>
          <input
            autoComplete="off"
            type="text"
            placeholder="Search.."
            name="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
};

export default Navbar;
