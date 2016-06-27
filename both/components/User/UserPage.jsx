UserPage = React.createClass({
	componentDidMount: function(){
       $('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
	},
 OnSubmit(val){
  val.preventDefault();
  var  getVal = $(val.target);
  var  fullname= getVal.find("#icon_prefix").val();
  var  email= getVal.find("#email").val();
  var  telephone= getVal.find("#icon_telephone").val();
  var  noteadd= getVal.find("#textarea1").val();
 },

	render() {
		return(
 <ul className="collapsible" data-collapsible="accordion">
    <li>
      <div className="collapsible-header"><i className="material-icons">playlist_add</i>Add Contact</div>
      <div className="collapsible-body">
      <div className="row">
        <form onSubmit={this.OnSubmit} className="col s8 push-s4">
          <div className="row">
            <div className="input-field col s6">
            <i className="material-icons prefix">account_circle</i>
              <input id="icon_prefix" type="text" className="validate" required/>
              <label htmlFor="icon_prefix">Full Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
            <i className="material-icons prefix">email</i>
              <input id="email" type="email" className="validate" required/>
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
            <i className="material-icons prefix">phone</i>
              <input id="icon_telephone" type="tel" className="validate" required/>
              <label htmlFor="icon_telephone">Contact Number</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
            <i className="material-icons prefix">note_add</i>
              <textarea id="textarea1" className="materialize-textarea"></textarea>
              <label htmlFor="textarea1">Notes</label>
            </div>
          </div>
          <div className="row">
           <div className="col s6 push-1">
            <button className="waves-effect waves-light btn" type="submit" name="action" >Submit<i className="material-icons right">send</i></button>
            </div>
          </div>
        </form>
        </div>
      </div>
    </li>
  </ul>
		);
	}
});