import Body from "./components/Body";
import Header from "./components/Header";
import { Provider } from "react-redux";
import store from "./redux/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Medicalsupplies from "./components/Medicalsupplies";
const approute = createBrowserRouter([
  {
    path: '/',
    element: <Body />
  },
  {
    path:'/medicalsupplies',
    element:<Medicalsupplies/>
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
