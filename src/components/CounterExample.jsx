// Import the 'useState' and 'useEffect' hooks from React
import { useState, useEffect } from "react"

// Define a functional component named 'CounterExample'
export default function CounterExample() {
	// Define two state variables 'count' and 'calculation' using the 'useState' hook
	const [count, setCount] = useState(0)
	const [calculation, setCalculation] = useState(0)

	// Use the 'useEffect' hook to perform side effects after the component has rendered
	useEffect(() => {
		// In this case, we're setting the 'calculation' state to 'count * 2'
		setCalculation(() => count * 2)
	}, [count]) // <- The dependency array [count] specifies that this effect runs whenever 'count' changes

	// Return the JSX elements that will be rendered in the component
	return (
		<>
			{/* Display the current value of 'count' */}
			<p>Count: {count}</p>
			{/* Render a button that increments the 'count' state when clicked */}
			<button onClick={() => setCount((prevCount) => prevCount + 1)}>
				Add
			</button>
			{/* Display the current value of 'calculation' */}
			<p>Calculation: {calculation}</p>
		</>
	)
}
