import Loadable from "react-loadable";
import LoadingComponent from "../pages/shared/loading";

export default [
  {
    path: "/",
    exact: true,
    auth: false,
    component: Loadable({
      loader: () => import("../pages/public/landing"),
      loading: LoadingComponent,
    }),
  },
  {
    path: "/about",
    exact: true,
    auth: false,
    component: Loadable({
      loader: () => import("../pages/public/about"),
      loading: LoadingComponent,
    }),
  },
  {
    path: "/service",
    exact: true,
    auth: false,
    component: Loadable({
      loader: () => import("../pages/public/services/list"),
      loading: LoadingComponent,
    }),
  },
  {
    path: "/service/:slug",
    exact: true,
    auth: false,
    component: Loadable({
      loader: () => import("../pages/public/services/detail"),
      loading: LoadingComponent,
    }),
  },
];
