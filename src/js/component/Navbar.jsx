import React from "react";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

import { Consumer } from "../stores/AppContext.jsx"; //
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";

class Navbar extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			username: "",
			password: ""
		};
	}

	render() {
		return (
			<div>
				<nav className="navbar navbar-expand-sm navbar-dark navbar-toggleable-md">
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarToggleContainer">
						<span className="navbar-toggler-icon" />
					</button>
					<div
						className="collapse navbar-collapse"
						id="navbarToggleContainer">
						<Link
							to={"/"}
							className="navbar-brand d-none d-sm-inline-block">
							<img
								src="https://my-first-wordpress-emilyv.c9users.io/wp-content/uploads/2018/08/1-e1534169380538.png"
								alt="logo"
								width="60"
								className="rounded-circle"
							/>
						</Link>
						<ul className="navbar-nav mr-auto">
							<li className="nav-item active">
								<Link to={"/blog-home"} className="nav-link">
									Blog
								</Link>
							</li>
							<li className="nav-item active">
								<Link
									to={"/gallery"}
									className="nav-link"
									href="#">
									Gallery
								</Link>
							</li>
							<li className="nav-item active">
								<Link
									to={"/storehome/"}
									className="nav-link"
									href="#">
									Store
								</Link>
							</li>
							<li className="nav-item active">
								<Link to={"/about"} className="nav-link">
									About
								</Link>
							</li>
							{/*<li className="nav-item active">
                                <a className="nav-link" href="#">Contact</a>
                            </li>*/}
						</ul>
						<Consumer>
							{({ state, actions }) => {
								if (
									typeof state.session.token !== "undefined"
								) {
									var displayName =
										state.session.user_display_name;
									var firstName =
										displayName.charAt(0).toUpperCase() +
										displayName.substring(1).split(" ")[0];

									return (
										<div>
											<button className="nav-button btn btn-outline-light mr-1">
												<Link
													to={"/shoppingcart/"}
													className="text-white">
													<FontAwesomeIcon
														icon={faShoppingBag}
													/>{" "}
													{state.cart.length}
												</Link>
											</button>
											<button className="nav-button btn btn-outline-light">
												<Link
													to={"/profile"}
													className="text-white">
													<FontAwesomeIcon
														icon={faUser}
													/>{" "}
													{firstName}
												</Link>
											</button>
											<button
												className="nav-button btn btn-outline-light text-white"
												onClick={() =>
													actions.logout()
												}>
												Log Out
											</button>
										</div>
									);
								} else {
									return (
										<button className="nav-button btn btn-outline-light">
											<Link
												to={"/signup-login"}
												className="text-white">
												<FontAwesomeIcon
													icon={faUser}
												/>{" "}
												Log In
											</Link>
										</button>
									);
								}
							}}
						</Consumer>
					</div>
				</nav>
				<header className="p-3 mb-1 text-center">
					<img
						src="https://my-first-wordpress-emilyv.c9users.io/wp-content/uploads/2018/08/1-e1534169380538.png"
						alt="logo"
						className="rounded-circle mr-sm-2"
						id="banner-logo"
					/>
					<img
						src="https://my-first-wordpress-emilyv.c9users.io/wp-content/uploads/2018/08/1-1-e1534169335609.png"
						alt="website name"
						className="mx-auto ml-sm-2"
						id="banner-name"
					/>
				</header>
			</div>
		);
	}
}

export default Navbar;

Navbar.propTypes = {
	session: PropTypes.object,
	username: PropTypes.string
};
