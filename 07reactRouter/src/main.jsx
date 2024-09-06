import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import ContactUs from './components/ContactUs/ContactUs.jsx'
import User from './components/User/User.jsx'
import Github from './components/Github/Github.jsx'
import GithubProfile from './components/Github/GithubProfile.jsx'
import { useLoaderData } from 'react-router-dom'

// const router  = createBrowserRouter([
// 	{
// 		path:'/',
// 		element:<Layout/>,
// 		children:[
// 			{
// 				path:"",
// 				element:<Home/>
// 			},
// 			{
// 				path:"about",
// 				element:<About/>
// 			},
// 			{
// 				path:"contact",
// 				element:<ContactUs/>
// 			}
// 		]
// 	}
// ])


const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route index element={<Home />} />  {/* Default route for the home page */}
			<Route path="about" element={<About />} />
			<Route path="contact" element={<ContactUs />} />
			<Route path="user" element={<User/>} />
			<Route path="user/:userName" element={<User/>} />
			{/* <Route loader = {} path="github" element={<Github/>} /> */}
			<Route path="github/:userName" element={<Github/>} />
		</Route>
	)
);



createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
)
