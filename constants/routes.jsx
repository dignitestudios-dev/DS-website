import { lazy } from "react";

const Home = lazy(() => import("../pages/Home"));

export const routes = [
  {
    title: "Landing Page",
    url: "/",
    page: <Home />,
  },
];
