import styled, { keyframes } from 'styled-components';

const Shimmer = keyframes`
  100% { transform: translateX(100%);}
`

export const Container = styled.div<{ width: number, height: number, radius: number }>`

  position: relative;

  width: ${({width}) => width + 'px'};
  height: ${({ height }) => height + 'px'};

  background-color: #7E7E7E;
  border-radius: ${({ radius }) => radius + 'px'};

  ::after {
    content: '';
    position: absolute;
    top: 0px;
    left: 0px;

    width: ${({ width }) => width + 'px'};
    height: ${({ height }) => height + 'px'};

    background-image: linear-gradient(to right, transparent, rgba(254,254,254,0.6), transparent);

    transform: translateX(-100%);
    animation: ${Shimmer} 1.75s infinite;
  }
`