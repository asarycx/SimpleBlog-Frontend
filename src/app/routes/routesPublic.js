import Loadable from "react-loadable";
import LoadingComponent from "../components/loading";

export default [
  {
    path: "/",
    exact: true,
    auth: false,
    component: Loadable({
      loader: () => import("../pages/landing"),
      loading: LoadingComponent,
    }),
  },
];
