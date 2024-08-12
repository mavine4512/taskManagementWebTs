import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {messageError, messageSuccess} from '../../components/toast';
import TaskService from '../../services/taskServices';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  formContainer: {
    width: '60%',
    margin: 'auto',
    marginTop: theme.spacing(20),
    padding: theme.spacing(6),
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    backgroundColor: '#fff',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  formInput: {
    marginBottom: theme.spacing(2),
    borderColor:'#349aed',
    width: '100%',
  },
   buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: theme.spacing(2),
  },
  submitButton: {
    backgroundColor:'#349aed',
   width: '45%',
  },
   backButton: {
    backgroundColor: 'red',
    color: '#fff',
    width: '45%',
  },
}));

interface Task {
  subject: string;
  task_priority: string;
  description: string;
  due_date: string;
}

const CreateTask: React.FC = () => {
  const classes = useStyles();
  const [task, setTask] = useState<Task>({
    subject: '',
    task_priority: '',
    description: '',
    due_date: '',
  });

   const navigate = useNavigate();
   const service = new TaskService();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTask(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
     e.preventDefault();
  try {
    await service.saveTask(task);
    setTask({
    subject: '',
    task_priority: '',
    description: '',
    due_date: '',
    });
    navigate('/home');
    messageSuccess('Task created successfully');
  } catch (error) {
    messageError('Error creating task');

  }
  };

  return (
    <div className={classes.formContainer}>
      <h2>Create New Task</h2>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          className={classes.formInput}
          label="Subject"
          variant="outlined"
          name="subject"
          value={task.subject}
          onChange={handleChange}
          required
        />
        <TextField
          className={classes.formInput}
          select
          label="Priority"
          variant="outlined"
          name="task_priority"
          value={task.task_priority}
          onChange={handleChange}
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
          onChange={handleChange}
          multiline
          rows={4}
          required
        />
        <TextField
          className={classes.formInput}
        //   label="Due Date"
          variant="outlined"
          name="due_date"
          type="date"
          value={task.due_date}
          onChange={handleChange}
        />
         <div className={classes.buttonContainer}>
          <Button
            className={classes.submitButton}
            variant="contained"
            color="primary"
            type="submit"
          >
            Create Task
          </Button>
          <Button
            className={classes.backButton}
            component={Link}
            to="/home"
          >
           cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
