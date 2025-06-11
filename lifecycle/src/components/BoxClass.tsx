import { Component } from 'react';

interface BoxProps {
  num: number;
}

export default class BoxClass extends Component<BoxProps> {
  componentWillUnmount(): void {
      console.log("bye")
  }
  render() {
    return (
      <div>
        Box: {this.props.num}
      </div>
    )
  }
}