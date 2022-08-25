import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import Section from "../components/section/Section";

import FeedBack from "../components/feedBack/FeedBack";
import HomeCategory from "../components/section/HomeCategory";
import axios from "axios";
// import HomeLoader from "../components/section/HomeLoader/HomeLoader";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [products1, setProducts1] = useState([]);
  const [products2, setProducts2] = useState([]);
  const [products3, setProducts3] = useState([]);

  async function getProducts() {
    let { data } = await axios.get("https://menotrix.pythonanywhere.com/meals");
    setProducts(data);
  }

  async function getProducts1() {
    let { data } = await axios.get(
      "https://menotrix.pythonanywhere.com/meals/category"
    );
    setProducts1(data);
  }
  async function getProducts2() {
    let { data } = await axios.get(
      "https://menotrix.pythonanywhere.com/meals/topproducts"
    );
    setProducts2(data);
  }
  async function getProducts3() {
    let { data } = await axios.get(
      "https://menotrix.pythonanywhere.com/meals/toparrival"
    );
    setProducts3(data);
  }

  useEffect(() => {
    getProducts();
    getProducts1();
    getProducts2();
    getProducts3();

    console.log(products);
  }, []);

  return (
    <div>
      {products ? (
        <div>
          <Header />
          <HomeCategory title="Categories" data={products1} />
          <Section title="Featured Products" data={products} />
          <Section title="Top Products" data={products2} />
          <Section title="New Arrival" data={products3} />
          <FeedBack />
        </div>
      ) : null}
    </div>
  );
};

export default Home;
