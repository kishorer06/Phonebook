Logout = React.createClass({
	render() {
		return (
			<div>
			<a href="/" className="brand-logo">GalaxePhonebook</a>
			  <a href="/" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
			<ul id="nav-mobile" className="right hide-on-med-and-down">
			  <li><a href="/">Home</a></li>
			  <li><a href="/register">Register</a></li>
			  <li><a href="/login">Login</a></li>
			</ul>
			 <ul className="side-nav" id="mobile-demo">
			  <li><a href="/">Home</a></li>
			  <li><a href="/register">Register</a></li>
			  <li><a href="/login">Login</a></li>
			</ul>
			</div>
		);
	}
});