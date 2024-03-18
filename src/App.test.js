import App from './App';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DrawerAddUser from './components/DrawerAddUser';
import TableData from './components/Table';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import ListUser from './components/ListUser';
test('renders container', () => {
  render(<App />);
  const container = screen.getByTestId('container');
  expect(container).toBeInTheDocument();
});

describe('DrawerAddUser Component', () => {
  const toggleDrawer = jest.fn();

  it('renders DrawerAddUser correctly', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <DrawerAddUser open={true} toggleDrawer={toggleDrawer} />
      </Provider>
    );
    expect(getByTestId('drawer-add')).toBeInTheDocument();
  });


  it('called submit', async () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <DrawerAddUser open={true} toggleDrawer={toggleDrawer} />
      </Provider>
    );
    fireEvent.submit(getByTestId('save'));
    expect(toggleDrawer).toHaveBeenCalledTimes(1);
  });
});


describe('TableData Component', () => {
  const columns = [
    { id: 'id', label: 'ID', minWidth: 100, align: 'center' },
    { id: 'name', label: 'Name', minWidth: 100, align: 'center' },
    { id: 'age', label: 'Age', minWidth: 100, align: 'center' }
  ];

  it('renders table with data correctly', () => {
    const rows = [
      { id: 1, name: 'John', age: 30 },
      { id: 2, name: 'Jane', age: 25 }
    ];

    const { getByText } = render(<TableData rows={rows} columns={columns} />);
    
    columns.forEach(column => {
      expect(getByText(column.label)).toBeInTheDocument();
    });

    rows.forEach(row => {
      expect(getByText(row.id.toString())).toBeInTheDocument();
      expect(getByText(row.name)).toBeInTheDocument();
      expect(getByText(row.age.toString())).toBeInTheDocument();
    });
  });

  it('renders empty data message correctly', () => {
    const rows = [];

    const { getByText, getByRole } = render(<TableData rows={rows} columns={columns} />);

    expect(getByText('Oops !!! Data is empty')).toBeInTheDocument();
  });
});

describe('ListUser Component', () => {
  const mockEditUser = jest.fn();

  it('renders ListUser correctly', () => {
    const { getByText } = render(
      <Provider store={store}>
        <ListUser editUser={mockEditUser} />
      </Provider>
    );

    expect(getByText('List Users')).toBeInTheDocument();
  });

  it('calls editUser function when edit button is clicked', () => {
    const { getAllByTestId } = render(
      <Provider store={store}>
        <ListUser editUser={mockEditUser} />
      </Provider>
    );

    const editButtons = getAllByTestId('edit-button');

    fireEvent.click(editButtons[0]);

    expect(mockEditUser).toHaveBeenCalledTimes(1);
  });

});