import TaskItem from "./TaskItem"

export default function TaskList({ displayTasks, whenDelete }) {
	return (
		<ul className="flex flex-col-reverse gap-y-3 max-h-60 overflow-y-scroll px-6">
			{/* Map through each task in displayTasks and render TaskItem component */}
			{displayTasks.map((item) => (
				<TaskItem
					text={item.task} // Pass the task text as a prop
					key={item.taskId} // Use taskId as the unique key
					onClick={() => whenDelete(item.taskId)} // Call whenDelete when clicked
				/>
			))}
		</ul>
	)
}
