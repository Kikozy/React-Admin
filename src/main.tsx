import React from 'react'
import { createRoot } from 'react-dom/client'
import 'antd/dist/antd.css'
import '@/assets/styles/global.scss'
import Router from '@/router'

const root = createRoot(document.querySelector('#root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
)
