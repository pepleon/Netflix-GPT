
import Body from './components/Body';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Browse from './components/Browse';
import Login from './components/Login';

const appRouter = createBrowserRouter(
[
  { path: "/",
    element: <Body/>,
  },

  { path: "/login",
    element: <Login/>,
  },

  { path: "/Browse",
    element: <Browse/>,
  },



]
);



function App() {
  return (
   <RouterProvider router={appRouter}/>
  );
}

export default App;
