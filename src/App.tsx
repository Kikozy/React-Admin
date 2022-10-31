import React from 'react'
import Comp1 from '@/components/comp1/comp1'
import { Outlet } from 'react-router-dom'

export default function App() {
  return (
    <>
      <h1>App</h1>
      {/* 占位符组件，类似于窗口，用来展示组件的，可以看作vue中的router-view */}
      <Outlet></Outlet>
    </>
  )
}
