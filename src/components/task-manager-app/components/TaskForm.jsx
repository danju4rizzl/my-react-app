import { useState } from "react"
import CharacterCounter from "./CharacterCounter"

export default function TaskForm({ onAddTask }) {
	// State to hold the user input value
	const [userValue, setUserValue] = useState("")

	// Check if userValue is empty
	const isEmpty = userValue.length

	// Maximum character limit for the input field
	const maxChar = 70

	// This function handles the form submit event
	function handleSubmit() {
		// If userValue is empty, show an alert
		if (!isEmpty) {
			return alert("Please enter a task")
		}

		// Call the onAddTask function and pass the userValue
		onAddTask(userValue)

		// Reset the form input after adding a new task
		setUserValue("")
	}

	return (
		<div>
			{/* Display character count and max character limit */}
			<CharacterCounter count={isEmpty} maxCount={maxChar} />

			{/* Form for adding a new task */}
			<form className="flex" onSubmit={(e) => e.preventDefault()}>
				{/* Input field for entering the task */}
				<input
					type="text"
					name="taskInput"
					placeholder="Feed bingo at 3pm"
					className="py-2 px-3 text-2xl rounded-lg text-center border outline-1 outline-current
            bg-slate-700/50"
					onChange={(e) => setUserValue(e.target.value)}
					value={userValue}
					maxLength={maxChar}
				/>

				{/* Button to save the task */}
				<button
					className="py-1.5 px-8 mx-5 bg-red-500 rounded-md hover:bg-red-400
          ease-in duration-300"
					type="submit"
					onClick={handleSubmit}
				>
					Save Task
				</button>
			</form>
		</div>
	)
}
