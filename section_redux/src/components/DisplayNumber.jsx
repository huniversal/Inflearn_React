import React, {Component} from 'react'

export default class DisplayNumber extends Component {
  render() {
    return (
      <div>
        <h1>Display number</h1>
        <input type="text" value={this.props.number} readOnly></input>
      </div>
    )
  }
}