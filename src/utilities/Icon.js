import React, { Component } from 'react';

class Icon extends Component {
  static defaultProps = {
    color: '#070707'
  };
  render() {
    switch (this.props.name) {
      case 'arrowRight':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            fill={this.props.color}
          >
            <path d="M192 128l128 128-128 128z" />
          </svg>
        );
      case 'arrowLeft':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            fill={this.props.color}
          >
            <path d="M320 128L192 256l128 128z" />
          </svg>
        );
    }
  }
}

export default Icon;
