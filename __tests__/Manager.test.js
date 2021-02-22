const { test } = require('@jest/globals');
const Manager = require('../lib/Manager');

test("Checks manager's info", () => {
    const manager = new Manager('Employee', 'John Doe', '1', 'johndoe@email.com', '1830');

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.role).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(String));
    expect(manager.email).toEqual(expect.any(String));
});

test("Checks manager's office number", () => {
    const manager = new Manager('Employee', 'John Doe', '1', 'johndoe@email.com', '1830');

    expect(manager.office).toEqual(expect.any(String));
    expect(manager.office).toBe('1830')
});

test("Checks if role is overridden to 'Manager'", () => {
    const manager = new Manager('Employee', 'John Doe', '1', 'johndoe@email.com', '1830');

    expect(manager.getRole()).toEqual({'role': manager.role});
    expect(manager.role).toBe('Manager');
});