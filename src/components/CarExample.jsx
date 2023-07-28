// Import the 'useState' hook from React, which allows us to use state in functional components
import { useState } from "react"

// Define a functional component named 'CarExample'
export default function CarExample() {
	// Define a state variable 'car' using the 'useState' hook, initialized with an object
	const [car, setCar] = useState({
		brand: "Toyota",
		model: "Rav4",
		year: 2020,
		color: "purple",
		transmission: true
	})

	// Define a function 'changeTransmission' to change the transmission type
	const changeTransmission = () => {
		// Use the 'setCar' function with the callback form to update the state
		// The callback function receives the previous state as an argument
		setCar((previousState) => {
			// Return a new object using the spread operator '...' to copy the previous state
			// and change only the 'transmission' property to "manual"
			return { ...previousState, transmission: !previousState.transmission }
		})
	}

	// Return the JSX elements that will be rendered in the component
	return (
		<>
			{/* Display the brand of the car */}
			<h1>My {car.brand}</h1>
			{/* Display information about the car including color, model, year, and transmission */}
			<p>
				It is a {car.color} {car.model} from {car.year}. It has an{" "}
				{car.transmission ? "automatic" : "manual"} transmission
			</p>
			{/* Render a button that triggers the 'changeTransmission' function when clicked */}
			<button onClick={changeTransmission}>
				Change Transmission to {car.transmission ? "manual" : "automatic"}
			</button>
		</>
	)
}
