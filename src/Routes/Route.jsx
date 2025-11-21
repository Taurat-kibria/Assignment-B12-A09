import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import TopRatedPlants from "../components/TopRatedPlants";
import PlantDetails from "../components/PlantDetails";
import Login from "../components/Login";
import Resgistration from "../components/Resgistration";
import AuthLayout from "../components/AuthLayout";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        children: [


            {
                path: "/",
                element: <TopRatedPlants></TopRatedPlants>,
                loader: () => fetch("/plants.json")
            },

        ]
    },
    {
        path: "/auth",
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: "/auth/login",
                element: <Login></Login>
            },
            {
                path: "/auth/registration",
                element: <Resgistration></Resgistration>
            },
        ]
    },
    {
        path: "/myProfile",
        element: <div>my profile</div>
    },
    {
        path: "/plants/:id",
        element: <PlantDetails></PlantDetails>
    },
    {
        path: '/plants',
        element: <div>plants section</div>
    },
    {
        path: "/*",
        element: <div>404 error</div>
    },


])