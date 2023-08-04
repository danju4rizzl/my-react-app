import Heading from "./Heading"

export default function NoTask() {
	return (
		<div className="text-center">
			{/* Display a crystal ball emoji below */}
			<h1 className="text-6xl">🔮</h1>
			<Heading
				title="No Task Yet" // Display title indicating no tasks
				subTitle="Try making a new task so you can see it here" // Display a suggestion to add tasks
			/>
		</div>
	)
}
