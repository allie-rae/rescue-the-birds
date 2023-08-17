import App from "./App";
import { Adopt, FrontPage, PageNotFound, Volunteer, Donate, Board, Relinquish } from "./Pages";

export const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <PageNotFound />,
    children: [
      { path: "/", element: <FrontPage />, exact: true },
      { path: "/adopt", element: <Adopt />, exact: true },
      { path: "/volunteer", element: <Volunteer />, exact: true },
      { path: "/donate", element: <Donate />, exact: true },
      { path: "/board", element: <Board />, exact: true },
      { path: "/relinquish", element: <Relinquish />, exact: true },
      { path: "/404", element: <PageNotFound /> },
    ],
  },
];
