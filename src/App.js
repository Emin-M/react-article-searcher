import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import axios from "axios";
import News from "./components/News";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  const API_KEY = "azG7YOZ2fLxZXNA6nwoV16KEiSqFjSk6";

  const [term, setTerm] = useState("election");
  const [data, setData] = useState([]);
  const [isloading, setIsloading] = useState(true);

  const fetchingNews = async () => {
    setIsloading(true);
    const res = await axios.get(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${term}&api-key=${API_KEY}
      `
    );
    setData(res.data.response.docs);
    setIsloading(false);
  };

  useEffect(() => {
    fetchingNews();
  }, [term]);

  return (
    <div className="App">
      <Header term={term} setTerm={setTerm} />
      {isloading ? (
        <div className="loading">Loading...</div>
      ) : (
        <News data={data} />
      )}
      <Footer />
    </div>
  );
};

export default App;
