import { Link } from "react-router-dom";
const CardItem = ({ character, history }) => {
  return (
    <div className="column">
      <div className="container2 bordered">
        <div className="column-2 box">
          <img
            src={character.thumbnail.path + "." + character.thumbnail.extension}
            alt=""
            className="photochatacter"
          />
        </div>
        <div className="column-1 box">
          <h1>{character.name}</h1>
          <p className="description">
            {character.description.length > 1 &&
              character.description?.split(" ").slice(0, 15).join(" ") + "..."}
          </p>

          <Link to={`/character/${character.id}`} className="linkbtn">
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
