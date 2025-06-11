import { Component } from 'react'
import BoxClass from "./components/BoxClass"

interface State {
  counter2: number;
  num: number;
  value: number;
}

export default class AppClass extends Component<unknown, State> {
  constructor(props: unknown) {
    super(props);
    this.state = {
      counter2: 0,
      num: 1,
      value: 0,
    }
    console.log("constructor")
  }

  increase = () => {
    this.setState({
      counter2: this.state.counter2 + 1,
      value: this.state.value + 1,
    })
    console.log("increase function", this.state);
  }

  componentDidMount(): void {
    // api 콜
    console.log("componentDidMount")
  }

  componentDidUpdate() {
    console.log("componentDidUpdate", this.state)
  }

  render() {
    console.log("render")
    return (
      <div>
        <div>state: {this.state.counter2}</div>
        <button onClick={this.increase}>클릭!</button>
        {this.state.counter2 < 3
          && <BoxClass num={this.state.value} />}
      </div>
    )
  }
}