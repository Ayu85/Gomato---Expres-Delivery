import Body from "./components/Body";
import Header from "./components/Header";
import { Provider } from "react-redux";
import store from "./redux/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Medicalsupplies from "./components/Medical Supplies/Medicalsupplies";
import Asianfoods from "./components/Asianfoods";
import User from './components/User'
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Waterdelivery from "./components/Waterdelivery";
const approute = createBrowserRouter([
  {
    path: '/',
    element: <Body />
  },
  {
    path: '/medicalsupplies',
    element: <Medicalsupplies />
  },
  {
    path: '/asianfood',
    element: <Asianfoods />
  },
  {
    path: '/user',
    element: <User />
  },
  {
    path: '/cart',
    element: <Cart />
  },
  {
    path: '/checkout',
    element: <Checkout />
  },
  {
    path: '/waterdelivery',
    element: <Waterdelivery />
  }
])
function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={approute} />
    </Provider>
  );
}


export default App;
