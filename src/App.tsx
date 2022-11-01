import { Layout } from "antd"
import React from "react"
import "./app.scss"
import tupian from "../public/R-C.jpg"

const App = () => {
	function onjinru(event: React.MouseEvent) {
		console.log("进入", event)
	}
	function onlikai(event: React.MouseEvent) {
		console.log("离开", event)
	}
	function ondyidong(event: React.MouseEvent) {
		console.log("移动", event)
	}

	return (
		<>
			<div className="box">
				<div
					className="view"
					onMouseEnter={(event) => onjinru(event)}
					onMouseLeave={(event) => onlikai(event)}
					onMouseOver={(event) => onlikai(event)}
				>
					<img src={tupian} alt="" />
				</div>
				{/* 放大 */}
				<div className="fd"></div>
			</div>
		</>
	)
}

export default App
