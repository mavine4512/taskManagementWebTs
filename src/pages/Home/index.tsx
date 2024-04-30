import React, { useState, useEffect } from "react";
import moment from "moment";
import useStyles from "./styles";
import { ColorRing } from "react-loader-spinner";
import { Box } from "@material-ui/core";
import { EditOutlined } from "@material-ui/icons";

import {Task} from "../../interfaces";


const data = {
  data: [
    {
      id: "task_2flo0m9STOIYJ3lpD0GVi40W64j",
      object: "task",
      task_priority: "normal",
      status_id: "open",
      subject: "Creating a month Business Plan",
      description:
        "Outline goals, strategies, budget, and timeline for a one-month period.",
      due_date: "2024-04-29T10:00:04.466Z",
      created_at: "2024-04-29T10:00:04.462Z",
      updated_at: "2024-04-29T10:00:04.462Z",
    },
    {
      id: "task_2flo0pR564OUAWWe5OH9GPnhscl",
      object: "task",
      task_priority: "low",
      status_id: "open",
      subject: "Creating a quarter Business Plan",
      description:
        "Outline goals, strategies, budget, and timeline for a three-month period.",
      due_date: "2024-04-29T10:00:04.468Z",
      created_at: "2024-04-29T10:00:04.462Z",
      updated_at: "2024-04-29T10:00:04.462Z",
    },
    {
      id: "task_2flo0mVira7ShQoPNNe0dI1K9mJ",
      object: "task",
      task_priority: "high",
      status_id: "open",
      subject: "Creating a year Business Plan",
      description:
        "Outline goals, strategies, budget, and timeline for a one-year period.",
      due_date: "2024-04-29T10:00:04.469Z",
      created_at: "2024-04-29T10:00:04.462Z",
      updated_at: "2024-04-29T10:00:04.462Z",
    },
    {
      id: "task_2flo0lYmtZJ8Lk406GLf4Et9E9S",
      object: "task",
      task_priority: "low",
      status_id: "open",
      subject: "Hire Inventory Analyst",
      description:
        "Describe the role, required skills, and responsibilities of the Inventory Analyst.",
      due_date: "2024-04-29T10:00:04.470Z",
      created_at: "2024-04-29T10:00:04.462Z",
      updated_at: "2024-04-29T10:00:04.462Z",
    },
    {
      id: "task_2flo0k33LYINuDnPelML5YBizUY",
      object: "task",
      task_priority: "high",
      status_id: "open",
      subject: "Hire Branch Manager",
      description:
        "Describe the role, required skills, and responsibilities of the Branch Manager.",
      due_date: "2024-04-29T10:00:04.470Z",
      created_at: "2024-04-29T10:00:04.462Z",
      updated_at: "2024-04-29T10:00:04.462Z",
    },
    {
      id: "task_2flo0lMnpnyjtuce74X2DqrKDMP",
      object: "task",
      task_priority: "normal",
      status_id: "open",
      subject: "Hire Sales Coordinator",
      description:
        "Describe the role, required skills, and responsibilities of the Sales Coordinator.",
      due_date: "2024-04-29T10:00:04.470Z",
      created_at: "2024-04-29T10:00:04.462Z",
      updated_at: "2024-04-29T10:00:04.462Z",
    },
    {
      id: "task_2flo0pR7ynsnnN1hNOMYdoajRvf",
      object: "task",
      task_priority: "low",
      status_id: "open",
      subject: "Coaching Development Strategy",
      description:
        "Outline a plan to improve development coaching skills and techniques.",
      due_date: "2024-04-29T10:00:04.471Z",
      created_at: "2024-04-29T10:00:04.462Z",
      updated_at: "2024-04-29T10:00:04.462Z",
    },
    {
      id: "task_2flo0qZfyO04CP9iLVfF6bZ7kri",
      object: "task",
      task_priority: "high",
      status_id: "open",
      subject: "Coaching Marketing Strategy",
      description: "Plan how to coach on effective marketing strategies.",
      due_date: "2024-04-29T10:00:04.471Z",
      created_at: "2024-04-29T10:00:04.462Z",
      updated_at: "2024-04-29T10:00:04.462Z",
    },
    {
      id: "task_2flo0mc1UOGrBfKLbJ2FRJBzanv",
      object: "task",
      task_priority: "normal",
      status_id: "open",
      subject: "Coaching Social Marketing Strategy",
      description:
        "Develop a plan to coach on utilizing social media for marketing.",
      due_date: "2024-04-29T10:00:04.471Z",
      created_at: "2024-04-29T10:00:04.462Z",
      updated_at: "2024-04-29T10:00:04.462Z",
    },
    {
      id: "task_2flo0m4x88yjFylnj97YkXutYiQ",
      object: "task",
      task_priority: "high",
      status_id: "open",
      subject: "Place Online Advert",
      description: "Design and place an advertisement on online platforms.",
      due_date: "2024-04-29T10:00:04.472Z",
      created_at: "2024-04-29T10:00:04.462Z",
      updated_at: "2024-04-29T10:00:04.462Z",
    },
  ],
  page: 1,
  per_page: 10,
  total: 29,
};
const Home=()=> {
     const [tasklist, setTasklist] = useState<Task[]>([])
     const [loading, setLoading] = useState(true);

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
    priorityHigh,
    priorityNormal,
    priorityLow,
  } = useStyles();

  useEffect(() => {
    // Simulate fetching data from an API
    setTimeout(() => {
      setTasklist(data.data);
      setLoading(false);
    }, 1000); // Adjust the timeout as needed or replace with actual API call
  }, []);

  return (
    <div className={homeContainer}>
      {loading ? (
        <div className={loader}>
          <ColorRing
            visible={true}
            height="100"
            width="100"
            ariaLabel="color-ring-loading"
            wrapperStyle={{}}
            wrapperClass="color-ring-wrapper"
            colors={["#5626a3", "#363391", "#f8b26a", "#14c0c9", "#3565c4"]}
          />
        </div>
      ) : (
        <>
          <h1>Task Management App</h1>
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
                  <th className={headerCell}>Object</th>
                  <th className={headerCell}>Priority</th>
                  <th className={headerCell}>Status</th>
                  <th className={headerCell}>Subject</th>
                  <th className={headerCell}>Description</th>
                  <th className={headerCell}>Due date</th>
                  <th className={headerCell}>Created at</th>
                  <th className={headerCell}>Updated at</th>
                  <th className={headerCell}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {tasklist &&
                  tasklist.length > 0 &&
                  tasklist.map((task) => (
                    <tr key={task.id}>
                      <td className={tableRow}>{task.id.substring(0, 6)}</td>
                      <td className={tableRow}>{task.object}</td>
                      <td className={tableRow}>
                        {task.task_priority === "high" && (
                          <span className={priorityHigh}>
                            {task.task_priority}
                          </span>
                        )}
                        {task.task_priority === "normal" && (
                          <span className={priorityNormal}>
                            {task.task_priority}
                          </span>
                        )}
                        {task.task_priority === "low" && (
                          <span className={priorityLow}>
                            {task.task_priority}
                          </span>
                        )}
                      </td>
                      <td className={tableRow}>{task.status_id}</td>
                      <td className={tableRow}>{task.subject}</td>
                      <td className={tableRow}>{task.description}</td>
                      <td className={tableRow}>
                        <td className={tableRow}>
                          {moment(task.due_date).format(
                            "MMMM Do YYYY, h:mm:ss a"
                          )}
                        </td>
                      </td>
                      <td className={tableRow}>
                        {moment(task.created_at).format(
                          "MMMM Do YYYY, h:mm:ss a"
                        )}
                      </td>
                      <td className={tableRow}>
                        {moment(task.updated_at).format(
                          "MMMM Do YYYY, h:mm:ss a"
                        )}
                      </td>
                      <td className={tableRow}>
                        <div className={actionItems}>
                          <button
                            // onClick={() => navigateToUser(user)}
                            className={userListEdit}
                          >
                            <EditOutlined className={userListDelete} /> Read
                            more
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </Box>
          {/* Pagination */}
          {/* <ul className="pagination">
            {Array.from({ length: Math.ceil(data.total / tasksPerPage) }).map(
              (_, index) => (
                <li key={index} className="page-item">
                  <button
                    onClick={() => paginate(index + 1)}
                    className="page-link"
                  >
                    {index + 1}
                  </button>
                </li>
              )
            )}
          </ul> */}
        </>
      )}
    </div>
  );
}

export default Home;