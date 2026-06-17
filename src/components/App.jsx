import { NetworkContext } from 'Context/NetworkContext';
import { lazy, Suspense, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Networks from 'Utils/Networks';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const StreamingServicePage = lazy(() =>
  import('../pages/StreamingServicePage/StreamingServicePage')
);
const SubscriptionPage = lazy(() =>
  import('../pages/SubscriptionPage/SubscriptionPage')
);
const StreamingService = lazy(() =>
  import('../components/StreamingService/StreamingService')
);
const SubscribeStrimingService = lazy(() =>
  import('../components/SubscribeStrimingService/SubscribeStrimingService')
);
const Serial = lazy(() => import('../components/Serial/Serial'));
const Season = lazy(() => import('../components/Season/Season'));

export const App = () => {
  const [networks, setNetworks] = useState(Networks);

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="dark"
      />
      <Suspense fallback={<div className="app-loading">Loading…</div>}>
        <Switch>
          <NetworkContext.Provider value={{ networks, setNetworks }}>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/streamingService">
              <StreamingServicePage />
            </Route>
            <Route path="/streamingService/:serviceId">
              <StreamingService />
            </Route>
            <Route exact path="/subscription">
              <SubscriptionPage />
            </Route>
            <Route exact path="/subscription/:serviceId">
              <SubscribeStrimingService />
            </Route>
            <Route exact path="/subscription/:serviceId/:showId">
              <Serial />
            </Route>
            <Route path="/subscription/:serviceId/:showId/:seasonId">
              <Season />
            </Route>
          </NetworkContext.Provider>
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </div>
  );
};
