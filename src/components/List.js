import React from 'react';

function List({todoData, setTodoData}) {
  // const btnStyle = {
  //   color: "#fff",
  //   border: "none",
  //   padding: "5px 9px",
  //   borderRadius: "50%",
  //   cursor: "pointer",
  //   float: "right"
  // }

  // 동적으로 만들어야 하기 때문에 함수로 설정
  // const getStyle = (completed) => {
  //   return {
  //     padding: "10px",
  //     borderBottom: "1px #ccc dotted",
  //     textDecoration: completed ? "line-through" : "none"
  //   }
  // }

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
        <div key={data.id}>
          <div className="flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded">
            <div className="items-center">
              <input type="checkbox"
                     defaultChecked={false}
                     onChange={() => handleCompleteChange(data.id)}/>
              <span className={data.completed ? "line-through": undefined}>{data.title}</span>
            </div>
              <div className="items-center">
                <button className="px-4 py-2 float-rignt" onClick={() => handleClick(data.id)}>x
                </button>
              </div>
          </div>

        </div>
      ))}
    </div>
  );
}

export default List;