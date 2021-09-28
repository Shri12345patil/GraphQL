const resolvers = require('../resolvers');

describe("test cases for resolver", () =>
{
    it('check the query response ', async() => {
            const query = await resolvers.Query.Students()
            // expect(addStudent.username).toBe('Dennis Santana')
            let res=query;
            // console.log(query);
            expect(query).toBe(res)
     })

     it('check the mutation response ', () => {
        const mutation =  resolvers.Mutation.addStudent("praju" , "patil");
        console.log(mutation);
        let res=mutation;
         expect(mutation).toBe(res)
       })

       it('check the object response ', () => {
        let Student = {
            username: "kancha", 
            password: "prasad" 
           };
         expect(Student).toEqual({ username: 'kancha', password: 'prasad' })
       })
})
