import React from "react";
import Home from "./screens/home";
import Contact from "./screens/contact";
import News from "./screens/News";
import Images from "./screens/Images";
import Videos from "./screens/Videos";
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
      <Route path="/Videos" exact component={Videos} />
      <Route path="/contact" exact component={Contact} />
      <Route path="/Images" exact component={Images} />
      <Route path="/News" exact component={News} />
      <Footer />
    </div>
  </Router>
);

export default AppRouter;
