import Statistics from "./Statistics";
import PopularDishes from "./PopularDishes";
import ActiveUsers from "./ActiveUsers";
import NewDishes from "./NewDishes";
import Advertisement from "./Advertisement";
import Events from "./Events";
import "../../../css/home.css";
import { useEffect } from "react";

export default function HomePage() {
  // Selector: Store => Data
  useEffect(() => {
    // Backend server data request => Data
    // Slice: Data => Store
  }, []);

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
