import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import SignIn from './components/Sign/SignIn';
import Main from './components/Main/Main';
import DiscoverPeople from './components/DiscoverPeople/DiscoverPeople';
import Feed from './components/Feed/Feed';
import MyFriends from './components/Feed/MyFriends/MyFriends';
import FindFriends from './components/Feed/FindFriends/FindFriends';
import RequestedFriends from './components/Feed/RequestedFriends.js/RequestedFriends';

function App() {
  let router=createBrowserRouter([
    {
      path:'',
      element:<Home/>
    },
    {
      path:'Home',
      element:<Home/>
    },
    {
      path:'ForgotPassword',
      element:<ForgotPassword/>
    },
    {
      path:'SignIn',
      element:<SignIn/>
    },
    {
      path:'Main',
      element:<Main/>
    },
    {
      path:'discoverPeople/:user',
      element:<DiscoverPeople/>
    },
    {
      path:"Feed/:user",
      element:<Feed/>,
      children:[
        {
          path:'MyFriends',
          element:<MyFriends/>
        },
        {
          path:'FindFriends',
          element:<FindFriends/>
        },
        {
          path:'RequestedFriends',
          element:<RequestedFriends/>
        }
      ]
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
