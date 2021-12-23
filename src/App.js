import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("i run all the time");
  useEffect(() => {
    console.log("I run only once.");
  }, []);
  useEffect(() => {
    // if (keyword !== "" && keyword.length > 5) {
      console.log("I run when 'keyword' changes.");
    // }
  }, [keyword]);
  useEffect(() => {
      console.log("I run when 'counter' changes.");
  }, [counter]);
  useEffect(() => {
      console.log("I run when keyword & counter changes.");
  }, [keyword, counter]);
  
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here...."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}
// state 값이 변화될 때 모든 code가 render (다시 실행) 됨.
// component 내부의 몇몇 코드는 처음 열릴 때 render(실행)되고 다시 실행되지 않도록 하고 싶을 때
// useEffect의 두가지 argument중 첫번째(EffectCallback)가 처음만 render되고 다시 실행 안 되도록 하는 것
// (effect: EffectCallback, deps?: DependencyList)
// 두번째 argument에 [] 빈 array 주기

// 특정코드 변화할 때 특정코드 render 하기
// search에 자판 칠 때마다 rerender 됨.(조건 글자수 걸기)
// 한번만 render 한 후 click 때는 render 안하고 keyword가 변화할 때만 render
// [] 빈 array에 특정 값(keyword) 넣으면 그거 변화할 때만 render

export default App;
