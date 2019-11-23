import React from "react";
// import PropTypes from "prop-types";

const Home = props => {
	return (
		<img
			style={{
				// opacity: 0.5,
				width: "100%",
				height: "calc(100vh - 64px)",
				padding: 0,
				margin: 0,
				backgroundPosition: "center",
				backgroundSize: "cover"
				// objectFit: "cover"
			}}
			alt=""
			src="https://source.unsplash.com/1600x900/?nature,water"
		/>
	);
};

export default Home;
