import React, {Component} from "react";
import "./App.css";


export default class App extends Component {
  state = {
    todoData : [
    ],

    value: ""
  }

  btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right"
  }
  // 동적으로 만들어야 하기 때문에 함수로 설정
  getStyle = (completed) => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: completed ? "line-through" : "none"
    }
  }

  handleClick = (id) => {
    let newTodoData = this.state.todoData.filter(data => data.id !== id);
    this.setState({todoData: newTodoData})
  }

  // input에 값을 치면 나옴
  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({value: e.target.value})

  }
  //submit 버튼 입력 시 변경
  handleSubmit = (e) => {
    //form 안에서 input을 전송 할 때 page reload 를 막아준다.
    e.preventDefault();
    //새로운 할 일 데이터
    let newTodo = {
      id: Date.now(),
      title: this.state.value,
      completed: false,
    }
    //원래 있던 할일에 추가해준다.
    this.setState({todoData: [...this.state.todoData, newTodo], value:""});
  }

  handleCompleteChange = (id) => {
    let newTodoData = this.state.todoData.map((data) => {
      if(data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    });
    this.setState({todoData: newTodoData});
  }

  render() {
    return (
      <div className="container">
        <div className="todoBlock">
          {this.state.todoData.map(data => (
            <div style={this.getStyle(data.completed)} key={data.id}>
              <input type="checkbox"
                     defaultChecked={false}
                     onChange={() => this.handleCompleteChange(data.id)}/>
              {data.title}
              <button style={this.btnStyle}
                      onClick={() => this.handleClick(data.id)}>x</button>
            </div>
          ))}

          <form style={{display:'flex'}} onSubmit={this.handleSubmit}>
            <input type="text"
                   name="value"
                   style={{flex: '10', padding:'5px'}}
                   placeholder='해야할 일을 입력하세요'
                   value={this.state.value}
                   onChange={this.handleChange}/>
            <input type="submit"
            value="입력"
            className="btn"
            style={{flex:"1"}}/>
          </form>
        </div>
      </div>
    )
  }
}