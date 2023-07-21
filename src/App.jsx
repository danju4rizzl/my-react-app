const cars = ["BMW", "Mercedes", "Audi", "Toyota", "Nissan"]

// A simple text component that takes a text prop and a titleColor prop
const Title = ({ text, titleColor }) => {
	return (
		<div className="">
			<h1
				style={{
					textAlign: "center",
					color: titleColor || "red" // This will be any color we pass in or it will be red by default
				}}
			>
				{text}
			</h1>
		</div>
	)
}

function App() {
	return (
		<>
			{cars.map((car, idx) => (
				<Title text={car} key={idx} />
			))}
		</>
	)
}

export default App
