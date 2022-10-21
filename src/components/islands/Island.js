import { React } from "react";



export const Island = ({island}) => {

    return <>
            <div>This Island is {island.size}!</div>
            <div>This Island is in {island.weather} conditions year-round.</div>
            <div>This Island's max population is {island.populationMax}</div>
    </>
}