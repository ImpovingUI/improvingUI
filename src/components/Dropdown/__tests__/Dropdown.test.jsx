//import { create } from "react-test-renderer"; 
import { render } from "@testing-library/react";
import  {Dropdown}  from "../Dropdown"; 

/*describe('Dropdown', () => {
    it('render dropdown correctly', () => {
        const component = create( <Dropdown /> );
        expect(component).toBeDefined();  
    });
    it('Dropdown with bar', () => {
        const component = create(<Dropdown/>);
        expect(component.root.findByType('div'));
    })
    it('Dropdown with props default', () => {
        const props = {
            image : 'https://via.placeholder.com/150',
            title : 'Dropdown',
            items : [
                {
                    title : 'Item 1',
                    onClick : () => {
                        console.log('Item 1');
                    }
                },
                {
                    title : 'Item 2',
                    onClick : () => {
                        console.log('Item 2');
                    }
                }
            ]
        } 
        const component = create(<Dropdown {...props} />);
        expect(component.root.findByType('div'));
        expect(component.root.findByType('img')); 
        expect(component.root.findByType('ul')); 
    }) 
})  */

describe("Check all nodes into the component", () => {
    it("",  () => { 
    const component = render(<Dropdown />); 
    component.getByTestId('dropdown'); 
    }); 
    it("",  () => { 
    const component = render(<Dropdown />); 
    component.getByTestId('dropdown'); 
    }); 
    it("",  () => { 
    const component = render(<Dropdown />); 
    component.getByTestId('dropdownItem'); 
    }); 
    it("",  () => { 
    const component = render(<Dropdown />); 
    component.getByTestId('imgBox'); 
    }); 
    it("",  () => { 
    const component = render(<Dropdown />); 
    component.getByTestId('dropdownContent'); 
    }); 
    it("",  () => { 
    const component = render(<Dropdown />); 
    component.getByTestId('content'); 
    }); 
    it("",  () => { 
    const component = render(<Dropdown />); 
    component.getByTestId('content'); 
    }); 
    it("",  () => { 
    const component = render(<Dropdown />); 
    component.getByTestId('links'); 
    });  
}); 