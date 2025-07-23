import Header from './components/Header'
import "./App.css"
import Home from "./Routes/Home"
import Buy from './Routes/Buy'
import Sell from './Routes/Sell'
import About from './Routes/About'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Blog from './Routes/Blog'

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/buy",
      element: <Buy/>
    },
    {
      path: "/sell",
      element: <Sell/>
    },
    {
      path: "/about",
      element: <About/>
    },
    {
      path: "/blog",
      element: <Blog/>
    }
  ])
  return (
    <>
      <RouterProvider router={route} />
    </>
  )
}

export default App
