import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import TaskService from '../../services/taskServices';
import { messageError } from '../../componets/toastr';
import { messageSuccess } from '../../componets/toastr';
import { Link } from 'react-router-dom';


interface Task {
  id: string;
  subject: string;
  task_priority: string;
  description: string;
  due_date: string;
}

const useStyles = makeStyles((theme) => ({
  formContainer: {
    width: '60%',
    margin: 'auto',
    marginTop: theme.spacing(10),
    padding: theme.spacing(3),
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    backgroundColor: '#fff',
  },
  formInput: {
    marginBottom: theme.spacing(2),
    borderColor: '#349aed',
    width: '100%',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: theme.spacing(2),
  },
  submitButton: {
    backgroundColor: '#349aed',
    width: '45%',
  },
  backButton: {
    backgroundColor: 'red',
    color: '#fff',
    width: '45%',
  },
}));

const EditTask: React.FC = () => {
  const location = useLocation();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const classes = useStyles();
  const [task, setTask] = useState<Task>({
    id: '',
    subject: '',
    task_priority: '',
    description: '',
    due_date: '',
  });

  const service = new TaskService();

  useEffect(() => {
    const taskFromLocation = location.state as { task: Task } | undefined;
    if (taskFromLocation && taskFromLocation.task) {
      setTask(taskFromLocation.task);
    } else if (id) {
      fetchTaskData(id);
    }
  }, [id, location.state]);

  const fetchTaskData = async (taskId: string) => {
    try {
      const taskDataResponse = await service.getTaskById(taskId);
      const taskData = taskDataResponse.data;
      setTask(taskData);
    } catch (error) {
      messageError('Error fetching task data:');
    }
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await service.updateTask(task);
      navigate('/home');
      messageSuccess("Upadate successfully")
    } catch (error) {
      messageError('Error updating task:');
    }
  };
 {console.log('date',task.due_date)}
  return (
    <div className={classes.formContainer}>
      <h2>Edit Task</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          className={classes.formInput}
          label="Subject"
          variant="outlined"
          name="subject"
          value={task.subject}
          onChange={handleInputChange}
          required
        />
        <TextField
          className={classes.formInput}
          select
          label="Priority"
          variant="outlined"
          name="task_priority"
          value={task.task_priority}
          onChange={handleInputChange}
          required
        >
          <option value="">Select Priority</option>
          <option value="high">High</option>
          <option value="normal">Normal</option>
          <option value="low">Low</option>
        </TextField>
        <TextField
          className={classes.formInput}
          label="Description"
          variant="outlined"
          name="description"
          value={task.description}
          onChange={handleInputChange}
          multiline
          minRows={4}
          required
        />
        <TextField
          className={classes.formInput}
          variant="outlined"
          name="due_date"
          type="date"
          value={task.due_date} 
          onChange={handleInputChange}
        />
        <div className={classes.buttonContainer}>
          <Button
            className={classes.submitButton}
            variant="contained"
            color="primary"
            type="submit"
          >
            Update Task
          </Button>
          <Button className={classes.backButton} component={Link} to="/home">
            Back
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EditTask;
