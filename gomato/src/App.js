import Body from "./components/Body";
import Header from "./components/Header";
import { Provider } from "react-redux";
import store from "./redux/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Medicalsupplies from "./components/Medical Supplies/Medicalsupplies";
import Asianfoods from "./components/Asianfoods";
import User from './components/User'
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
