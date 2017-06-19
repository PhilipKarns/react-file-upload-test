// Include React
var React = require("react");

// Form is the main component. It includes the banner and form element
var Form = React.createClass({
  getInitialState: function() {
    return { image: "", imagePreviewURL: "" };
  },
  handleFileChange: function(event) {
    event.preventDefault();

    var reader= new FileReader();
    var file = event.target.files[0];
    console.log(file);

    reader.onloadend = function() {
      this.setState({
        image: file,
        imagePreviewURL: reader.result
      });
    }.bind(this)
    reader.readAsDataURL(file);
  },
  render: function() {
    var imagePreviewURL = this.state.imagePreviewURL;
    var $imagePreview = null;
    if(imagePreviewURL) {
      $imagePreview = (<img src={imagePreviewURL} />);
    }
    else {
      $imagePreview = (<div className="previewText">Please select an image for preview</div>);
    }
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Image Upload</h3>
        </div>
        <div className="panel-body text-center">
        	<form>
            <div className="form-group">
              <h4 className="">
                <strong>Image</strong>
              </h4>

              {/*
                Note how each of the form elements has an id that matches the state.
                This is not necessary but it is convenient.
                Also note how each has an onChange event associated with our handleChange function.
              */}
              <input
                type="file"
                className="form-control text-center"
                id="image"
                accept="image/*"
                onChange={this.handleFileChange}
              />
              <br />
              <div className="preview">
              	
              </div>
              <button
                className="btn btn-primary"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
          {$imagePreview}
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Form;