import React, {useState} from "react";
import "./App.css";


export default function App() {
  // state = {
  //   todoData: [],
  //   value: ""
  // }
  // 첫번째 이름은 변수 이름, 두번째는 state를 정하는 함수
  const [todoData, setTodoData] = useState(([]));
  const [value, setValue] = useState("");

  const btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right"
  }
  // 동적으로 만들어야 하기 때문에 함수로 설정
  const getStyle = (completed) => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: completed ? "line-through" : "none"
    }
  }

  const handleClick = (id) => {
    let newTodoData = todoData.filter(data => data.id !== id);
    setTodoData(newTodoData);
  }

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

  const handleCompleteChange = (id) => {
    let newTodoData = todoData.map((data) => {
      if (data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    });
    // this.setState({todoData: newTodoData});
    setTodoData(newTodoData);
  }


  return (
    <div className="container">
      <div className="todoBlock">
        {todoData.map(data => (
          <div style={getStyle(data.completed)} key={data.id}>
            <input type="checkbox"
                   defaultChecked={false}
                   onChange={() => handleCompleteChange(data.id)}/>
            {data.title}
            <button style={btnStyle}
                    onClick={() => handleClick(data.id)}>xF
            </button>
          </div>
        ))}

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