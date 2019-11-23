import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../Loading/Loading";
import Problem from "../Problem/Problem";

const URL = "https://api-problems.herokuapp.com/problems?sheet=";

const Sheet = ({ match: { params } }) => {
	const [problems, setProblems] = useState([]);
	const [loading, setLoading] = useState(true);

	// console.log("Re renders...");

	useEffect(() => {
		// console.log("use effect runs " + params.id);
		setLoading(true);
		getProblems();
	}, [params.id]);

	let getProblems = async () => {
		let url = `${URL}${params.id}`;
		let res = await axios.get(url);
		setProblems(res.data.problems);
		setLoading(false);
	};

	// console.log(loading);
	return loading === true ? (
		<Loading />
	) : (
		<div>
			{problems.map(problem => (
				<Problem key={problem._id} {...problem} />
			))}
		</div>
	);
};

export default Sheet;
