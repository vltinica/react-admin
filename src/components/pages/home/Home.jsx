import React from "react";
import "./home.css";
import FeaturedInfo from "../../featuredInfo/FeaturedInfo";
import Chart from "../../chart/Chart";
import { userData } from "../dummyData";
import WidgetSm from "../../widgetSm/WidgetSm";
import WidgetLg from "../../widgetSm/WidgetLg";

const Home = () => {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <div className="homeWidget">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
};

export default Home;
