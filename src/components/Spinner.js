const Spinner = () => (
  <img
    src="/loader.gif"
    alt="Loading"
    style={{
      position: "absolute",
      height: "100px",
      width: "100px",
      top: "50%",
      left: "50%",
      marginLeft: "-50px",
      marginTop: "-50px",
    }}
  />
);

export default Spinner;
