import { React, useEffect, useState } from "react";
import {Island} from './Island'

export const IslandList = () => {
    const [islands, setIslands] = useState([])

    useEffect(() => {
        fetch(`http://localhost:8088/islands`)
        .then(res=>res.json)
        .then((data) => setIslands(data))


    },[])


  return <>
  {
    islands.map((island) => <Island island={island}/>)
  }
  
  </>;
};
