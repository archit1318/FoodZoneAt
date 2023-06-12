import { useState,useEffect } from "react";
import { FETCH_MENU_URL } from "../contants";
const useRestaurant = (Id) => {
  const [restaurant, setRestaurant] = useState(null);
  // get data from api's

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(FETCH_MENU_URL + Id);
    const json = await data.json();
    console.log(json);
    setRestaurant(json.data);
  }
  return restaurant;
};

export default useRestaurant;
