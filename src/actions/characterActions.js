import axios from "axios";

const REACT_APP_MARVEL_API = process.env.REACT_APP_MARVEL_API;
const REACT_APP_MARVEL_API_KEY = process.env.REACT_APP_MARVEL_API_KEY;
const REACT_APP_MARVEL_API_HASH = process.env.REACT_APP_MARVEL_API_HASH;

export const listCharacters = (query) => async (dispatch) => {
  try {
    dispatch({
      type: "CHARACTERS_LIST_REQUEST",
    });
    const { data } = await axios.get(
      `${REACT_APP_MARVEL_API}/characters?nameStartsWith=${query}&apikey=${REACT_APP_MARVEL_API_KEY}&ts=1&hash=${REACT_APP_MARVEL_API_HASH}`
    );
    dispatch({
      type: "CHARACTERS_LIST_SUCCESS",
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: "CHARACTERS_LIST_FAIL",
      payload: err,
    });
  }
};

export const listCharacterDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "CHARACTER_DETAILS_REQUEST",
    });

    if (localStorage.getItem(id)) {
      dispatch({
        type: "CHARACTER_DETAILS_SUCCESS",
        payload: JSON.parse(localStorage.getItem(id)),
      });
    } else {
      const { data } = await axios.get(
        `${REACT_APP_MARVEL_API}/characters/${id}?apikey=${REACT_APP_MARVEL_API_KEY}&ts=1&hash=${REACT_APP_MARVEL_API_HASH}`
      );
      dispatch({
        type: "CHARACTER_DETAILS_SUCCESS",
        payload: data,
      });
      console.log(
        "When LocalStorage does'nt contain this item, the Http call is required"
      );
      localStorage.setItem(id, JSON.stringify(data));
    }
  } catch (err) {
    dispatch({
      type: "CHARACTER_DETAILS_FAIL",
      payload: err,
    });
  }
};

export const listCharacterComics = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "CHARACTER_COMICS_REQUEST",
    });

    const { data } = await axios.get(
      `https://gateway.marvel.com/v1/public/characters/${id}/comics?apikey=340b7af89d6b83c11b669bf6490f3f77&ts=1&hash=71e43c970f4152551e45cdf6f5a57f9a`
    );
    dispatch({
      type: "CHARACTER_COMICS_SUCCESS",
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: "CHARACTER_COMICS_FAIL",
      payload: err,
    });
  }
};
