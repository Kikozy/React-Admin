import React from 'react'
import { Button } from 'antd'

import styles from './comp1.module.scss'

export default function Comp1() {
  return (
    <>
      <div className={styles.comp1}>
        <p>什么莫</p>
        <p>哇哈哈哈</p>
        <Button type="primary">Primary Button</Button>
      </div>
    </>
  )
}
