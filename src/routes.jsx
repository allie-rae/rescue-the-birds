import App from "./App";
import { BasicCare, PageNotFound } from "./Pages";

export const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <PageNotFound />,
    children: [
      { path: "/", element: <BasicCare /> },
      { path: "/404", element: <PageNotFound /> },
    ],
  },
];
