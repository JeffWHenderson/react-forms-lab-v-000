import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleChange = this.handleChange.bind(this)
    this.state = { value: '' };
  }

  handleChange(event) {
    this.setState({value: e.target.value})
  }
  
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" />
      </div>
    );
  }
}

export default TwitterMessage;
