import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import SignUp from '../pages/Singup/SignUp';
import CheckOut from '../pages/CheckOut/CheckOut';
import BookService from '../pages/BookService/BookService';
import Bookings from '../pages/Bookings/Bookings';
import PrivateRoutes from './PrivateRoutes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: 'login',
        element: <Login></Login>,
      },
      {
        path: 'signup',
        element: <SignUp></SignUp>,
      },
      {
        path: 'book',
        element: (
          <PrivateRoutes>
            <BookService></BookService>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: 'checkout/:id',
        element: (
          <PrivateRoutes>
            <CheckOut></CheckOut>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: 'bookings',
        element: (
          <PrivateRoutes>
            <Bookings></Bookings>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);
export default router;
