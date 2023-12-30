import {Route, Routes} from 'react-router'
import {ROUTER} from './main.router'
import {Layout} from '@draco/pages/layout'

export function App() {
  return (
    <div className="text-white">
      <Routes>
        { ROUTER.map((route) =>
          route.layout ? (
            <Route
              key={route.path}
              path={route.path}
              element={
                !route.protected ? (
                  <>
                    <Layout>{ route.component }</Layout>
                  </>
                ) : (
                  <>
                    <Layout>{ route.component }</Layout>
                  </>
                )
              }
            />
          ) : (
            <Route
              key={route.path}
              path={route.path}
              element={!route.protected ? route.component : <>{ route.component }</>}
            />
          )
        )}
      </Routes>
    </div>
  );
}

export default App;
