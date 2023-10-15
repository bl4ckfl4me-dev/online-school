import { Routes, Route, Navigate } from "react-router-dom";
import { HOME_ROUTE } from "../utils/consts";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from "../main";
import { authRoutes, publicRoutes } from "../utils/routes";

const AppRouter = observer(() => {
  const user = useContext(Context).user;
  console.log(user);

  return (
    <Routes>
      {user.isAuth &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}

      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
      <Route path="*" element={<Navigate to={HOME_ROUTE} replace />} />
    </Routes>
  );
});

export default AppRouter;