import React, { useState } from 'react';
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import Menu from '../components/Menu';

const Tab1: React.FC = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [taskInput, setTaskInput] = useState('');

  const addTask = (taskText: string) => {
    if (!taskText) return;

    setTasks((prevTasks) => [...prevTasks, taskText]);
    setTaskInput('');
  };

  const toggleTaskCompletion = (index: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, i) => (i === index ? task + ' completed' : task))
    );
  };

  const deleteTask = (index: number) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };

  return (
    <IonPage id="main-content">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton autoHide={false}></IonMenuButton>
          </IonButtons>
          <IonTitle>ToDo List</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addTask(taskInput);
          }}
        >
          <label htmlFor="task">Task:</label>
          <input
            type="text"
            id="task"
            required
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
          />
          <button type="submit">Add Task</button>
        </form>
        <div>
          <h2>Tasks:</h2>
          <ul>
            {tasks.map((task, index) => (
              <li key={index} onClick={() => toggleTaskCompletion(index)}>
                {task}
                <button onClick={() => deleteTask(index)}>Delete</button>
              </li>
            ))}
          </ul>
          <div id="task-count">{`Tasks: ${tasks.length} (Completed: ${tasks.filter(
            (task) => task.includes('completed')
          ).length})`}</div>
        </div>
      </IonContent>
      <Menu />
    </IonPage>
  );
};

export default Tab1;
