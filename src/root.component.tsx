import { FC } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import styles from "./root.module.css";

const Root: FC = () => {
	return (
		<Router basename="/">
			<ul className={styles.navbar}>
				<li>
					<Link to="/">Home</Link>
				</li>

				<li>
					<Link to="/settings">Settings</Link>
				</li>
			</ul>
		</Router>
	);
};

export default Root;
