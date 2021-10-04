// import Header from "../Header";

// it('should render dog', async () => {
//     const dogMock = {
//       request: {
//         query: GET_DOG_QUERY,
//         variables: { name: 'Buck' },
//       },
//       result: {
//         data: { dog: { id: 1, name: 'Buck', breed: 'poodle' } },
//       },
//     };
  
//     const component = renderer.create(
//       <MockedProvider mocks={[dogMock]} addTypename={false}>
//         <Header />
//       </MockedProvider>,
//     );
  
//     await wait(0); // wait for response
  
//     const p = component.root.findByType('p');
//     expect(p.children).toContain('Buck is a poodle');
//   });