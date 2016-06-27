LoggedIn = React.createClass({
	render() {
		return (
			<div>
			<a href="/userpage" className="brand-logo">GalaxePhonebook</a>
			<a onClick={this.props.logout} data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
			<ul id="nav-mobile" className="right hide-on-med-and-down">
			  <li><a onClick={this.props.logout}>Logout</a></li>
			</ul>
			<ul className="side-nav" id="mobile-demo">
			<li><a onClick={this.props.logout}>Logout</a></li>
			</ul>
			</div>
		);
	}
});