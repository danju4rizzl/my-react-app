import { useState } from "react"
import { colors } from "../utils/colors"

/*
 *
 * This TitleExample component lives only inside
 * the FavoriteColorExample component
 */
const TitleExample = ({ selectedColor }) => {
	return (
		<h1>
			My favorite color is{" "}
			<span style={{ color: selectedColor }}>{selectedColor}</span>
		</h1>
	)
}

/*
 * This Component shows a list  buttons to change
 * the color in the button - It demonstrates how
 * to useState in react and how to work with mapped data
 *
 */
const FavoriteColorExample = () => {
	//We are setting the initial state to Black
	const [color, setColor] = useState("black")

	return (
		<>
			{/* We are using the TitleExample component here  */}
			<TitleExample selectedColor={color} />

			{/* Using the javascript .map() method to iterate over the colors array and display the buttons  */}
			{colors.map((item, idx) => (
				<button
					key={idx}
					type="button"
					onClick={() => setColor(item.colorName)}
				>
					{item.displayName} {item.emoji}
				</button>
			))}
		</>
	)
}

export default FavoriteColorExample
