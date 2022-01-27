import React from "react";
import {create} from "react-test-renderer";
import ProfileSatus from "./ProfileStatus";

describe("Profile status component", () =>{
    test("status from props should be in the state", () =>{
        const component = create(<ProfileSatus status={"Vzgo"} />);
        const instancce = component.getInstance();
        expect(instancce.state.status).toBe("Vzgo")


    })

    test("after creation span shold be displayed ",() =>{
        const component = create(<ProfileSatus status={"Vzgo"} />);
        const root = component.root
        let span = root.findByType("span")

        expect(span.length ).not.toBeNull()

    })

    test("after creation input shold'nt be displayed ",() =>{
        const component = create(<ProfileSatus status={"Vzgo"} />);
        const root = component.root
        

        expect(()=>{
            let input = root.findByType("input")

        }).toThrow()

    })

    test("after creation span shold be displayed with correct status",() =>{
        const component = create(<ProfileSatus status={"Vzgo"} />);
        const root = component.root
        let span = root.findByType("span")

        expect(span.length ).not.toBeNull()

    })

    test("after creation span shold be displayed with correct status",() =>{
        const component = create(<ProfileSatus status={"Vzgo"} />);
        const root = component.root
        let span = root.findByType("span")

        expect(span.children[0] ).toBe("Vzgo")

    })

    test("input should be displayed to edit mode instead of span",() =>{
        const component = create(<ProfileSatus status={"Vzgo"} />);
        const root = component.root
        let span = root.findByType("span");
        span.props.onDoubleClick()
        let input = root.findByType("input")

        expect(input.props.value ).toBe("Vzgo")

    })

    test("callback should be called",() =>{
        let mockCallback = jest.fn();
        const component = create(<ProfileSatus status={"Vzgo"} updateStatus={mockCallback} />);
        const instance = component.getInstance();
        
        instance.disActivateEditMode();

        expect(mockCallback.mock.calls.length ).toBe(1)

    })

    


})

