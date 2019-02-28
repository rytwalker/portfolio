import { Component } from 'react';

class Toggle extends Component {
  state = { on: false };

  componentDidMount() {
    if (window.innerWidth >= 960) {
      this.setState({ on: true });
    }
  }

  toggle = () => this.setState({ on: !this.state.on });

  render() {
    const { children } = this.props;
    const { on } = this.state;

    return children({ on: on, toggle: this.toggle });
  }
}

export default Toggle;
