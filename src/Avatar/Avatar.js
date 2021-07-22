import "./Avatar.css";

export default function Avatar(props) {
	return (
		<img
			src={props.src}
			alt="user avatar"
			width="500"
			height="500"
			className="Avatar"
		></img>
	);
}
