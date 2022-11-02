// import App from "@/App"
// import Home from "@/views/Home"
// import Page1 from "@/views/Page1"
import React, { lazy } from "react"
import { createBrowserRouter, Route, Routes, Navigate } from "react-router-dom"

const App = lazy(() => import("@/App"))
const Home = lazy(() => import("@/views/Home"))
const Page1 = lazy(() => import("@/views/Page1"))

function LoadingComponent(component: JSX.Element) {
	return <React.Suspense fallback={<div>loading...</div>}>{component}</React.Suspense>
}

const baseRouter = createBrowserRouter([
	{
		path: "/",
		element: <Navigate to="/home" />,
	},	uni.getUserProfile({
		lang: 'zh_CN',
		desc: '用户登录',
		success: async userInfoRes => {
			wxLoginState.tempUserData = userInfoRes.userInfo
			console.log(wxLoginState.tempUserData)
		},
		fail: err => {
			return
		}
	})
	{
		path: "/",
		element: LoadingComponent(<App />),
		children: [
			{
				path: "/home",
				element: LoadingComponent(<Home />),
			},
			{
				path: "/page1",
				element: LoadingComponent(<Page1 />),
			},
		],
	},
])

// function baseRouter() {
// 	return (
// 		<BrowserRouter>
// 			<Routes>
// 				<Route path="/" element={LoadingComponent(<App />)}>
// 					<Route path="/home" element={LoadingComponent(<Home />)}></Route>
// 				</Route>
// 				<Route path="/page1" element={LoadingComponent(<Page1 />)}></Route>
// 			</Routes>
// 		</BrowserRouter>
// 	)
// }
export default baseRouter
