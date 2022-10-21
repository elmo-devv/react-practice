import React, {useState} from "react";
import "./App.css";
import List from "./components/List";


export default function App() {
  // state = {
  //   todoData: [],
  //   value: ""
  // }
  // 첫번째 이름은 변수 이름, 두번째는 state를 정하는 함수
  const [todoData, setTodoData] = useState(([]));
  const [value, setValue] = useState("");

  // input에 값을 치면 나옴
  const handleChange = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);

  }
  //submit 버튼 입력 시 변경
  const handleSubmit = (e) => {
    //form 안에서 input을 전송 할 때 page reload 를 막아준다.
    e.preventDefault();
    //새로운 할 일 데이터
    let newTodo = {
      id: Date.now(),
      title: value,
      completed: false,
    }
    //원래 있던 할일에 추가해준다.
    // setTodoData({todoData: [...todoData, newTodo], value: ""});
    setTodoData(prev => [...prev, newTodo]);
    setValue("");
  }

  return (
    <div className="container">
      <div className="todoBlock">
        <div className="title">할일목록</div>
        <List todoData={todoData} setTodoData={setTodoData}/>

        <form style={{display: 'flex'}} onSubmit={handleSubmit}>
          <input type="text"
                 name="value"
                 style={{flex: '10', padding: '5px'}}
                 placeholder='해야할 일을 입력하세요'
                 value={value}
                 onChange={handleChange}/>
          <input type="submit"
                 value="입력"
                 className="btn"
                 style={{flex: "1"}}/>
        </form>
      </div>
    </div>
  )

}