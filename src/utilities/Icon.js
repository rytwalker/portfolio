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
      case 'externalSite':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              d="M405.34 405.332H106.66V106.668H240V64H106.66C83.191 64 64 83.197 64 106.668v298.664C64 428.803 83.191 448 106.66 448h298.68c23.469 0 42.66-19.197 42.66-42.668V272h-42.66v133.332zM288 64v42.668h87.474L159.999 322.133l29.866 29.866 215.476-215.47V224H448V64H288z"
              fill={this.props.color}
            />
          </svg>
        );
    }
  }
}

export default Icon;