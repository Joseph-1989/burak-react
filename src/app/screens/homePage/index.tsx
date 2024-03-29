import React from "react";
import Statistics from "./Statistics";
import PopularDishes from "./PopularDishes";
import ActiveUsers from "./NewDishes";
import Events from "./Events";
import NewDishes from "./NewDishes";
import Advertisement from "./Advertisement";

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
