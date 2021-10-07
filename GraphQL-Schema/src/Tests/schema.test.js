describe("test cases for resolver", () =>
{
    it("renders user data", async () => {
        const fakeUser = {
          name: "Joni Baez",
          age: "32",
          address: "123, Charming Avenue"
        };
        // console.log(fakeUser)
        jest.spyOn(global, "fetch").mockImplementation(() =>
          Promise.resolve({
            json: () => Promise.resolve(fakeUser)
          })
        );
    })
})