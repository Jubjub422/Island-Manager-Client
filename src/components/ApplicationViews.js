import React from "react";
import { EventRoutes } from "./routes/EventRoutes";
import { IslandRoutes } from "./routes/IslandRoutes";
import { LackeyRoutes } from "./routes/LackeyRoutes";
import { PersonaRoutes } from "./routes/PersonaRoutes";

export const ApplicationViews = () => {
  return <>
        <EventRoutes />
        <IslandRoutes />
        <LackeyRoutes />
        <PersonaRoutes />
  </>;
};
