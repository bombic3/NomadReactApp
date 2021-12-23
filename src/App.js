import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    // button에 기본으로 새로고침 되므로 버튼 누를때 새로고침 안되게
    if (toDo === "") {
      return;
    }
    // button(엔터) 되면 input 비워짐

    setToDos((currentArray) => [toDo, ...currentArray]); 
    // array를 직접적으로 수정하지 않으면서 setToDos로 array 에 element 추가하는 방법
    
    setToDo("");
  }
  // console.log(toDos);
  
  return (
    <div>
      <h1>My To Do List ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
      <input
        value={toDo}
        onChange={onChange}
        type="text"
        placeholder="Write your to do!"
      />
      <button>+Add To De</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
// key는 인덱스값(숫자) 0부터 시작하는 index값

export default App;


// map(함수) 새로운 배열에(toDos의 배열 안 객체 수 만큼) 함수실행
// item은 내가 지정한 이름 각 각의 item을 하나씩 함수실행해서 새배열에 넣음
// ['there','are','you','are','how','hello'].map((item) => item.toUpperCase());
// ['THERE','ARE','YOU','ARE','HOW','HELLO']
