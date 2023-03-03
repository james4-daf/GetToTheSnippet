import Grid from "@mui/material/Grid";
import { Navigate } from "react-router-dom";
import SnippetDetail from "../components/SnippetDetail/SnippetDetail";
import SnippetList from "../components/SnippetList/SnippetList";
import Login from "../pages/LogIn";
import ProtectedPage from "../pages/ProtectedPage";
import Signup from "../pages/Signup";
import * as PATHS from "../utils/paths";

const routes = (props) => {
  const { user } = props;
  return [
    {
      path: PATHS.HOMEPAGE,
      element: <SnippetList {...props} />,
    },
    {
      path: PATHS.SNIPPET_DETAIL,
      element: (
        <Grid container>
          <SnippetList {...props} />

          <SnippetDetail {...props} />
        </Grid>
      ),
    },
    {
      path: PATHS.SIGNUPPAGE,
      element: <Signup {...props} />,
    },

    {
      path: PATHS.LOGINPAGE,
      element: <Login {...props} />,
    },
    {
      path: PATHS.PROTECTEDPAGE,
      element: user ? (
        <ProtectedPage {...props} />
      ) : (
        <Navigate to={PATHS.LOGINPAGE} replace />
      ),
    },
  ];
};

export default routes;
