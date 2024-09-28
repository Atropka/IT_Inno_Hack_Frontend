// src/pages/ProjectsBoard.js
import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import TaskCard from '../TaskCard/TaskCard';
import DashboardHeaader from '../DashboardHeader/DashBoardHeader';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// Пример задач для каждой колонки
const initialData = {
  tasks: {
    'task-1': { id: 'task-1', title: 'UX sketches', time: '4d', users: ['https://via.placeholder.com/32'] },
    'task-2': { id: 'task-2', title: 'Mind Map', time: '2d', users: ['https://via.placeholder.com/32'] },
    'task-3': { id: 'task-3', title: 'Research reports', time: '4d', users: ['https://via.placeholder.com/32'] },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'To Do',
      taskIds: ['task-1', 'task-2'],
    },
    'column-2': {
      id: 'column-2',
      title: 'In Progress',
      taskIds: [],
    },
    'column-3': {
      id: 'column-3',
      title: 'In Review',
      taskIds: ['task-3'],
    },
    'column-4': {
      id: 'column-4',
      title: 'Done',
      taskIds: [],
    },
  },
  // Список колонок по порядку
  columnOrder: ['column-1', 'column-2', 'column-3', 'column-4'],
};

const ProjectsBoard = () => {
  const [data, setData] = useState(initialData);

  // Функция обработки перемещения задачи
  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    // Если задача перемещена в ту же позицию
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    // Получаем колонку, из которой была перемещена задача
    const startColumn = data.columns[source.droppableId];
    // Получаем колонку, в которую задача перемещается
    const finishColumn = data.columns[destination.droppableId];

    // Если перемещение внутри одной колонки
    if (startColumn === finishColumn) {
      const newTaskIds = Array.from(startColumn.taskIds);
      newTaskIds.splice(source.index, 1); // Удаляем задачу из исходной позиции
      newTaskIds.splice(destination.index, 0, draggableId); // Вставляем задачу на новую позицию

      const newColumn = {
        ...startColumn,
        taskIds: newTaskIds,
      };

      setData({
        ...data,
        columns: {
          ...data.columns,
          [newColumn.id]: newColumn,
        },
      });
      return;
    }

    // Перемещение задачи между разными колонками
    const startTaskIds = Array.from(startColumn.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStartColumn = {
      ...startColumn,
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finishColumn.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinishColumn = {
      ...finishColumn,
      taskIds: finishTaskIds,
    };

    setData({
      ...data,
      columns: {
        ...data.columns,
        [newStartColumn.id]: newStartColumn,
        [newFinishColumn.id]: newFinishColumn,
      },
    });
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 p-10">
        <DashboardHeaader />

        {/* DragDropContext оборачивает весь контент, который будет поддерживать перетаскивание */}
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="grid grid-cols-4 gap-6">
            {data.columnOrder.map((columnId) => {
              const column = data.columns[columnId];
              const tasks = column.taskIds.map((taskId) => data.tasks[taskId]);

              return (
                <div key={column.id}>
                  <h2 className="text-xl font-semibold mb-4">{column.title}</h2>
                  {/* Droppable – область, куда можно перетаскивать задачи */}
                  <Droppable droppableId={column.id}>
                    {(provided) => (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className="bg-gray-200 p-4 rounded-lg min-h-[400px]"
                      >
                        {tasks.map((task, index) => (
                       
                          <Draggable key={task.id} draggableId={task.id} index={index}>
                            {(provided) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                className="mb-4"
                              >
                                <TaskCard title={task.title} time={task.time} users={task.users} />
                              </div>
                            )}
                          </Draggable>
                        ))}
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                </div>
              );
            })}
          </div>
        </DragDropContext>
      </div>
    </div>
  );
};

export default ProjectsBoard;
