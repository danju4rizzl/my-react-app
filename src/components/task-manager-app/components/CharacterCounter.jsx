export default function CharacterCounter({ count, maxCount }) {
	return (
		<p className="text-sm  text-center mb-3">
			Characters:{" "}
			{count > 0
				? `${count} ${count === maxCount ? "Max 🟡" : "🟢"}  `
				: "None 🔴"}
		</p>
	)
}
