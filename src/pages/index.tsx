import { UserContext } from '@/contexts/UserContexts'
import { useContext, useEffect } from 'react'
import { useRouter } from 'next/router'

import styles from '../styles/Home.module.css'

export default function Home() {
	const { inputValues } = useContext(UserContext)
	const router = useRouter()

	useEffect(() => {
		JSON.stringify(inputValues) === '{}' && router.push('/login')
	}, [inputValues, router])

	return (
		<div className={styles.wrapper}>
			<h1>Olá, {inputValues.name}!</h1>
		</div>
	)
}
