// theme
import ThemeProvider from './theme';
import MainScreen from './sections/auth/MainScreen';
// ----------------------------------------------------------------------

export default function App() {
  return (
    <ThemeProvider>
      <MainScreen />
    </ThemeProvider>
  );
}














// routes
// import Router from './routes';
// theme
// import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
// // import Router from 'react-router-dom';
// import ThemeProvider from './theme';
// // components
// import ScrollToTop from './components/ScrollToTop';
// import { BaseOptionChartStyle } from './components/chart/BaseOptionChart';
// import MainScreen from './Comp/MainScreen';
// // import Login from './Comp/Login';
// // import Signup from './Comp/Signup';
// import Login from './pages/Login';
// // import NotFound from './pages/Page404';
// import Register from './pages/Register';

// // ----------------------------------------------------------------------

// export default function App() {
//   return (
//     <Router>
// <Switch>

//     <ThemeProvider>
//       {/* <Login /> */}
//      <Route exact path="/"><Login/>
//        </Route>

//        <Route exact path="/dashboard">
//         <MainScreen />
//        </Route>
//       {/* <ScrollToTop />
//       <BaseOptionChartStyle />
//     <Router /> */}
//     </ThemeProvider>
//     </Switch>
//     </Router>
//   );
// }
