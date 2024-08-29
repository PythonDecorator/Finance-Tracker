import {createBrowserRouter} from "react-router-dom";
import HomePage from "./pages/home/HomePage.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        // element: <AuthBaseLayout/>,
        // errorElement: <ErrorPage/>,
        children: [
            {index: true, element: <HomePage/>},
        ]
    },
]);

export default router;