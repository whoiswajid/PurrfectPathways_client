import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home";
import AboutUs from "../Pages/Home/AboutUs";
import LogIn from "../Pages/LogIn/LogIn";
import Register from "../Pages/Register/Register";
import Services from "../Pages/Home/Services/Services";
import ReviewUs from "../Pages/Home/ReviewUs";
import Details from "../Pages/Details/Details";
import PopularService from "../Pages/Home/Services/PopularService";
import MySchedules from "../Pages/MySchedules/MySchedules";
import PrivateRoute from "./PrivateRoute";
import AddServices from "../Pages/AddServices/AddServices";
import Error from "../Pages/Error";
import ManageService from "../Pages/ManageService/ManageService";
import UpdateServices from "../Pages/AddServices/UpdateServices";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
           {
            path: '/',
            element: <Home></Home>
           },
           {
            path: '/about',
            element: <AboutUs></AboutUs>
           },
           {
            path:'/login',
            element: <LogIn></LogIn>,
           },
           {
            path: '/popularService',
            element: <PopularService></PopularService>,
            
            
           },
           {
            path: '/register',
            element: <Register></Register>
           },
           {
            path: '/services',
            element: <Services></Services>
           },
           {
            path: '/reviewUs',
            element: <ReviewUs></ReviewUs>
           },
           {
            path: '/details/:id',
            element: <PrivateRoute><Details></Details></PrivateRoute>,
            loader: ({params}) => fetch(`https://assignment-0002-purrfect-pathways-server.vercel.app/services/${params.id}`)
           },
           {
            path: '/mySchedules',
            element: <PrivateRoute><MySchedules></MySchedules></PrivateRoute>
           },
           {
            path: '/addservices',
            element: <PrivateRoute><AddServices></AddServices></PrivateRoute>
           },
           {
            path: '/manageService',
            element: <PrivateRoute><ManageService></ManageService></PrivateRoute>,
            loader : () => fetch('https://assignment-0002-purrfect-pathways-server.vercel.app/services')
           },
           {
            path: '/updateServices/:id',
            element: <UpdateServices></UpdateServices>,
            loader: ({params}) => fetch(`https://assignment-0002-purrfect-pathways-server.vercel.app/services/${params.id}`)
           }




        ]
    },
]);

export default router