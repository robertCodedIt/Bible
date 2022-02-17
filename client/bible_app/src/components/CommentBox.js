import React, { Component } from 'react'
import {Key} from './key/Key'
import { Editor } from "@tinymce/tinymce-react";
export default class CommentBox extends Component {
    constructor(props) {
      super(props)
    
      this.state = { content: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ content: event.target.value });
  }

  handleSubmit(event) {
    alert("Text was submitted: " + this.state.content);
    event.preventDefault();
    this.setState({content:" "})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        Comment: {this.state.content}
        <Editor
        apiKey = {Key}
          rows="10"
          cols="30"
          value={this.state.content}
          onChange={this.handleChange}
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    )
  }
}
