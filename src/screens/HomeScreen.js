import { useDispatch, useSelector } from "react-redux";
import Cards from "../components/Card/Cards";
import CardItem from "../components/Card/CardItem";
import Spinner from "../components/Spinner/Spinner";
import Pagination from "../components/Pagination/Pagination";
import { changeCurrentPage } from "../actions/paginationActions";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const pagination = useSelector((state) => state.pagination);
  const charactersList = useSelector((state) => state.charactersList);
  const { loading, characters } = charactersList;
  const { currentPage, charactersPerPage } = pagination;

  const indexOfLastPost = currentPage * charactersPerPage;
  const indexOfFirstPost = indexOfLastPost - charactersPerPage;
  const currentPosts =
    characters && characters.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    dispatch(changeCurrentPage(pageNumber));
  };
  return (
    <div className="container">
      {loading ? (
        <Spinner />
      ) : characters.length === 0 ? (
        <>
          <h3 className="noresult">No Results</h3>
        </>
      ) : (
        <>
          <Cards>
            {!loading &&
              characters &&
              currentPosts.map((char) => (
                <CardItem key={char.id} character={char} />
              ))}
          </Cards>
          <Pagination
            charactersPerPage={charactersPerPage}
            totalPosts={characters && characters.length}
            paginate={paginate}
          />
        </>
      )}
    </div>
  );
};

export default HomeScreen;
