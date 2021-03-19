export const charactersListReducer = (state = { characters: [] }, action) => {
  const { type, payload } = action;
  switch (type) {
    case "CHARACTERS_LIST_REQUEST":
      return {
        loading: true,
      };
    case "CHARACTERS_LIST_SUCCESS":
      return {
        loading: false,
        characters: payload.data.results,
      };
    case "CHARACTERS_LIST_FAIL":
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const characterDetailsReducer = (
  state = { character: {}, comics: [] },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case "CHARACTER_DETAILS_REQUEST":
    case "CHARACTER_COMICS_REQUEST":
      return {
        loading: true,
      };
    case "CHARACTER_DETAILS_SUCCESS":
      return {
        ...state,
        loading: false,
        character: payload.data.results[0],
      };
    case "CHARACTER_COMICS_SUCCESS":
      return {
        ...state,
        comics: payload.data.results,
      };
    case "CHARACTER_DETAILS_FAIL":
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
