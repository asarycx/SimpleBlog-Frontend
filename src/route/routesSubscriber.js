import Loadable from "react-loadable";
import LoadingComponent from "../pages/shared/loading";

export default [
  {
    path: "/subscriber",
    exact: true,
    auth: true,
    component: Loadable({
      loader: () => import("../pages/subscriber/dashboard"),
      loading: LoadingComponent,
    }),
  },
  {
    path: "/subscriber/history",
    exact: true,
    auth: true,
    component: Loadable({
      loader: () => import("../pages/subscriber/history"),
      loading: LoadingComponent,
    }),
  },
];
