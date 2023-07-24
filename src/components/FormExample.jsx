import { useState } from "react"

function MyForm() {
	const [name, setName] = useState("")
	const [count, setCount] = useState(0)

	/* 
	 This will handle changes in the form input
	*/
	const handleChange = (e) => {
		// This will print the value of the input
		console.log(e.target.value)

		// Used to check the maximum length, in this case 5.
		const isMax = name.length > 5

		// We can check if the the maximum is reached.
		if (isMax) {
			alert("You have more than 5 characters")
		}

		// Now we are changing the value of the input in the state called.
		setName(e.target.value)

		// Set the count to the length of the name.
		setCount(name.length)
	}

	return (
		<form>
			<label>
				Enter your name count is :<span>{count}</span>
				<input type="text" value={name} onChange={handleChange} />
			</label>

			<button>Send Name</button>
		</form>
	)
}

export default MyForm
