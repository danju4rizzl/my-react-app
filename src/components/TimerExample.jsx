// Import the 'useState' and 'useEffect' hooks from React
import { useState, useEffect } from "react"

// Define a functional component named 'TimerExample'
export default function TimerExample() {
	// Define a state variable 'count' using the 'useState' hook, initialized with 0
	const [count, setCount] = useState(0)

	// Use the 'useEffect' hook to perform side effects after the component has rendered
	useEffect(() => {
		// The effect sets up a timer using 'setTimeout'
		// The timer increments the 'count' state by 1 every 1000 milliseconds (1 second)
		const timer = setTimeout(() => {
			setCount((count) => count + 1)
		}, 1000)

		// Since the dependency array is empty [], this effect will only run once
		// when the component mounts. It won't re-run on subsequent renders.

		// Clean up the timer when the component unmounts to avoid memory leaks
		return () => {
			clearTimeout(timer)
		}
	}, [])

	// Return the JSX element that will be rendered in the component
	return <h1>I&rsquo;ve showed {count} times!</h1>
}
