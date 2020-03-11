import React from "react";
import "./App.scss";
import Layout from "./components/Layout/Layout";
import ExhibitionList from "./components/ExhibitionList/ExhibitionList";

function App() {
  return (
    <div className="App">
      <Layout>
        <ExhibitionList />
      </Layout>
    </div>
  );
}

export default App;
