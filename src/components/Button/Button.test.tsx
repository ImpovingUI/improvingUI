//Import the library
//This library already installed in the project with create-react-app
import { screen, render } from '@testing-library/react'

// This library has been installed with: 
//                  npm i enzyme
//                  npm i enzyme-adapter-react-16
import { shallow, configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import '@testing-library/jest-dom'


//Import component for testing
import Button from './Button';

configure({adapter: new Adapter()});
//Render component before each test
beforeEach(() => render(<Button label="Hola" />));

//Description of the test and tests in the callback
describe('Component Button test', () => {

     /* Testing the component must be indicated item in the section "it"  */
     it('must be a button', () => {
          expect( screen.getByRole('button') ).toBeInTheDocument();
     });

     /* Testing that the text content of the button is not empty */
     it('must have a value', () => {
          expect( screen.getByRole('button').textContent ).not.toBe('');
     })

     // Simulate a event
     it('Test click event', () => { 
          const mockCallBack = jest.fn(); 
          const button = shallow((<Button label="Hola" onClick={mockCallBack}>Ok!</Button>)); 
          button.find('button').simulate('click'); 
          expect(mockCallBack.mock.calls.length).toEqual(1); 
     });
});