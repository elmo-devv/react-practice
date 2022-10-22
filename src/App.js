import React, {useState} from "react";
import "./App.css";
import List from "./components/List";
import Form from "./components/Form";


export default function App() {
  // state = {
  //   todoData: [],
  //   value: ""
  // }
  // 첫번째 이름은 변수 이름, 두번째는 state를 정하는 함수
  const [todoData, setTodoData] = useState(([]));
  const [value, setValue] = useState("");


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
    <div className="flex items-center justify-center w-screen h-screen bg-blue-100">
      <div className="w-full p-6 m-4 bg-white rounded shadow lg:w-3/4 lg:max-w-lg" >
        <div className="flex justify-between mb-3">할일목록</div>
        <List todoData={todoData} setTodoData={setTodoData}/>
        <Form value={value} setValue={setValue} handleSubmit={handleSubmit}/>
      </div>
    </div>
  )

}