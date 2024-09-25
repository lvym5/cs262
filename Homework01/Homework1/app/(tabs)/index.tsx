import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, TouchableOpacity, Alert } from 'react-native';

interface Task {
  id: string;
  value: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [task, setTask] = useState<string>('');
  const [todoList, setTodoList] = useState<Task[]>([]);

  const addTask = (): void => {
    if (task.length > 0) {
      setTodoList([...todoList, { id: Math.random().toString(), value: task, completed: false }]);
      setTask('');
    }
  };

  const toggleTaskCompletion = (taskId: string): void => {
    setTodoList(
      todoList.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const removeTask = (taskId: string): void => {
    Alert.alert(
      'Delete Task',
      'Are you sure you want to delete this task?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: () => setTodoList(todoList.filter((task) => task.id !== taskId)),
          style: 'destructive',
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ToDo App</Text>
      <TextInput
        placeholder="Enter Task"
        style={styles.input}
        onChangeText={(text) => setTask(text)}
        value={task}
      />
      <Button title="Add Task" onPress={addTask} />
      <FlatList
        data={todoList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <TouchableOpacity onPress={() => toggleTaskCompletion(item.id)}>
              <Text style={item.completed ? styles.completedTask : styles.taskText}>
                {item.value}
              </Text>
            </TouchableOpacity>
            <Button title="Delete" onPress={() => removeTask(item.id)} color="red" />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginBottom: 10,
    padding: 10,
    fontSize: 18,
  },
  taskItem: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  taskText: {
    fontSize: 18,
  },
  completedTask: {
    fontSize: 18,
    textDecorationLine: 'line-through',
    color: 'gray',
  },
});

export default App;
