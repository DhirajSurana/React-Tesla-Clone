import React from "react";
import styled from "styled-components";

function Section({ title, description, image, leftBtnText, rightBtnText }) {
  return (
    <Wrap bgImage={image}>
      <ItemText>
        <h1>{title}</h1>
        <p>{description}</p>
      </ItemText>
      <Buttons>
        <ButtonGroup>
          <LeftButton>{leftBtnText}</LeftButton>
          {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
        </ButtonGroup>
        <DownArrow src="/images/down-arrow.svg" alt="">
        </DownArrow>
      </Buttons>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${props => `url("images/${props.bgImage}")`};
  display:flex;
  align-items:center;
  flex-direction: column;
  justify-content: space-between;
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const ButtonGroup = styled.div`
    display:flex;
    flex-direction:column;
    margin-bottom:30px;
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  color: white;
  height: 40px;
  width: 256px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.65;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  &:hover{
    background-color:white;
    color:rgba(23, 26, 32, 0.8)
  }
`;

const RightButton = styled(LeftButton)`
  margin-top:15px;
  background-color: rgba(23, 26, 32, 0.8);
  color: white;

   &:hover{
    background-color:white;
    color:rgba(23, 26, 32, 0.8);
  }
`;

const DownArrow = styled.img`
  height:40px;  
  animation:animateDown infinite 1.5s;
  overflow-x:hidden;
`

const Buttons = styled.div`

`
