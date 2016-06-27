Login = React.createClass({
	onSubmit(log) {
		log.preventDefault();

		var check = $(log.target);
		var email = check.find("#email").val();
		var pword = check.find("#password").val();

		Meteor.loginWithPassword(email, pword, function(err) {
			if(err) {
				Materialize.toast(err.reason, 3000);
					}else {
							//Redirect
							FlowRouter.go('/userpage');
						}
					});
	},
	
	render() {
		var align={
				textAlign:'center'
		}
		return (
			<div className="row">
				<h4 style={align}>Login</h4>
				<form onSubmit={this.onSubmit}className="col offset-s4 s4">
					<div className="row">
						<div className="input-field col s12">
							<input id="email" type="email" className="validate" required />
							<label htmlFor="email">Email</label>
						</div>
					</div>
					<div className="row">
						<div className="input-field col s12">
							<input id="password" type="password" className="validate" required />
							<label htmlFor="password">Password</label>
						</div>
					</div>
					<div className="row">
						<button className="waves-effect waves-light btn btn-block" type="submit" name="action">Submit<i className="material-icons right">send</i></button>
					</div>
				</form>
			</div>
		);
	}
});