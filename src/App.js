import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./routes/routes";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { Fragment, createElement } from "react";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((item) => {
          console.log(item.path);
          const DefaultLayout = item?.layout || Fragment;
          const Component = item.component;
          return (
            <Route
              path={item.path}
              key={item.path}
              element={
                <>
                  <DefaultLayout>
                    <Component />
                  </DefaultLayout>
                </>
              }
            >
              {Boolean(item?.children) && Array.isArray(item?.children) && (
                <>
                  {item.children.map((child) => (
                    <Route
                      key={child.path}
                      path={child.path}
                      element={createElement(child.component)}
                    />
                  ))}
                </>
              )}
            </Route>
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
