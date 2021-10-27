import { FC } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { ReduxState } from "../../interfaces/redux-state.interface";
import { withAuth } from "../../hocs/withAuth";

const Wrapper = styled.div``;

const Home: FC = () => {
  const { currentUser } = useSelector((state: ReduxState) => state.auth);
  return (
    <Wrapper>
      <h1>Welcome {currentUser?.username}!</h1>
    </Wrapper>
  );
};

export default withAuth(Home);
