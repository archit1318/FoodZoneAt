import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../contants";
import { Shimmer } from "react-shimmer";
import useRestaurant from "../utils/useRestaurant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestrauntMenu = () => {
  // how to read a dynamic url params
  const resId = useParams();
  const { id } = resId;
  //use proper names
  
  // const [restaurant, setRestaurant] = useState(null);

  const restaurant = useRestaurant(id);

  const dispatch=useDispatch(); 

  const addFoodItem=(item)=>{
    dispatch(addItem(item));
  }


  // console.log(params);
  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="flex ">
      <div>
        <h1 className="p-2 text-xl">Restraunt id:{id}</h1>
        <h2 className="p-2 text-xl">{restaurant?.cards[0]?.card?.card?.info?.name}</h2>
        <img
          className="img-menu p-2 "
          src={
            IMG_CDN_URL +
            restaurant?.cards[0]?.card?.card?.info?.cloudinaryImageId
          }
          alt=""
        />
        <h3 className="p-2 text-xl">Areaname- {restaurant?.cards[0]?.card?.card?.info?.areaName}</h3>
        <h3 className="p-2 text-xl">Address- {restaurant?.cards[0]?.card?.card?.info?.city}</h3>
        <h3 className="p-2 text-xl">Rating - {restaurant?.cards[0]?.card?.card?.info?.avgRating}</h3>
        <h3 className="p-2 text-xl">CostForTwoMessage- {restaurant?.cards[0]?.card?.card?.info?.costForTwoMessage}</h3>
        {/* <h3>{restaurant?.cards[0]?.card?.card?.info?.menu}</h3> */}
      </div>
      <div className="p-5">
        <h1 className="p-1 text-2xl">Menu</h1>
        <ul>
          <li>Pooth Biryani - <button className="p-1 bg-green-50" onClick={()=>addFoodItem("item")}>Add</button> </li>
          <li>Ginger Lime - <button className="p-1 bg-green-50" onClick={()=>addFoodItem("item")}>Add</button></li>
          <li>Strawberry Lime - <button className="p-1 bg-green-50"onClick={()=>addFoodItem("item")}>Add</button></li>
          <li>Pineapple Lime - <button className="p-1 bg-green-50"onClick={()=>addFoodItem("item")}>Add</button></li>
          <li>Pooth Curry - <button className="p-1 bg-green-50"onClick={()=>addFoodItem("item")}>Add</button></li>
          <li>Paneer 50 - <button className="p-1 bg-green-50"onClick={()=>addFoodItem("item")}>Add</button></li>
          <li>Paneer chilli - <button className="p-1 bg-green-50"onClick={()=>addFoodItem("item")}>Add</button></li>
          <li>Paneer Korama - <button className="p-1 bg-green-50"onClick={()=>addFoodItem("item")}>Add</button></li>
          <li>Paneer Paratha - <button className="p-1 bg-green-50"onClick={()=>addFoodItem("item")}>Add</button></li>
          <li>Paneer Khali - <button className="p-1 bg-green-50"onClick={()=>addFoodItem("item")}>Add</button></li>
          <li>Pooth Biryani - <button className="p-1 bg-green-50"onClick={()=>addFoodItem("item")}>Add</button> </li>
          <li>Ginger Lime - <button className="p-1 bg-green-50"onClick={()=>addFoodItem("item")}>Add</button></li>
          <li>Strawberry Lime - <button className="p-1 bg-green-50"onClick={()=>addFoodItem("item")}>Add</button></li>
          <li>Pineapple Lime - <button className="p-1 bg-green-50"onClick={()=>addFoodItem("item")}>Add</button></li>
          <li>Pooth Curry - <button className="p-1 bg-green-50"onClick={()=>addFoodItem("item")}>Add</button></li>
          <li>Paneer 50 - <button className="p-1 bg-green-50"onClick={()=>addFoodItem("item")}>Add</button></li>
          <li>Paneer chilli - <button className="p-1 bg-green-50"onClick={()=>addFoodItem("item")}>Add</button></li>
          <li>Paneer Korama - <button className="p-1 bg-green-50"onClick={()=>addFoodItem("item")}>Add</button></li>
          <li>Paneer Paratha - <button className="p-1 bg-green-50"onClick={()=>addFoodItem("item")}>Add</button></li>
          <li>Paneer Khali - <button className="p-1 bg-green-50"onClick={()=>addFoodItem("item")}>Add</button></li>
          <li>Pooth Biryani - <button className="p-1 bg-green-50"onClick={()=>addFoodItem("item")}>Add</button> </li>
          <li>Ginger Lime - <button className="p-1 bg-green-50"onClick={()=>addFoodItem("item")}>Add</button></li>
          <li>Strawberry Lime - <button className="p-1 bg-green-50"onClick={()=>addFoodItem("item")}>Add</button></li>
          <li>Pineapple Lime - <button className="p-1 bg-green-50"onClick={()=>addFoodItem("item")}>Add</button></li>
          <li>Pooth Curry - <button className="p-1 bg-green-50"onClick={()=>addFoodItem("item")}>Add</button></li>
          <li>Paneer 50 - <button className="p-1 bg-green-50"onClick={()=>addFoodItem("item")}>Add</button></li>
          <li>Paneer chilli - <button className="p-1 bg-green-50"onClick={()=>addFoodItem("item")}>Add</button></li>
          <li>Paneer Korama - <button className="p-1 bg-green-50"onClick={()=>addFoodItem("item")}>Add</button></li>
          <li>Paneer Paratha - <button className="p-1 bg-green-50"onClick={()=>addFoodItem("item")}>Add</button></li>
          <li>Paneer Khali - <button className="p-1 bg-green-50"onClick={()=>addFoodItem("item")}>Add</button></li>
        </ul>
      </div>
    </div>
  );
};
export default RestrauntMenu;
