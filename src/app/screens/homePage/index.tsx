import React from "react";
import Statistics from "./Statistics";
import PopularDishes from "./PopularDishes";
import ActiveUsers from "./ActiveUsers";
import NewDishes from "./NewDishes";
import Advertisement from "./Advertisement";
import Events from "./Events";
import "../../../css/home.css";
import OrdersPage from "../ordersPage";

export default function HomePage() {
  return (
    <div className={"homepage"}>
      <Statistics />
      <PopularDishes />
      <NewDishes />
      <Advertisement />
      <ActiveUsers />
      <Events />
    </div>
  );
}
