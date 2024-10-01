import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import RestaurantPage from "./components/RestaurantPage";
import { lazy, Suspense } from "react";

const Grocery = lazy(()=> import('./components/Grocery'))

const App = () => {
  return (
    <div className="">
      <Header />
      <Outlet/>

    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error/>,
    children:[
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantPage/>
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<div>Loading...</div>}><Grocery/></Suspense>
      }
    ]
  }
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
