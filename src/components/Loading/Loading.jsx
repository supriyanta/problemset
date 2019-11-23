import React from "react";
import classes from "./Loading.module.css";

const Loading = () => {
	return (
		<div className={classes.loading_wrapper}>
			<div className={classes.loading_text}>LOADING</div>
			<div className={classes.loading_content}></div>
		</div>
	);
};

export default Loading;
