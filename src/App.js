import React, { useContext } from "react";

const englishMessages = message => {
  if (message == "hello.world") {
    return "Hello, World!";
  }
  return "Not yet translated";
};

const TranslationContext = React.createContext();

const Greeting = () => {
  const translate = useContext(TranslationContext);
  return <div>{translate("hello.world")}.</div>;
};

const App = () => (
  <TranslationContext.Provider value={englishMessages}>
    <Greeting />
  </TranslationContext.Provider>
);

export default App;
