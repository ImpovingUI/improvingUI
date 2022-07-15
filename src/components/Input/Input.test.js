import React from 'react';
import {Input} from './Input';
import {render, fireEvent, screen, waitFor} from '@testing-library/react';
import '@testing-library/jest-dom';


/* Testing the component Input. */
describe('Component Input test', () => {
/* Creating a new instance of the component Input and getting the element with the role textbox. */
    render(<Input isRequired='required'/>);
    const element = screen.getByRole('textbox');

/* Testing if the element is in the document. */
    it('must be a Input', () => {
         expect(element).toBeTruthy();
         expect(element).toBeInTheDocument();
    });

/* Testing the onChange event. */
    it('Test on Change event', () => {
         fireEvent.change(element,{target:{value: 'test'}});
         expect(element.value).toBe('test');
    });

    it('Test is required', async()=>{
        /*fireEvent.change(element,{target:{value: 'hola'}});
        fireEvent.blur(element);*/

        const helper = screen.getByRole('heading', {aria});
        expect(helper).toBeTruthy();

        /*const helper = screen.getByText('');
        expect(helper).toBeTruthy();

        console.log(helper);

        await waitFor(()=>{
            expect(helper.textContent).toBe('Field required')
        });*/
    })
});