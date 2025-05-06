import Header from './components/Header'
import "./App.css"
import Home from "./Routes/Home"
import Buy from './Routes/Buy'
import Sell from './Routes/Sell'
import Blog from './Routes/Blog'
import About from './Routes/About'
import { createBrowserRouter, RouterProvider } from 'react-router'

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
      path: "/blog",
      element: <Blog/>
    },
    {
      path: "/about",
      element: <About/>
    }
  ])
  return (
    <>
      <RouterProvider router={route} />
    </>
  )
}

export default App
