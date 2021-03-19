import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { lazy, Suspense } from "react";

const HomeScreen = lazy(() => import("./screens/HomeScreen"));
const CharacterScreen = lazy(() => import("./screens/CharacterScreen"));

const App = () => {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<></>}>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/character/:id" component={CharacterScreen} />
      </Suspense>
    </Router>
  );
};

export default App;
