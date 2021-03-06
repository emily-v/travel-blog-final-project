import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Consumer } from "../stores/AppContext.jsx";
import { Redirect } from "react-router-dom";

export default class BillingInfo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			first_name: "",
			last_name: "",
			address: "",
			address_2: "",
			city: "",
			state: "",
			postcode: "",
			country: "",
			email: ""
		};
	}

	render() {
		return (
			<Consumer>
				{({ state, actions }) => {
					if (typeof state.orderData !== "undefined") {
						return <Redirect to="/confirmationpage/" />;
					} else {
						return (
							<div className="col-md-8 order-md-1">
								<h4 className="mb-3">Billing address</h4>
								<form
									onSubmit={e => {
										e.preventDefault();
										actions.submitOrder(
											this.state.first_name,
											this.state.last_name,
											this.state.address,
											this.state.address_2,
											this.state.city,
											this.state.state,
											this.state.postcode,
											this.state.country,
											this.state.email
										);
									}}>
									<div className="row">
										<div className="col-md-6 mb-3">
											<label htmlFor="firstName">
												First name
											</label>
											<input
												type="text"
												className="form-control"
												value={this.state.firstName}
												placeholder="First name"
												onChange={e =>
													this.setState({
														firstName:
															e.target.value
													})
												}
											/>
											<div className="invalid-feedback">
												Valid first name is required.
											</div>
										</div>

										<div className="col-md-6 mb-3">
											<label htmlFor="lastName">
												Last name
											</label>
											<input
												type="text"
												className="form-control"
												value={this.state.lastName}
												placeholder="Last name"
												onChange={e =>
													this.setState({
														lastName: e.target.value
													})
												}
											/>
											<div className="invalid-feedback">
												Valid last name is required.
											</div>
										</div>
									</div>

									<div className="mb-3">
										<label htmlFor="email">
											Email{" "}
											<span className="text-muted">
												(Optional)
											</span>
										</label>
										<input
											type="email"
											className="form-control"
											value={this.state.email}
											placeholder="you@example.com"
											onChange={e =>
												this.setState({
													email: e.target.value
												})
											}
										/>
										<div className="invalid-feedback">
											Please enter a valid email address
											for shipping updates.
										</div>
									</div>

									<div className="mb-3">
										<label htmlFor="address">Address</label>
										<input
											type="text"
											className="form-control"
											value={this.state.address}
											placeholder="123 Main St."
											onChange={e =>
												this.setState({
													address: e.target.value
												})
											}
										/>
										<div className="invalid-feedback">
											Please enter your shipping address.
										</div>
									</div>

									<div className="mb-3">
										<label htmlFor="address2">
											Address 2{" "}
											<span className="text-muted">
												(Optional)
											</span>
										</label>
										<input
											type="text"
											className="form-control"
											value={this.state.address_2}
											placeholder="Apartment or Suite"
											onChange={e =>
												this.setState({
													address_2: e.target.value
												})
											}
										/>
									</div>

									<div className="row">
										<div className="col-md-5 mb-3">
											<label htmlFor="country">
												Country
											</label>
											<select
												className="custom-select d-block w-100"
												id="country"
												required="">
												<option value="">
													Choose...
												</option>
												<option>United States</option>
											</select>
											<div className="invalid-feedback">
												Please select a valid country.
											</div>
										</div>
										<div className="col-md-4 mb-3">
											<label htmlFor="state">State</label>
											<select
												className="custom-select d-block w-100"
												id="state"
												required="">
												<option value="">
													Choose...
												</option>
												<option>California</option>
												<option>Georgia</option>
												<option>Florida</option>
												<option>NewYork</option>
												<option>Texas</option>
												<option>Illinois</option>
												<option>Nevada</option>
												<option>Arizona</option>
												<option>Louisiana</option>
												<option>New Mexico</option>
											</select>
											<div className="invalid-feedback">
												Please provide a valid state.
											</div>
										</div>
										<div className="col-md-3 mb-3">
											<label htmlFor="zip">Zip</label>
											<input
												type="text"
												className="form-control"
												value={this.state.postcode}
												placeholder=""
												onChange={e =>
													this.setState({
														postcode: e.target.value
													})
												}
											/>
											<div className="invalid-feedback">
												Zip code required.
											</div>
										</div>
									</div>
									<hr className="mb-4" />
									<div className="custom-control custom-checkbox">
										<input
											type="checkbox"
											className="custom-control-input"
											id="same-address"
										/>
										<label
											className="custom-control-label"
											htmlFor="same-address">
											Shipping address is the same as my
											billing address
										</label>
									</div>
									<div className="custom-control custom-checkbox">
										<input
											type="checkbox"
											className="custom-control-input"
											id="save-info"
										/>
									</div>
									<hr className="mb-4" />
									<h4 className="mb-3">Shipping Address</h4>

									<div className="row">
										<div className="col-md-6 mb-3">
											<label htmlFor="firstName">
												First name
											</label>
											<input
												type="text"
												className="form-control"
												value={this.state.firstName}
												placeholder="First name"
												onChange={e =>
													this.setState({
														firstName:
															e.target.value
													})
												}
											/>
											<div className="invalid-feedback">
												Valid first name is required.
											</div>
										</div>

										<div className="col-md-6 mb-3">
											<label htmlFor="lastName">
												Last name
											</label>
											<input
												type="text"
												className="form-control"
												value={this.state.lastName}
												placeholder="Last name"
												onChange={e =>
													this.setState({
														lastName: e.target.value
													})
												}
											/>
											<div className="invalid-feedback">
												Valid last name is required.
											</div>
										</div>
									</div>

									<div className="mb-3">
										<label htmlFor="email">
											Email{" "}
											<span className="text-muted">
												(Optional)
											</span>
										</label>
										<input
											type="email"
											className="form-control"
											value={this.state.email}
											placeholder="you@example.com"
											onChange={e =>
												this.setState({
													email: e.target.value
												})
											}
										/>
										<div className="invalid-feedback">
											Please enter a valid email address
											for shipping updates.
										</div>
									</div>

									<div className="mb-3">
										<label htmlFor="address">Address</label>
										<input
											type="text"
											className="form-control"
											value={this.state.address}
											placeholder="123 Main St."
											onChange={e =>
												this.setState({
													address: e.target.value
												})
											}
										/>
										<div className="invalid-feedback">
											Please enter your shipping address.
										</div>
									</div>

									<div className="mb-3">
										<label htmlFor="address2">
											Address 2{" "}
											<span className="text-muted">
												(Optional)
											</span>
										</label>
										<input
											type="text"
											className="form-control"
											value={this.state.address_2}
											placeholder="Apartment or Suite"
											onChange={e =>
												this.setState({
													address_2: e.target.value
												})
											}
										/>
									</div>

									<div className="row">
										<div className="col-md-5 mb-3">
											<label htmlFor="country">
												Country
											</label>
											<select
												className="custom-select d-block w-100"
												id="country"
												required="">
												<option value="">
													Choose...
												</option>
												<option>United States</option>
											</select>
											<div className="invalid-feedback">
												Please select a valid country.
											</div>
										</div>
										<div className="col-md-4 mb-3">
											<label htmlFor="state">State</label>
											<select
												className="custom-select d-block w-100"
												id="state"
												defaultValue="Choose..."
												onChange={e =>
													this.setState({
														state: e.target.value
													})
												}>
												<option value="">
													Choose...
												</option>
												<option>California</option>
												<option>Georgia</option>
												<option>Florida</option>
												<option>NewYork</option>
												<option>Texas</option>
												<option>Illinois</option>
												<option>Nevada</option>
												<option>Arizona</option>
												<option>Louisiana</option>
												<option>New Mexico</option>
											</select>
											<div className="invalid-feedback">
												Please provide a valid state.
											</div>
										</div>
										<div className="col-md-3 mb-3">
											<label htmlFor="zip">Zip</label>
											<input
												type="text"
												className="form-control"
												value={this.state.postcode}
												placeholder=""
												onChange={e =>
													this.setState({
														postcode: e.target.value
													})
												}
											/>
											<div className="invalid-feedback">
												Zip code required.
											</div>
										</div>
									</div>

									<hr className="mb-4" />
									<h4 className="mb-3">Payment</h4>

									<div className="d-block my-3">
										<div className="custom-control custom-radio">
											<input
												id="credit"
												name="paymentMethod"
												type="radio"
												className="custom-control-input"
												required=""
											/>
											<label
												className="custom-control-label"
												htmlFor="credit">
												Credit card
											</label>
										</div>
										<div className="custom-control custom-radio">
											<input
												id="debit"
												name="paymentMethod"
												type="radio"
												className="custom-control-input"
												required=""
											/>
											<label
												className="custom-control-label"
												htmlFor="debit">
												Debit card
											</label>
										</div>
										<div className="custom-control custom-radio">
											<input
												id="paypal"
												name="paymentMethod"
												type="radio"
												className="custom-control-input"
												required=""
											/>
											<label
												className="custom-control-label"
												htmlFor="paypal">
												Paypal
											</label>
										</div>
									</div>
									<div className="row">
										<div className="col-md-6 mb-3">
											<label htmlFor="cc-name">
												Name on card
											</label>
											<input
												type="text"
												className="form-control"
												id="cc-name"
												placeholder=""
												required=""
											/>
											<small className="text-muted">
												Full name as displayed on card
											</small>
											<div className="invalid-feedback">
												Name on card is required
											</div>
										</div>
										<div className="col-md-6 mb-3">
											<label htmlFor="cc-number">
												Credit card number
											</label>
											<input
												type="text"
												className="form-control"
												id="cc-number"
												placeholder=""
												required=""
											/>
											<div className="invalid-feedback">
												Credit card number is required
											</div>
										</div>
									</div>
									<div className="row">
										<div className="col-md-3 mb-3">
											<label htmlFor="cc-expiration">
												Expiration
											</label>
											<input
												type="text"
												className="form-control"
												id="cc-expiration"
												placeholder=""
												required=""
											/>
											<div className="invalid-feedback">
												Expiration date required
											</div>
										</div>
										<div className="col-md-3 mb-3">
											<label htmlFor="cc-expiration">
												CVV
											</label>
											<input
												type="text"
												className="form-control"
												id="cc-cvv"
												placeholder=""
												required=""
											/>
											<div className="invalid-feedback">
												Security code required
											</div>
										</div>
									</div>
									<hr className="mb-4" />
									<button
										className="btn btn-success btn-lg btn-block"
										type="submit">
										Complete Order
									</button>
								</form>
							</div>
						);
					}
				}}
			</Consumer>
		);
	}
}

BillingInfo.propTypes = {
	actions: PropTypes.object,
	changeHandler: PropTypes.string
};
