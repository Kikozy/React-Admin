import React, { useState } from "react"
import axios from "axios"
import "./home.scss"

export default function Home() {
	const [on, setOn] = useState(false)
	const [data, setData] = useState(0)

	const [accountData, setAccountData] = useState({
		user: "",
		pass: "",
	})
	const lightOn = () => setOn(true)
	const lightOff = () => setOn(false)
	const addData = () => {
		setData(data + 1)
		setData(data + 1)
		setData(data + 1)
		console.log("这是啥呀", data)
	}

	//提交表单
	function handleSubmit() {
		axios.defaults.headers = {
			"Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
		}
		axios.post(`http://127.0.0.1:9005/logins`, accountData).then((data) => console.log(data))
	}

	return (
		<>
			<div className={on ? "light-on" : "light-off"}>
				<h3>Home</h3>
				<button onClick={lightOn}>打开</button>
				<button onClick={lightOff}>关闭</button>
				<button onClick={addData}>值：{data}</button>
				<div className="area-form">
					<div className="input-item">
						<label htmlFor="input-user">用户名</label>
						<input
							id="input-user"
							type="text"
							value={accountData.user}
							onChange={(event) => setAccountData({ ...accountData, user: event.target.value })}
						/>
					</div>
					<div className="input-item">
						<label htmlFor="input-pass">密码</label>
						<input
							id="input-pass"
							type="pass"
							value={accountData.pass}
							onChange={(event) => setAccountData({ ...accountData, pass: event.target.value })}
						/>
					</div>
					<button onClick={handleSubmit}>提交</button>
				</div>
			</div>
		</>
	)
}
