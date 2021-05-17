export default function taskMap(tasks) {
  const completed = [];
  const notCompleted = [];

  for (const task of tasks) {
    if (task.completed) {
      completed.push(task);
      continue;
    }

    notCompleted.push(task);
  }

  return { completed, notCompleted };
}
