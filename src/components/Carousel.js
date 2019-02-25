import React, { Component } from 'react';
import styled from 'styled-components';
import { Transition } from 'react-spring';
import Icon from '../utilities/Icon';

class Carousel extends Component {
  state = { index: 0, reverse: false };

  toggle = e =>
    this.setState(prevState => ({
      index: prevState.index === 2 ? 0 : prevState.index + 1,
      reverse: false
    }));

  toggleReverse = e =>
    this.setState(prevState => ({
      index: prevState.index === 0 ? 2 : prevState.index - 1,
      reverse: true
    }));

  render() {
    const { reverse } = this.state;
    return (
      <CarouselContainer>
        <Transition
          native
          reset
          unique
          items={this.state.index}
          from={{
            opacity: 0,
            transform: `translate3d(${reverse ? '-100%' : '100%'},0,0)`
          }}
          enter={{ opacity: 1, transform: 'translate3d(0%,0,0)' }}
          leave={{
            opacity: 0,
            transform: `translate3d(${reverse ? '50%' : '-50%'},0,0)`
          }}
        >
          {index => this.props.pages[index]}
        </Transition>
        {/* CONTROLS */}
        <CarouselControlRight onClick={this.toggle}>
          <Icon name="arrowRight" color="rgba(0,0,0, 0.6)" />
        </CarouselControlRight>
        <CarouselControlLeft onClick={this.toggleReverse}>
          <Icon name="arrowLeft" color="rgba(0,0,0, 0.6)" />
        </CarouselControlLeft>
      </CarouselContainer>
    );
  }
}

const CarouselContainer = styled.div`
  position: relative;
  height: 558px;
  display: block;
  border-radius: 2.5px;
  background: #e4e4e4;
  box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.7);
  .img-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;

    img {
      transition: all 0.2s;
      width: 100%;
      height: auto;
      margin: 0 auto;
      display: block;
    }
  }
`;

const CarouselControl = styled.div`
  width: 100px;
  position: absolute;
  top: 50%;
  cursor: pointer;
  z-index: 1001;
`;

const CarouselControlRight = styled(CarouselControl)`
  right: 0;
`;
const CarouselControlLeft = styled(CarouselControl)`
  left: 0;
`;

export default Carousel;
