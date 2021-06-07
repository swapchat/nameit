import React, { useState } from "react";
import Header from "../Header/Header";
import ResultsContainer from "../ResultsContainer/ResultsContainer";
import SearchBox from "../SearchBox/SearchBox";
import "./App.css";

const name = require("@rstacruz/startup-name-generator");

function App() {
  const [title] = useState("Name It!");
  const [headerExpanded, setHeaderExpanded] = useState(true);
  const [suggestedNames, setSuggestedNames] = useState([]);

  const inputChangeHandler = (inputText) => {
    setHeaderExpanded(!inputText);
    setSuggestedNames(() => (inputText ? name(inputText) : []));
  };

  return (
    <div>
      <Header headerExpanded={headerExpanded} headerTitle={title} />
      <SearchBox onInputChange={inputChangeHandler} />
      <ResultsContainer suggestedNames={suggestedNames} />
    </div>
  );
}

export default App;
