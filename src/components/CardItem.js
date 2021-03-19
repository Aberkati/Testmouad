import { Link } from "react-router-dom";
const CardItem = ({ character, history }) => {
  return (
    <div className="column">
      <div className="card">
        <h3>{character.name}</h3>
        <p>{character.description}</p>
        <img
          src={character.thumbnail.path + "." + character.thumbnail.extension}
          alt=""
          className="photochatacter"
        />
        <Link to={`/character/${character.id}`} className="linkbtn">
          See Details
        </Link>
      </div>
    </div>
  );
};

export default CardItem;
