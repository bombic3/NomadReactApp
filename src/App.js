import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

// /:id 원하는 변수 1,2,3,4.. 어느 페이지든 갈 수 있음
// : 중요 그냥 /id 는 텍스트일 뿐
// movie/121212   movie/234562  등등..