import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import RestaurantPage from "./components/RestaurantPage";

const App = () => {
  return (
    <div className="app text-white">
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
        path: "/restaurant/:resid",
        element: <RestaurantPage/>
      }
    ]
  }
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
