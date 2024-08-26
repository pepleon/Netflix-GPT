
import Body from './components/Body';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Browse from './components/Browse';
import Login from './components/Login';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';

const appRouter = createBrowserRouter(
[
  { path: "/",
   element: (
      <Provider store={appStore}>
        <Body />
      </Provider>  ),
    
  },

  { path: "/login",
    element:(
      <Provider store={appStore}>
        <Login />
      </Provider>
    ),
  },

  { path: "/Browse",
    element: (
      <Provider store={appStore}>
        <Browse />
      </Provider>
    ),
  },



]
);



function App() {
  return (
    
    <RouterProvider router={appRouter}/>
  
  );
}

export default App;
