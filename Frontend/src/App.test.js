const { shallow } = require('enzyme');
describe("test cases for resolver", () =>
{
    it('object check ', () => {
            let wrapper = shallow(<App/>)
            console.log(wrapper.debug())
            expect(wrapper.exists('.App')).toEqual(true);
     })

     it('html message check ', () => {
      let wrapper = shallow(<App/>)
      console.log(wrapper.debug())
      expect(wrapper.contains(<h2 className="h2">Login and Signup page (Flask + React.js)</h2>)).toEqual(true);
      })

      it('only message check without class', () => {
        let wrapper = shallow(<App/>)
        console.log(wrapper.debug())
        expect(wrapper.containsAllMatchingElements([<h2>Login and Signup page (Flask + React.js)</h2>])).toEqual(true);
        })

        it('any message check without class', () => {
          let wrapper = shallow(<App/>)
          console.log(wrapper.debug())
          expect(wrapper.containsAllMatchingElements([<h2>Login and Signup page (Flask + React.js)</h2>],
          [<h2>Login and Signup page (Flask + React.js)</h2>])).toEqual(true);
          })

          it('child check', () => {
            let wrapper = shallow(<App/>);
            expect(wrapper.find('.modal').childAt(0).type()).toBe('button');
            })

            it('child length check', () => {
              let wrapper = shallow(<App/>);
              expect(wrapper.find('.ButtonGroup').children().length).toBe(2);
              })

              // it('hashclass check', () => {
              //   let wrapper = shallow(<App/>);
              //   expect(wrapper.find('.ButtonGroup').hasClass('disable')).toBe('true');
              //   })

              it('hashclass check', () => {
                  let wrapper = shallow(<App/>);
                  expect(wrapper.is('.App')).toBe('true');
                  })
})