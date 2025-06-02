import { createBrowserRouter, Navigate, Route, RouterProvider, Routes } from 'react-router';
import { ContextProvider } from './Context/ConfigContext'
import './index.css'
import AppLayout from './Layouts/AppLayout'
import Login from './Pages/Login/Login';
import { routes } from './Routes/Routes';

function App() {
  // const [count, setCount] = useState(0);
  const token = localStorage.getItem('token');

  // if (!token){
  //   return (
  //     <Routes>
  //       <Route path='/' element={<Login/>}/>
  //     </Routes>
  //   )
  // }

  const routesMap = !token ? [
    {
      element: <AppLayout />,
      // errorElement: <Page404 />,
      children: routes,
    },
  ] :
  [
    { path: '/', element: <Login /> },
    { path: "*", element: <Navigate to="/" replace />  },
  ];

  const router = createBrowserRouter(routesMap)

  return (
    <section>
      <ContextProvider> 
        <RouterProvider router={router} />
      </ContextProvider>
    </section>
  )
}

export default App
