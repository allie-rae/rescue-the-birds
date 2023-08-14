import App from "./App";
import { FrontPage, PageNotFound } from "./Pages";

export const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <PageNotFound />,
    children: [
      { path: "/", element: <FrontPage /> },
      { path: "/404", element: <PageNotFound /> },
    ],
  },
];
