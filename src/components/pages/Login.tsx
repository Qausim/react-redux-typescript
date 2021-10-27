import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import styled from "styled-components";
import { ReduxState } from "../../interfaces/redux-state.interface";
import { computeQueryParameters } from "../../utils/url.utils";
import AuthActions from "../../store/actions/auth.actions";
import Loader from "../utilities/Loader";

const Wrapper = styled.div``;

const Login: FC = () => {
  const { loading } = useSelector((state: ReduxState) => state.auth);
  const history = useHistory();
  const dispatch = useDispatch();
  const { search } = useLocation();
  const { next } = computeQueryParameters(search) || {};

  const signin = async () => {
    const user = await dispatch(AuthActions.signin());
    // @ts-ignore
    if (user) {
      history.replace(next || "/");
    }
  };

  return (
    <Wrapper>
      <h1>Login</h1>
      <button onClick={signin}>Click to log in</button>
      <Loader {...{ loading }} />
    </Wrapper>
  );
};

export default Login;
