export default function Heading({ title, subTitle }) {
	return (
		<div className="text-center my-12 space-y-1">
			{/* Display the title with an underline */}
			<h1 className="text-5xl underline">{title}</h1>
			{/* Display the subtitle */}
			<p>{subTitle}</p>
		</div>
	)
}
