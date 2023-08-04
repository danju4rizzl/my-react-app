import { useState, useEffect } from "react"
import { v4 as uuidv4 } from "uuid"
import Heading from "./components/Heading"
import NoTask from "./components/NoTask"
import TaskForm from "./components/TaskForm"
import TaskList from "./components/TaskList"

export default function TaskManagerApp() {
	// State to manage all tasks in the app
	const [allTasks, setAllTasks] = useState([])

	// Storage key for local storage
	const storageKey = "storedTask"

	// Retrieve data from local storage
	const getLocalData = () => JSON.parse(localStorage.getItem(storageKey))

	// Add a new task to the list
	const addNewTask = (task) => {
		const newTask = { taskId: uuidv4(), task }

		// Update the state with the new task
		setAllTasks([...allTasks, newTask])
	}

	// Delete a task based on its ID
	const deleteTask = (currentId) => {
		const confirmDelete = window.confirm(
			"Are you sure you want to delete this task"
		)

		if (!confirmDelete) {
			return
		} else {
			// Remove the task from the state
			setAllTasks(allTasks.filter((task) => task.taskId !== currentId))
		}
	}

	// Run when the application loads
	useEffect(() => {
		const localData = getLocalData()

		// Check if there is data in local storage
		if (localData != null) {
			setAllTasks(localData)
		}
	}, [])

	// Update local storage whenever allTasks changes
	useEffect(() => {
		if (allTasks.length) {
			localStorage.setItem(storageKey, JSON.stringify(allTasks))
		} else {
			localStorage.clear()
		}
	}, [allTasks])

	return (
		<main className="bg-slate-900 h-screen text-white grid grid-flow-row content-center justify-center px-10 gap-y-10">
			<div className="mx-auto">
				{/* Heading component */}
				<Heading
					title={"Task Manager App"}
					subTitle={"A simple way to manage your tasks, anywhere"}
				/>

				{/* TaskForm component for adding tasks */}
				<TaskForm onAddTask={addNewTask} />
			</div>
			<div className="lg:mx-20">
				{/* Display TaskList if there are tasks, otherwise show NoTask component */}
				{allTasks.length > 0 ? (
					<TaskList displayTasks={allTasks} whenDelete={deleteTask} />
				) : (
					<NoTask />
				)}
			</div>
		</main>
	)
}
