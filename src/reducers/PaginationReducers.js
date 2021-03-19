export const PaginateReducer = (
  state = { charactersPerPage: 4, currentPage: 1 },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case "PAGINATE_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "PAGINATE_SUCCESS":
      return {
        ...state,
        loading: false,
        currentPage: payload,
      };
    case "PAGINATE_FAIL":
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
