export const changeCurrentPage = (number) => async (dispatch) => {
  try {
    dispatch({
      type: "PAGINATE_REQUEST",
    });
    dispatch({
      type: "PAGINATE_SUCCESS",
      payload: number,
    });
  } catch (err) {
    dispatch({
      type: "PAGINATE_FAIL",
      payload: err,
    });
  }
};
