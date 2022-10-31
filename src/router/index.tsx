import App from '@/App'
import Home from '@/views/Home'
import Page1 from '@/views/Page1'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


const baseRouter = () => {
  return (
    // HTML5路由
    <BrowserRouter>
      {/* routes代表可以放多条路由 */}
      <Routes>
        {/* 一个route就是一条路由 path代表路由地址 element代表路由组件 */}
        <Route path="/" element={<App />}>
          <Route path="/page1" element={<Page1 />}></Route>
        </Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default baseRouter
