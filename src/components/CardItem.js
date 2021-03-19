import { Link } from "react-router-dom";
const CardItem = ({ character, history }) => {
  return (
    <div className="column">
      <div className="card">
        <div className="colimage">
          <img
            src={character.thumbnail.path + "." + character.thumbnail.extension}
            alt=""
            className="photochatacter"
          />
        </div>
        <div className="coldetails">
          <h3>{character.name}</h3>
          <p>{character.description}</p>

          <Link to={`/character/${character.id}`} className="linkbtn">
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
