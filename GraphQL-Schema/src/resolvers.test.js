import { shallow } from "enzyme"
import { execute } from "graphql"
import React from "react"
import resolvers from "./resolvers"

describe("Test cases foe resolvers", () => {
    test('should ', () => {
        const component = shallow(<resolvers/>)
        console.log(component.debug())
        // const data = component.find("Students").exists()
        // expect(data).toBe(true)
        expect(component).toMatchSnapshot()
    })
    
} )


