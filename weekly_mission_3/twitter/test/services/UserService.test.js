const UserService = require("./../../app/services/UserService")

describe("Test for UserService", () => {
    test("1. Create a new user using the UserService", () => {
        const user = UserService.create(1, "fernandodelafuente", "fernando")
        expect(user.username).toBe("fernandodelafuente")
        expect(user.name).toBe("fernando")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    })
    test("2. Get all user data in a list", () => {
        const user = UserService.create(1,"fernandodelafuente", "fernando")
        const userInfoInList = UserService.getInfo(user)
        expect(userInfoInList[0]).toBe(1)
        expect(userInfoInList[1]).toBe("fernandodelafuente")
        expect(userInfoInList[2]).toBe("fernando")
        expect(userInfoInList[3]).toBe("Sin bio")
    })
    test("3. Update username", () => {
        const user = UserService.create(1, "fernandodelafuente", "fernando")
        UserService.updateUserUsername(user, "ferdelaf")
        expect(user.username).toBe("ferdelaf")
    })
    test("4. Given a list of users give me the list of usernames", () => {
        const user1 = UserService.create(1, "fernandodelafuente1", "fernando")
        const user2 = UserService.create(1, "fernandodelafuente2", "fernando")
        const user3 = UserService.create(1, "fernandodelafuente3", "fernando")
        const usernames = UserService.getAllUsernames([user1, user2, user3])
        expect(usernames).toContain("fernandodelafuente1")
        expect(usernames).toContain("fernandodelafuente2")
        expect(usernames).toContain("fernandodelafuente3")
    })
})