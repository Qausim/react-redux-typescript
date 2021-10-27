import { FC } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  & {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #33333333;
    position: fixed;
    top: 0px;
    color: #000000;
    font-family: cursive;
    font-size: 1.2rem;
  }
`;

const Loader: FC<{ loading: boolean }> = ({ loading }) => {
  return loading ? (
    <Wrapper>
      <p>Loading...</p>
    </Wrapper>
  ) : null;
};

export default Loader;
