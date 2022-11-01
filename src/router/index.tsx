// import App from "@/App"
// import Home from "@/views/Home"
// import Page1 from "@/views/Page1"
import React, { lazy } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

const App = lazy(() => import("@/App"))
const Home = lazy(() => import("@/views/Home"))
const Page1 = lazy(() => import("@/views/Page1"))

function baseRouter() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={
						<React.Suspense fallback={<div>loading...</div>}>
							<App />
						</React.Suspense>
					}
				></Route>
				<Route
					path="/home"
					element={
						<React.Suspense fallback={<div>loading...</div>}>
							<Home />
						</React.Suspense>
					}
				></Route>
				<Route
					path="/page1"
					element={
						<React.Suspense fallback={<div>loading...</div>}>
							<Page1 />
						</React.Suspense>
					}
				></Route>
			</Routes>
		</BrowserRouter>
	)
}
export default baseRouter
