import ApiService from "./ApiService";

interface TaskType {
  id: string;
  name: string;
}

class TaskService extends ApiService {
  constructor() {
    super("/");
  }

  saveTask(task: TaskType) {
    return this.post("tasks", task);
  }

  getAllTasks() {
    return this.get("tasks/");
  }

  getTaskById(id:TaskType) {
    return this.get(`tasks/${id}`);
  }

  deleteTask(id:TaskType) {
    return this.delete(`tasks/${id}`);
  }

  updateTask(task:TaskType) {
    return this.put(`tasks/${task.id}`, task);
  }
}

export default TaskService;