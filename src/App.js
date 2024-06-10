import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import LangContextProvider from './Context/LangContext';
let router = createBrowserRouter([
  {path:"/",element:<Layout />,children:[
    {index:true,element:<Home />}
  ]}
])

function App() {
  return <>
  <LangContextProvider>
  <RouterProvider router={router}></RouterProvider>

  </LangContextProvider>

  </>

}

export default App;
