import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Homepage from './pages/Homepage.jsx'
import Scorecard from './pages/Scorecard.jsx'
import Fanzone from './pages/Fanzone.jsx'
import Coupons from './pages/Coupons.jsx'
import Error from './pages/Error.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />
  },
  {
    path: "/scorecard",
    element: <Scorecard />
  },
  {
    path: "/fanzone",
    element: <Fanzone />
  },
  {
    path: "/coupons",
    element: <Coupons />
  },
  {
    path: "/*",
    element: <Error />
  },
])

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
