import { Home } from "../components/pages/Home";
import { Setting } from "../components/pages/Setting";
import { Page404 } from "../components/pages/Page404";
import { Mental } from "../components/pages/Mental";
import { Fijical } from "../components/pages/Fijical";
import { Tecnic } from "../components/pages/Tecnic";
import { UserManagement } from "../components/pages/UserManagement";

export const homeRoutes = [
  {
    path: "/",
    exact: true,
    children: <Home />
  },
  {
    path: "/mental",
    exact: false,
    children: <Mental />
  },
  {
    path: "/fijical",
    exact: false,
    children: <Fijical />
  },
  {
    path: "/tecnic",
    exact: false,
    children: <Tecnic />
  },
  {
    path: "/setting",
    exact: false,
    children: <Setting />
  },
  {
    path: "/user",
    exact: false,
    children: <UserManagement />
  },
  {
    path: "*",
    exact: false,
    children: <Page404 />
  }
];
