Register = React.createClass({
	onSubmit(val) {
		val.preventDefault();
		var getelm = $(val.target);
		var email = getelm.find("#email").val();
		var password = getelm.find("#password").val();
		var confirmPassword = getelm.find("#confirmPassword").val();
		if(password === confirmPassword &&  password !== "" && confirmPassword !== "") {
			var accountInfo = {
				email: email,
				password: password
			};
			Accounts.createUser(accountInfo, function(err) {
				if(err) {
					Materialize.toast(err.reason, 3000);
				} else {
							//Redirect
							FlowRouter.go('/userpage');				
				}
			});
		} else {
			Materialize.toast('Passwords dont match!', 3000);
		}
	},
	render() {
		var align={
				textAlign:'center'
		}
		return (
			<div className="row">
				<h4 style={align}>SignUp</h4>
				<form onSubmit={this.onSubmit} className="col offset-s4 s4">
					<div className="row">
						<div className="input-field col s12">
							<input id="email" type="email" className="validate" required/>
							<label htmlFor="email">Email</label>
						</div>
					</div>
					<div className="row">
						<div className="input-field col s12">
							<input id="password" type="password" className="validate" required/>
							<label htmlFor="password">Password</label>
						</div>
					</div>
					<div className="row">
						<div className="input-field col s12">
							<input id="confirmPassword" type="password" className="validate" required/>
							<label htmlFor="confirmPassword">Confirm Password</label>
						</div>
					</div>
					<div className="row">
						<button className="waves-effect waves-light btn btn-block" type="submit" name="action" >Submit<i className="material-icons right">send</i></button>
					</div>
				</form>
			</div>
		);
	}
});