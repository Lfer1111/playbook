const User = require("./../../app/models/user")

describe("Unit tests for user class", () => {
    test("1. Create an user object", () => {
        const user = new User(1, "fernando", "fernando de lafuente", "dev")
        
        expect(user.id).toBe(1)
        expect(user.username).toBe("fernando")
        expect(user.name).toBe("fernando de lafuente")
        expect(user.bio).toBe("dev")
        expect(user.dateCreated).not.toBeUndefined()
        expect(user.lastUpdated).not.toBeUndefined()
    })

    test("Add getters", () => {
        const user = new User(1, "fernando", "fernando de lafuente", "dev")
        expect(user.getUsername).toBe("fernando")
        expect(user.getBio).toBe("dev")
        expect(user.getDateCreated).not.toBeUndefined()
        expect(user.getLastUpdated).not.toBeUndefined()
    })

    test("Add setters", () => {
        const user = new User(1, "fernando", "fernando de lafuente", "dev")
        user.setUsername = "fernando"
        expect(user.username).toBe("fernando")

        user.setBio = "New bio"
        expect(user.bio).toBe("New bio")
    })
})