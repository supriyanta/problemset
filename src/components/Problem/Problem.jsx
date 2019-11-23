import React from "react";
import "./Problem.css";

const Problem = ({ name, code, link }) => {
	return (
		<div className="problem">
			<a target="_blank" rel="noopener noreferrer" href={link}>
				<p>{name}</p>
			</a>
			<p>{code}</p>
		</div>
	);
};

export default Problem;
