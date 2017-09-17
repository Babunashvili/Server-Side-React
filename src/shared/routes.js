import Home from "./modules/home/scenes/Home";
import Repos from "./modules/repos/scenes/Repos";

const routes = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/repos",
    exact: true,
    component: Repos
  }
];

export default routes;
