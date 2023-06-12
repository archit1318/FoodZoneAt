
import { IMG_CDN_URL } from "../contants";
import { useContext } from "react";
import userContext from "../utils/userContext";

const RestrauntCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
}) => {
  const {user}=useContext(userContext);
  return (
    <div className="w-56 h-110 p-2 m-2 shadow-lg bg-orange-100 ">
      <img
        src={
            IMG_CDN_URL +
          cloudinaryImageId
        }
        alt=""
      />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3  style={{"word-wrap": "break-word"}}>{cuisines.join(",")}</h3>
      <h4>{lastMileTravelString} </h4>
      {/* <h5 className="font-bold">{user.name}</h5>
      <h5 className="font-bold">{user.email}</h5> */}
      
    </div>
  );
};

export default RestrauntCard;