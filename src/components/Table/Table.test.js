import { render, screen } from '@testing-library/react';
import { Table } from './'
const ejemplo = require('./Ejemplo.json');

describe('General table tests', () => {


  // test('Component is rendered', () => {
  //   render(<Table
  //     listColumns={["Name"]}
  //     listRows={[
  //       { Name: "Adrian" },
  //       { Name: "Garcia" },
  //       { Name: "Saaib" }
  //     ]}
  //   />)
  //   const component = screen.getByRole('data')
  //   component
  //   expect(component.container).toBeDefined(1)
  // });

  xtest('Component', () => {
    render(<Table
      listColumns={["Name", "Last Name", "City", "State", "Phone"]}
      listRows={ejemplo.datos}
    />)

    const tableHead = screen.queryAllByRole('row')
    expect(tableHead).toHaveLength(15)
  });

  xtest('Tabla exists', () => {
    const props = {
      listColumns: ["Name", "Last Name", "City", "State", "Phone"],
      listRows: ejemplo.datos,
      filter: true,
      pagination: true,
      listIndex: [3, 4, 5],
      actions: <div>Hola</div>,
      minInput: 1,
    }
    const component = render(<Table {...props} />)

    expect(component.container).toMatchSnapshot()
  });

  xtest('Tabla exists role', () => {
    const props = {
      listColumns: ["Name", "Last Name", "City", "State", "Phone"],
      listRows: ejemplo.datos,
    }
    render(<Table {...props} />)
    expect(screen.getByRole('data')).toBeTruthy()
  });
})
