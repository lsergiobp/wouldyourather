import { getAuthUser } from '../../features/authUser';
import { useSelector } from 'react-redux';
import { Route, Redirect, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ component: Comp, path, ...rest }) => {
  const authUser = useSelector(getAuthUser);
  const location = useLocation();
  let loggedIn = authUser !== null;

  return (
    <Route
      path={path}
      {...rest}
      render={(props) => {
        return loggedIn ? (
          <Comp {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: {
                prevLocation: location,
                error: 'You need to login first!',
              },
            }}
          />
        );
      }}
    />
  );
};

export default ProtectedRoute;
