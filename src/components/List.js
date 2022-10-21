import React from 'react';

function List({todoData, setTodoData}) {
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
    <div>
      {todoData.map(data => (
        <div style={getStyle(data.completed)} key={data.id}>
          <input type="checkbox"
                 defaultChecked={false}
                 onChange={() => handleCompleteChange(data.id)}/>
          {data.title}
          <button style={btnStyle}
                  onClick={() => handleClick(data.id)}>x
          </button>
        </div>
      ))}
    </div>
  );
}

export default List;