import React from 'react';
import { render} from '@testing-library/react';
import Signup from '../Signup';
import { useMutation } from '@apollo/client';
 jest.mock("@apollo/client");


    describe("StudentList", () => {
    test('renders learn react link', () => { });

    test('renders learn react link', () => {
        console.log("usemutation");
        useMutation.mockReturnValue([0]);
            const{ debug } = render(
                <Signup/>
            );
            debug();
        });
        
    });
