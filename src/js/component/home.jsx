import React from "react";
import {Counter} from "./Counter.js"

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export const Home = () => {
	return (
		<React.Fragment>
			<Counter />
		</React.Fragment>
	);
};

