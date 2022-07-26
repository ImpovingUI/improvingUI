//Import the library
//This library already installed in the project with create-react-app
import { screen, render } from '@testing-library/react'

// This library has been installed with: 
import '@testing-library/jest-dom'

import userEvent from '@testing-library/user-event';

//Import component for testing
import { Table } from './Table';

//Import list of Employees
const ejemplo = require('./Ejemplo.json');

//Description of the test and tests in the callback
describe('Component Table test', () => {
    
    it('Must be a table', () => {
        render(<Table
            listColumns={["Name","Last Name","City","State","Phone"]}
            listRows={ejemplo.datos}
        />);
        expect(screen.getByRole('table')).toBeInTheDocument();
    })

    it('Must be a list of rows', () => {
        const {rerender} = render(
            <Table
                listColumns={["Name","Last Name","City","State","Phone"]}
                listRows={ejemplo.datos}
            />
        );
        const tableBody = screen.getByTestId('tBody');
        expect(tableBody.children.length).toEqual(ejemplo.datos.length);
        

        rerender(<Table
            listColumns={["Name","Last Name","City","State","Phone"]}
            listRows={[]}
        />)

        expect(tableBody.children.length).toEqual(1);
    })

    it('Must be a list of columns', () => {
        render(<Table
            listColumns={["Name","Last Name","City","State","Phone"]}
            listRows={ejemplo.datos}
        />);

        const tableHeader = screen.getByTestId('tHeader');
        expect(tableHeader).toBeInTheDocument();
        expect(tableHeader.children.length).toEqual(5);
    })

})

describe('Component Table test Warnings', () => {
    let consoleOutput = []
    const mockedWarn = output => consoleOutput.push(output)
    beforeEach(() => (console.warn = mockedWarn))

    it('There no warnings', () => {
        const { container } = render(<Table
            listColumns={["Name","Last Name","City","State","Phone"]}
            listRows={ejemplo.datos}
            filter={true}
        />)
        expect(consoleOutput).toEqual([]);
        expect(screen.getByRole('textbox')).toBeInTheDocument();

        userEvent.type(screen.getByRole('textbox'),'Ma');

        const tableBody = screen.getByTestId('tBody');
        expect(tableBody.children.length).toEqual(7);

        expect(consoleOutput).toEqual([]);
        expect(screen.getByRole('textbox')).toBeInTheDocument();
    })

})
