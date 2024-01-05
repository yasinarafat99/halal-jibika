import React, { useEffect, useState } from "react";
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { auth } from '../../Firbase/firbase.config';
// import { json } from 'react-router-dom';
import FavoriteShow from "./FavoriteShow";

function Favorite() {
  const [favData, setFavData] = useState();

  useEffect(() => {
    const favDataFunc = async () => {
      try {
        const data = await fetch("http://localhost:9000/jobs");
        const jsontArr = await data.json();
        setFavData(jsontArr?.filter((fav) => fav.isFavorite));
      } catch (err) {
        console.log(err);
      }
    };
    favDataFunc();
  }, []);
  return (
    <>
      {favData?.map((fav) => (
        <FavoriteShow fav={fav} key={fav.id} />
      ))}

      {/* <h1>Im Favorite page</h1>
      <div>{favData?.map(fav=>(
        <div key={fav.id}>{fav.title}</div>
      ))}</div> */}
    </>
  );
}

export default Favorite;
