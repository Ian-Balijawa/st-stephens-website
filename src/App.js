import React from "react";
import Home from "./screens/home";
import Graphic from "./screens/graphic";
import Contact from "./screens/contact";
import Seminars from "./screens/seminars";
import Fashion from "./screens/fashion";
import Interior from "./screens/interior";
import { Footer } from "./components/Footer";

import { Navigation } from "./components/Navigation";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { css } from "emotion";
import variables from "./config/style-variables";

const globalStyling = css`
  font-family: ${variables.fonts.$primaryFont};
  color: ${variables.colors.grey};
`;

const AppRouter = () => (
  <Router>
    <div className={globalStyling}>
      <Route path="/" component={Navigation} />
      <Route path="/" exact component={Home} />
      <Route path="/graphic" exact component={Graphic} />
      <Route path="/seminars" exact component={Seminars} />
      <Route path="/contact" exact component={Contact} />
      <Route path="/fashion" exact component={Fashion} />
      <Route path="/interior" exact component={Interior} />
      <Footer />
    </div>
  </Router>
);

export default AppRouter;
