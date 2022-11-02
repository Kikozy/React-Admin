// import App from "@/App"
// import Home from "@/views/Home"
// import Page1 from "@/views/Page1"
import React, { lazy } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

const App = lazy(() => import("@/App"))
const Home = lazy(() => import("@/dviews/Home"))
const Page1 = lazy(() => import("@/views/Page1"))

function LoadingComponent(component: JSX.Element) {
	return <React.Suspense fallback={<div>loading...</div>}>{component}</React.Suspense>
}

function baseRouter() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={LoadingComponent(<App />)}>
					<Route path="/home" element={LoadingComponent(<Home />)}></Route>
				</Route>
				<Route path="/page1" element={LoadingComponent(<Page1 />)}></Route>
			</Routes>
		</BrowserRouter>
	)
}
export default baseRouter
