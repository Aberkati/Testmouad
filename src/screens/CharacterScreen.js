import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  listCharacterComics,
  listCharacterDetails,
} from "../actions/characterActions";
import Spinner from "../components/Spinner";

const CharacterScreen = ({ match }) => {
  const dispatch = useDispatch();
  const characterDetails = useSelector((state) => state.characterDetails);
  const { loading, character, comics } = characterDetails;
  useEffect(() => {
    dispatch(listCharacterComics(match.params.id));
    dispatch(listCharacterDetails(match.params.id));
  }, [dispatch, match]);
  return (
    <div className="container">
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Link style={{ color: "blue" }} to="/">
            Back to results
          </Link>

          <div className="container2">
            <div className="column-1 box">
              <h1>{character.name}</h1>
              {character?.description?.length === 0 ? (
                <p className="description">No Description</p>
              ) : (
                <p className="description">{character.description}</p>
              )}
            </div>
            <div className="column-2 box">
              <img
                src={
                  character?.thumbnail?.path +
                  "." +
                  character?.thumbnail?.extension
                }
                alt=""
                className="photochatacter"
              />
            </div>
          </div>

          <div className="container2">
            <div className="column-1 box bordered">
              <h4>Some of Series of {character.name}</h4>
              {character?.series?.items.length === 0
                ? "No Series yet for this Character"
                : character?.series?.items.slice(0, 10).map((serie, index) => (
                    <p key={index}>
                      {" "}
                      <strong>{index + 1} :</strong>
                      {serie.name}
                    </p>
                  ))}
            </div>
            <div className="column-2 box bordered">
              <h3>Latest Comics</h3>

              {loading ? (
                <p>loading</p>
              ) : comics?.length === 0 ? (
                "Empty"
              ) : (
                comics &&
                Array.isArray(comics) &&
                comics.slice(0, 4).map((comic) => (
                  <div key={comic.id} className="comics">
                    <strong key={comic.id}>{comic.title}</strong>
                    <p>On Sale : {comic?.dates[0].date.substring(0, 10)}</p>
                    <p>Price : ${comic?.prices[0].price}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CharacterScreen;
