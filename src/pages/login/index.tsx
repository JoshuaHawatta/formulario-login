import { useContext, FormEvent } from 'react'
import { useRouter } from 'next/router'
import { NextPage } from 'next'
import { UserContext } from '@/contexts/UserContexts'
import styles from '../../styles/Form.module.css'

const Login: NextPage = () => {
	const { inputValues, setInputValues } = useContext(UserContext)
	const router = useRouter()

	const handleInputValues = (e: React.ChangeEvent<HTMLInputElement>): void => {
		const { name, value } = e.target
		setInputValues({ ...inputValues, [name]: value })
	}

	const handleSubmit = (event: FormEvent) => {
		event.preventDefault()
		event.stopPropagation()

		router.push('/')
	}

	return (
		<div>
			<form className={styles.form} onSubmit={handleSubmit}>
				<section>
					<label htmlFor='name'>Nome:</label>
					<input
						type='text'
						id='name'
						name='name'
						value={inputValues.name}
						onChange={handleInputValues}
					/>
				</section>
				<section>
					<label htmlFor='email'>Email:</label>
					<input
						type='email'
						id='email'
						name='email'
						value={inputValues.email}
						onChange={handleInputValues}
					/>
				</section>
				<section>
					<label htmlFor='password'>Senha:</label>
					<input
						type='password'
						id='password'
						name='password'
						value={inputValues.password}
						onChange={handleInputValues}
					/>
				</section>
				<section>
					<label htmlFor='cellphone'>Telefone:</label>
					<input
						type='tel'
						id='phone'
						name='phone'
						value={inputValues.phone}
						onChange={handleInputValues}
					/>
				</section>
				<button type='submit'>Enviar</button>
			</form>
		</div>
	)
}

export default Login
