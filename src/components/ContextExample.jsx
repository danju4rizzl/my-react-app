// Import the 'useState', 'createContext', and 'useContext' hooks from React
import { useState, createContext, useContext } from "react"

// Create the context GLOBALLY
const UserContext = createContext()

export default function Component1() {
	// Define a state variable 'user' using the 'useState' hook, initialized with "Olami"
	const [user, setUser] = useState("Olami") // Setting the state

	return (
		// We are providing the state 'user' to the context using 'UserContext.Provider'
		<UserContext.Provider value={user}>
			{/* Display a greeting using the 'user' state */}
			<h1>{`Hello ${user}!`}</h1>

			<button onClick={() => setUser("Messi 🥳")}>Change User</button>
			{/* Render Component2 */}
			<Component2 />
		</UserContext.Provider>
	)
}

function Component2() {
	return (
		<>
			{/* Display a heading for Component2 */}
			<h1>Component 2</h1>
			{/* Render Component3 */}
			<Component3 />
		</>
	)
}

function Component3() {
	return (
		<>
			{/* Display a heading for Component3 */}
			<h1>Component 3</h1>
			{/* Render Component4 */}
			<Component4 />
		</>
	)
}

function Component4() {
	return (
		<>
			{/* Display a heading for Component4 */}
			<h1>Component 4</h1>
			{/* Render Component5 */}
			<Component5 />
		</>
	)
}

function Component5() {
	// Use the context hook 'useContext' to access the 'user' value from the UserContext
	const user = useContext(UserContext)

	return (
		<>
			{/* Display a heading for Component5 */}
			<h1>Component 5</h1>
			{/* Display a greeting using the 'user' value from the context */}
			<h2>{`Hello ${user} again!`}</h2>
		</>
	)
}
