import { userData } from '@/types/user'
import { createContext, useState } from 'react'

type returnData = {
	inputValues: userData
	setInputValues(state: userData): void
}

const UserContext = createContext<returnData>({
	inputValues: {
		name: '',
		password: '',
		email: '',
		phone: 0,
	},
	setInputValues() {},
})

const UserProvider = ({ children }: { children: React.ReactNode }) => {
	const [inputValues, setInputValues] = useState<userData>({} as userData)

	return (
		<UserContext.Provider value={{ inputValues, setInputValues }}>{children}</UserContext.Provider>
	)
}

export { UserContext, UserProvider }
