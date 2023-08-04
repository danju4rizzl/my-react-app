import { BiTrash } from "react-icons/bi"

export default function TaskItem({ text, onClick }) {
	return (
		<li className="h-12 flex flex-1 justify-between bg-gray-700 rounded-lg pl-10">
			{/* Display the task text */}
			<span className="text-lg my-auto leading-5">{text}</span>

			{/* Button to delete the task */}
			<button
				className="bg-red-500 hover:bg-red-400 text-2xl text-center p-3 rounded-r-lg"
				onClick={onClick} // Call the provided onClick function when clicked
			>
				<BiTrash /> {/* Display trash icon */}
			</button>
		</li>
	)
}
