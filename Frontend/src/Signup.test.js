const { shallow } = require('enzyme');
const { default: Signup } = require('./Signup');
describe("state check", () =>
{
    it('object check ', () => {
            let wrapper = shallow(<Signup/>)
            console.log(wrapper.debug())
            expect(wrapper.state()).toEqual({ username: "taxfgc ", password: " njkbh"});
     })

     it('find class length in module', () => {
        let wrapper = shallow(<Signup/>);
        expect(wrapper.find('.autoComplete').length).toBe(2);
     })

     it('find class length in module', () => {
        let wrapper = shallow(<Signup/>);
        expect(wrapper.find('.autoComplete').at(0).name()).toBe('username');
     })
})