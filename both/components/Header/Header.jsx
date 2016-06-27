 Header = React.createClass({
  getInitialState() {
      return {
          isLoggedIn: User.isLoggedIn()  
      };
  },

  logout() {
    Meteor.logout((err) =>{
      if(err) {
        Materialize.toast(err.reason, 3000);
      } else {
        this.setState({isLoggedIn: !this.state.isLoggedIn});
        FlowRouter.go('/');
      }
    });
  },

  componentDidMount: function(){
  $('.button-collapse').sideNav();
},

   render() {
    var headStyle = {
      backgroundColor: "#40c4ff", 
      paddingLeft: "12px"
    };
    var navTo = User.isLoggedIn() ? <LoggedIn logout={this.logout} /> : <Logout />;
    return (
      <nav style={headStyle}>
          <div  className="nav-wrapper">
            {navTo}
          </div>
      </nav>    
     );
   }
});
