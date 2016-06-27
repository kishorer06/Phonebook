Home = React.createClass({
  render() {
  	var align={
				textAlign:'center'
		};
    return (
       <div style={align}  className="row">
        <div  className="col s8 push-s2">
          <div className="card  grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">Welcome to GalaxePhonebook</span>
              <p >Our GalaxePhonebook provides clients to create or maintain contacts and other information.</p>
            </div>
          </div>
        </div>
      </div>        
    );
  }
});
