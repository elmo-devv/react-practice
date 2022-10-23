import React from 'react';
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";
import List from "./List";

const Lists = React.memo(({todoData, setTodoData}) => {
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


  const handleEnd = (result) => {
    //목적지가 없으면(이벤트 취소) 이 함수를 종료합니다.
    if(!result.destination) return;
    //리액트 불변성을 지켜주기 위해 새로운 todoData 생성
    const newTodoData = todoData;
    //1. 변경시키는 아이템을 배열에서 지워준다.
    //2. return 값으로 지워진 아이템을 잡아준다.
    const [reorderedItem] = newTodoData.splice(result.source.index, 1);
    //원하는 자리에 reorderedItem을 insert
    newTodoData.splice(result.destination.index, 0, reorderedItem);
    setTodoData(newTodoData)
  }

  return (
    <div>
      <DragDropContext onDragEnd={handleEnd}>
        <Droppable droppableId="todo">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {todoData.map((data, index) => (
                <Draggable key={data.id} draggableId={data.id.toString()}
                           index={index}>
                  {(provided, snapshot) => (
                    <List key={data.id}
                          id={data.id}
                          title={data.title}
                          completed={data.completed}
                          todoData={todoData}
                          setTodoData={setTodoData}
                          provided={provided}
                          snapshot={snapshot}/>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
});

export default Lists;