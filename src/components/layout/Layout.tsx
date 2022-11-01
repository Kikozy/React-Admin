import React from "react"
import styles from "./layout.module.scss"

export function GlobalLayout(props: React.ReactElement) {
	return (
		<>
			<div className={styles.globalLayout}>
				<p>GlobalHeader</p>
                {props}
			</div>
		</>
	)
}

export function GlobalHeader() {
	return (
		<>
			<div className={styles.globalHeader}>
				<p>GlobalHeader</p>
			</div>
		</>
	)
}

export function GlobalContent() {
	return (
		<>
			<div className={styles.globalContent}>
				<p>GlobalContent</p>
			</div>
		</>
	)
}

export function GlobalAside() {
	return (
		<>
			<div className={styles.globalAside}>
				<p>GlobalAside</p>
			</div>
		</>
	)
}

export function GlobalFooter() {
	return (
		<>
			<div className={styles.globalFooter}>
				<p>GlobalFooter</p>
			</div>
		</>
	)
}
