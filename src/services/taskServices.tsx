import ApiService from "./ApiService";

interface TaskType {
  id?: string,
  subject: string,
  task_priority: string,
  description: string,
  due_date: string,
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

  getTaskById(id:string) {
    return this.get(`tasks/${id}`);
  }

  deleteTask(id:TaskType) {
    return this.delete(`tasks/${id}`);
  }

  updateTask(task:TaskType) {
    const { id } = task;
    return this.put(`tasks/${id}`, task);
  }
}

export default TaskService;