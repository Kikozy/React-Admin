import React from "react"
import { createRoot } from "react-dom/client"
import "antd/dist/antd.css"
import "@/assets/styles/global.scss"
import Router from "@/router"

const root = createRoot(document.querySelector("#root") as HTMLElement)
// const outlet = useRoutes(routes)
// console.log(outlet)
root.render(
	<React.StrictMode>
		<Router />
	</React.StrictMode>
)
