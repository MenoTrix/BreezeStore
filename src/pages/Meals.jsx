import Category from "../shared/Category";
import SubCategory from "../shared/SubCategory";
import React, { useEffect } from "react";
import { useContext } from "react";
import { dataApiContext } from "../context/ApiContext";
import "../shared/Category.css";
import CardItem from "../shared/CardItem";
import Loading from "../shared/Loading";
import Drawer from "../shared/drawer/Drawer";

export default function Meals() {
  let params = "/breakfast";

  let { category, getData } = useContext(dataApiContext);

  useEffect(() => {
    getData(params);
  }, []);
  // let { categoryLaunch, getData } = useContext(dataApiContext);

  // useEffect(() => {
  //   getData(params);
  // }, []);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <Drawer />
        </div>
        <div className="col-md-9">
          <div className="row p-3 g-3">
            {!category || category.length !== 0 ? (
              category.map((item) => (
                <div key={item.id} className="col-xl-3 col-lg-4 col-sm-6">
                  <CardItem item={item} params={params} />
                </div>
              ))
            ) : (
              <Loading />
            )}

            {/* {!categoryLaunch || categoryLaunch.length !== 0 ? (
              categoryLaunch.map((item) => (
                <div key={item.id} className="col-xl-3 col-lg-4 col-sm-6">
                  <CardItem item={item} params={params} />
                </div>
              ))
            ) : (
              <Loading />
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
}
