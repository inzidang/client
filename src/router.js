import { Outlet, createBrowserRouter } from "react-router-dom";
import NotFound from "./app/NotFound";
import Page from "./Page";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Outlet />,
        errorElement: <NotFound />,
        children: [
            {
                path: "",
                element: <Page/>
            }
        ]
    }
]);
export default router;