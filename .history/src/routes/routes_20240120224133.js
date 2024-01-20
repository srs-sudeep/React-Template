import { Navigate, useRoutes } from 'react-router-dom'

import Page404 from '../pages/Page404'

export default function Router() {
  //   const navigate = useNavigate()
  //   const location = useLocation()
  //   useEffect(() => {
  //     // if (!token) {
  //     //   localStorage.clear();
  //     //   sessionStorage.clear();
  //     //   navigate('/login', { replace: true });
  //     // }
  //     async function validation() {
  //       try {
  //         const response = await axios.post(
  //           'http://localhost:5000/api/verify/person',
  //           {
  //             withCredentials: true,
  //           },
  //         )
  //         const { person } = response.data
  //         // if(!response.status==200)
  //         // navigate('/login', { replace: true });
  //         if (
  //           person === 'Student' &&
  //           (location.pathname.startsWith('/vendor') ||
  //             location.pathname.startsWith('/admin'))
  //         )
  //           window.location.pathname = '/dashboard'
  //         if (
  //           person === 'Vendor' &&
  //           (location.pathname.startsWith('/dashboard') ||
  //             location.pathname.startsWith('/admin'))
  //         )
  //           window.location.pathname = '/vendor'
  //         if (
  //           person === 'Admin' &&
  //           (location.pathname.startsWith('/vendor') ||
  //             location.pathname.startsWith('/dashboard'))
  //         )
  //           window.location.pathname = '/admin'
  //       } catch (error) {
  //         if (error.status(401)) {
  //           localStorage.clear()
  //           sessionStorage.clear()
  //           navigate('/login', { replace: true })
  //         } else if (
  //           error.response &&
  //           error.response.data &&
  //           error.response.data.msg
  //         ) {
  //           const errorMessage = error.response.data.msg
  //           // Display the error message to the user (e.g., using an alert or on the UI)
  //           alert(errorMessage)
  //         } else {
  //           // Handle unexpected errors
  //           console.error(error)
  //           // If token validation fails or there's an error, navigate the user to the login page
  //         }
  //         navigate('/login', { replace: true })
  //       }
  //     }
  //     if (!window.location.pathname === '/login') validation()
  //   }, [navigate, location.pathname])
  const routes = useRoutes([
    {
      path: '/login',
      element: <LoginPage />,
    },
    // {
    //   path: '/dashboard',
    //   element: <DashboardLayout />,
    //   children: [
    //     { path: '', element: <Navigate to="/dashboard/app" /> },
    //     // { path: '', element: <DashboardAppPage /> },
    //     { path: 'app', element: <DashboardAppPage /> },
    //     { path: 'user', element: <UserPage /> },
    //     { path: 'products', element: <ProductsPage /> },
    //     { path: 'contactUs', element: <ContactUs /> },
    //     { path: 'payment', element: <Payment /> },
    //     { path: 'profile', element: <Profile /> },
    //   ],
    // },

    // {
    //   path: '/vendor/',
    //   element: <VendorDashboardLayout />,
    //   children: [
    //     { path: '', element: <Navigate to="/vendor/dashboard" /> },
    //     // { path: '', element: <VDashboard /> },
    //     { path: 'dashboard', element: <VDashboard /> },
    //     { path: 'liveService', element: <VLiveService /> },
    //     { path: 'history', element: <VHistory /> },
    //     { path: 'menu', element: <VMenu /> },
    //     { path: 'studentList', element: <VStudentList /> },
    //     { path: 'profile', element: <VProfile /> },
    //   ],
    // },
    // {
    //   path: '/admin',
    //   element: <AdminDashboardLayout />,
    //   children: [
    //     { path: '', element: <Navigate to="/admin/dashboard" /> },
    //     { path: 'dashboard', element: <AdminDashboard /> },
    //     { path: 'studentDetails', element: <AdminStudentDetails /> },
    //     { path: 'galavStudents', element: <GalavStudents /> },
    //     { path: 'kumarStudents', element: <KumarStudents /> },
    //     { path: 'saiStudents', element: <SaiStudents /> },
    //     { path: 'transactionDetails', element: <AdminTransactionDetails /> },
    //     { path: 'kumarTransaction', element: <KumarTransaction /> },
    //     { path: 'galavTransaction', element: <GalavTransaction /> },
    //     { path: 'saiTransaction', element: <SaiTransaction /> },
    //     { path: 'messDetails', element: <AdminMessDetails /> },
    //     { path: 'upload', element: <Upload /> },
    //   ],
    // },
    // {
    //   // element: <SimpleLayout />,
    //   children: [
    //     { element: <Navigate to="/" /> },
    //     { path: '', element: <LoginPage /> },
    //     { path: '/login', element: <LoginPage /> },
    //     // { path: '404', element: <Page404 /> },
    //     // { path: '*', element: <Navigate to="/404" /> },
    //   ],
    // },
    {
      path: '*',
      children: [
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
  ])

  return routes
}
