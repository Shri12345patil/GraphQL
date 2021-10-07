import React from 'react';
import { render} from '@testing-library/react';
import StudentList from '../StudentList';
import { useQuery } from "@apollo/client";
import { useLocation}  from 'react-router-dom';


jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useLocation: () => ({
      pathname: "/Userdetail"
    })
  }));
  jest.mock("@apollo/client");

 describe("StudentList", () => {
   test('renders learn react link', () => {
    useQuery.mockReturnValue({
        data: null,
        loading: true,
        error: null,
    });
    const{ debug } = render(
        <StudentList/>
    );
    debug();
  });

  test('renders learn react link', () => {});

// test('it renders', () => {
//     render(<StudentList />);
//     expect(screen.getByText('Edit')).toBeInTheDocument();
//   });
});
