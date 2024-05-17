# Task Management Application

This repository contains my solution to the Quatrix Frontend Interview Challenge, featuring a task management application built with React Typescript and using a provided Task API.

## Technology Stack

- **React**: Client-side rendered React for web apps.
- **Typescript**: For type checking
- **Material UI**: third part library.

# Project Setup

Follow these steps to set up and run the project locally on your machine:

### Prerequisites

Node.js and npm installed on your machine ([Download Node.js](https://nodejs.org/))

### Installation

Clone the repository to your local machine and install the dependencies using npm:

```bash
git clone https://github.com/mavine4512/taskManagementWebTs.git
cd taskManagementWebTs
npm install
```

## Features

- Create new tasks by filling out a form with subject, priority, description, and optional due date.
- View existing tasks with details such as subject, priority, description, and due date.
- Update existing tasks by editing subject, priority, description, and due date.
- Delete tasks with a confirmation step to prevent accidental deletions.
- Pagination controls are available to navigate through multiple pages of tasks.

## Folder Structure

```plaintext
├── tsconfig.json
├── .gitignore
├── README.md
├── index.html
├── package-lock.json
├── package.json
├── public/
│   ├── index.html
│   ├── favicon.ico
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── App.tsx
│   ├── App.css
│   ├── App.test.tsx
│   ├── index.tsx
│   ├── index.css
│   ├── react-app-env.d.ts
│   ├── reportWebVitals.ts
│   ├── setupTexts.ts
│   ├── component/
│   │    └── toastr.tsx
│   ├── constants/
│   │   └── theme.js
│   ├── interfaces/
│   │   └── index.tsx
│   ├── pages/
│   │   ├── CreateTask/
│   │   ├── └── index.tsx
│   │   ├── EditTask/
│   │   ├── └── index.tsx
│   │   ├── Home/
│   │   ├── ├── index.tsx
│   │   ├── └── styles.tsx
│   │   ├── NotFound/
│   │   ├── └──  index.tsx
│   │   └── main.tsx
│   ├── redux/
│   │   ├── reducer.js
│   │   └── store.tsx
│   ├── services/
│   │   ├── ApiService.tsx
│   │   └── taskService
└── tsconfig.json
```

- `src/`: Contains all the source code for the React application.
  - `components/`: Contains React components used to build the application.
  - `services/`: Contains functions to interact with the Task API.
- `tests/`: Contains unit tests.
- `package.json`: Defines project dependencies and scripts.
- `README.md`: Documentation for the project.

## Author

- [Mavine Naaman](https://github.com/mavine4512)
  
- /Users/mavinenaaman/Documents/taskmanagementwebts/src/appImages/changeStatus.png
- /Users/mavinenaaman/Documents/taskmanagementwebts/src/appImages/editTask.png
- /Users/mavinenaaman/Documents/taskmanagementwebts/src/appImages/listAllTask.png
- /Users/mavinenaaman/Documents/taskmanagementwebts/src/appImages/update.png

