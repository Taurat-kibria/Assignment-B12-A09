import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import TopRatedPlants from "../components/TopRatedPlants";
import PlantDetails from "../components/PlantDetails";
import Login from "../components/Login";
import Resgistration from "../components/Resgistration";
import AuthLayout from "../components/AuthLayout";
import ForgetEmail from "../components/ForgetEmail";
import ProtectedPlant from "../components/protected/ProtectedPlant";
import DetailsLayout from "../Layouts/DetailsLayout";
import PrivateRoute from "../components/protected/PrivateRoute";



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
                path: "/auth/login/forget",
                element: <ForgetEmail></ForgetEmail>
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
        path: '/plants',
        element: <div>plants section</div>,

    },
    {
        path: "/details/:id",
        loader: () => fetch("/plants.json"),
        element: <PrivateRoute>
            <DetailsLayout></DetailsLayout>
        </PrivateRoute>
    },
    {
        path: "/*",
        element: <div>404 error</div>
    },


])