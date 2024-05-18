
import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from '../pages/Home';
import { upDateTaskList } from '../redux/reducer';
import { Task } from '../interfaces';
const configureMockStore = require('redux-mock-store');
const thunk = require('redux-thunk');
const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');

const mockStore = configureMockStore([thunk]);

const initialStoreState = {
  dataState: {
    data: [],
  },
};

const mockTasks: Task[] = [
  { id: '1', subject: 'Task 1', status_id: 'open', task_priority: 'High', due_date: '2024-06-15T12:00:00Z' },
  { id: '2', subject: 'Task 2', status_id: 'in_progress', task_priority: 'Medium', due_date: '2024-06-16T12:00:00Z' },
];

describe('Home Component', () => {
  let mock: MockAdapter;

  beforeAll(() => {
    mock = new MockAdapter(axios);
  });

  beforeEach(() => {
    mock.reset();
    mock.onGet('https://task.quatrixglobal.com/tasks').reply(200, { data: mockTasks });
  });

  const renderComponent = (storeState = initialStoreState) => {
    const store = mockStore(storeState);
    return render(
      <Provider store={store}>
        <Router>
          <Home />
        </Router>
      </Provider>
    );
  };

  test('renders loading spinner initially', async () => {
    renderComponent();
    expect(screen.getByLabelText('color-ring-loading')).toBeInTheDocument();
  });

  test('fetches and displays tasks', async () => {
    renderComponent();
    await waitFor(() => expect(screen.getByText('Task 1')).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText('Task 2')).toBeInTheDocument());
  });

  test('renders create button and navigates on click', async () => {
    renderComponent();
    const createButton = screen.getByText('Create New');
    expect(createButton).toBeInTheDocument();
    fireEvent.click(createButton);
    // Assuming the navigation mock is set up, you should verify it navigated to the correct route.
  });

  test('handles delete confirmation dialog', async () => {
    renderComponent();
    await waitFor(() => expect(screen.getByText('Task 1')).toBeInTheDocument());
    const deleteButton = screen.getAllByText('Delete')[0];
    fireEvent.click(deleteButton);
    await waitFor(() => expect(screen.getByText('Delete Task?')).toBeInTheDocument());
    const confirmButton = screen.getByText('Confirm');
    fireEvent.click(confirmButton);
    await waitFor(() => expect(screen.queryByText('Task 1')).not.toBeInTheDocument());
  });

  // test('handles task status actions', async () => {
  //   renderComponent();
  //   await waitFor(() => expect(screen.getByText('Task 1')).toBeInTheDocument());
  //   const startProgressButton = screen.getByText('Start Progress');
  //   fireEvent.click(startProgressButton);
  //   // Assuming the action correctly updates the state, you should verify it.
  // });
});
