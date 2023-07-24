import "./titleExample.css"

export const TitleWithInline = () => {
	return <h1 style={{ color: "red" }}>Heading with inline styles 😀</h1>
}

export const TitleWithStyleObject = () => {
	// Define an object with your css styles in it.
	const myHeadingStyle = {
		color: "white",
		fontFamily: "Sans-Serif",
		backgroundColor: "red",
		padding: "15px",
		borderRadius: "15px"
	}

	const myParagraphStyle = {
		color: "white",
		backgroundColor: "teal",
		paddingTop: "8px",
		paddingBottom: "8px",
		paddingLeft: "15px",
		paddingRight: "15px",
		borderRadius: "5px",
		fontSize: "20px"
	}

	return (
		<>
			{/* Simply add the objects to the jsx */}
			<h1 style={myHeadingStyle}>Heading with object styles </h1>
			<p style={myParagraphStyle}>Paragraph with object styles </p>
		</>
	)
}

export const TitleWithStylesClassName = () => {
	return <h1 className="banner">Heading with css classes ❤️‍🔥</h1>
}
