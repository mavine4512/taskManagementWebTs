import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import useStyles from "./styles";
import { ColorRing } from "react-loader-spinner";
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@material-ui/core";
import { EditOutlined,DeleteOutline } from "@material-ui/icons";
import {messageError} from '../../componets/toastr';
import {messageSuccess} from '../../componets/toastr';
import TaskService from "../../services/taskServices";

import {Task} from "../../interfaces";

const Home=()=> {
     const [taskList, setTaskList] = useState<Task[]>([])
     const [loading, setLoading] = useState(true);
     const [currentPage, setCurrentPage] = useState(1);
     const [tasksPerPage] = useState(5);
     const [totalTasks, setTotalTasks] = useState(0);
     const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
     const [taskToDelete, setTaskToDelete] = useState<Task | null>(null);

     const {
    homeContainer,
    userListEdit,
    actionItems,
    userListDelete,
    tableRow,
    loader,
    containerRoot,
    table,
    headerCell,
    open,
    inprogress,
    closed,
    userListDeleteItem,
    createContainer,
    pagination
  } = useStyles();


  const service = new TaskService();
  const navigate = useNavigate();

   useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await service.getAllTasks();
        setTaskList(response.data.data);
        setLoading(false);
      } catch (error) {
        messageError('Error fetching tasks:');
      }
    };

    fetchData();
  }, []);


 const editAction=(task: Task)=> {
  navigate(`/editTask/${task.id}`, { state: { task } })
  }

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

   const handleDeleteConfirmation = (task: Task) => {
    setTaskToDelete(task);
    setDeleteConfirmationOpen(true);
  };

  const handleCloseConfirmation = () => {
    setTaskToDelete(null);
    setDeleteConfirmationOpen(false);
  };

   const handleDeleteTask = async () => {
    if (!taskToDelete) return;

    try {
      // await service.deleteTask(taskToDelete.id);
      // await service.deleteTask();
      // Remove the deleted task from the list
      setTaskList(taskList.filter((task) => task.id !== taskToDelete.id));
      setTotalTasks(totalTasks - 1);
      setTaskToDelete(null);
      setDeleteConfirmationOpen(false);
      messageSuccess('Success deleting tasks')
    } catch (error) {
      messageError("Error deleting task:");
    }
};   

  return (
    <div className={homeContainer}>
      {loading ? (
        <div className={loader}>
          <ColorRing
            visible={true}
            height={100}
            width={100}
            ariaLabel="color-ring-loading"
            wrapperStyle={{}}
            wrapperClass="color-ring-wrapper"
            colors={["#5626a3", "#363391", "#f8b26a", "#14c0c9", "#3565c4"]}
          />
        </div>
      ) : (
        <>
          <h1>Task Management App</h1>
          
          <div style={{ textAlign: 'left' }}>
            <button type="button" className={createContainer} onClick={()=> navigate('/createTask')} >Create New</button>
          </div>
          <Box
            sx={{
              height: 400,
              width: "80%",
              marginLeft: "10%",
              marginRight: "10%",
            }}
          >
            <table className={containerRoot}>
              <thead className={table}>
                <tr>
                  <th className={headerCell}>ID</th>
                  <th className={headerCell}>Subject</th>
                  <th className={headerCell}>Status</th>
                  <th className={headerCell}>Priority</th>
                  <th className={headerCell}>Due date</th>
                  <th className={headerCell}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {taskList &&
                  taskList.length > 0 &&
                  taskList.map((task) => (
                    <tr key={task.id}>
                      <td className={tableRow}>{task.id.substring(0, 6)}</td>
                      <td className={tableRow}>{task.subject}</td>
                      <td className={tableRow}>
                        {task.status_id === "closed" && (
                          <span className={closed}>
                            {task.status_id}
                          </span>
                        )}
                        {task.status_id === "in progress" && (
                          <span className={inprogress}>
                            {task.status_id}
                          </span>
                        )}
                        {task.status_id === "open" && (
                          <span className={open}>
                            {task.status_id}
                          </span>
                        )}
                      </td>
                      <td className={tableRow}>
                        {task.task_priority}
                      </td>
                      <td className={tableRow}>
                        {moment(task.due_date).format(
                          "MMMM Do YYYY, h:mm:ss a"
                        )}
                      </td>
                      <td className={tableRow}>
                        <div className={actionItems}>
                          <button
                            type="button"
                            className={userListEdit}
                            onClick={() => editAction(task)}
                          >
                            <EditOutlined className={userListDelete} />
                            Edit
                          </button>

                          <button
                            type="button"
                            className={userListDeleteItem}
                            // onClick={() => handleDeleteConfirmation(task)}
                          >
                            <DeleteOutline className={userListDelete} />
                            Delete
                          </button>
                          <Dialog
                            open={deleteConfirmationOpen}
                            onClose={handleCloseConfirmation}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                          >
                            <DialogTitle id="alert-dialog-title">{"Delete Task?"}</DialogTitle>
                            <DialogContent>
                              <DialogContentText id="alert-dialog-description">
                                Are you sure you want to delete this task?
                              </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                              <Button onClick={handleCloseConfirmation} color="primary">
                                Cancel
                              </Button>
                              <Button onClick={handleDeleteTask} color="primary" autoFocus>
                                Confirm
                              </Button>
                            </DialogActions>
                          </Dialog>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
          </table>

          </Box>
          {/* Pagination */}

           <div className={pagination}>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={taskList.length < tasksPerPage}
            >
              Next
            </Button>
          </div>
        </>
      )}
    </div>
  );
}

export default Home;