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
    <nav>
      <ul>
        <li className="logo">
          <Link to="/">
            <img className="icon" src="/marvel.png" alt="Marvel Logo" />
          </Link>
        </li>
        <li className="search-icon">
          <form onSubmit={onSubmit}>
            <input
              type="text"
              autoComplete="off"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              name="search"
              placeholder="Enter a SuperHero"
            />
          </form>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
