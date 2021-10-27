import { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { ReduxState } from "../interfaces/redux-state.interface";

export function withAuth<T>(WrappedComponent: FC<T>) {
  return (props: T) => {
    const { currentUser } = useSelector((state: ReduxState) => state.auth);
    const history = useHistory();
    const { pathname } = useLocation();

    useEffect(() => {
      // user is not logged in
      if (!currentUser) {
        history.replace(`/login?next=${pathname}`);
      }
    }, [currentUser, history, pathname]);

    return <WrappedComponent {...props} />;
  };
}
