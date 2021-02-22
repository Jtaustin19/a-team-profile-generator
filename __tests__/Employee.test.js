const Employee = require('../lib/Employee');

test("Checks employee's info", () => {
    const employee = new Employee('Employee', 'John Doe', '1', 'johndoe@email.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.role).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));
});

test("Gets employee's name", () => {
    const employee = new Employee('Employee', 'John Doe', '1', 'johndoe@email.com');

    expect(employee.getName()).toHaveProperty('name');
    expect(employee.name).toBe('John Doe');
});

test("Gets employee's ID", () => {
    const employee = new Employee('Employee', 'John Doe', '1', 'johndoe@email.com');

    expect(employee.getId()).toHaveProperty('id');
    expect(employee.id).toBe('1');
});

test("Gets employee's email", () => {
    const employee = new Employee('Employee', 'John Doe', '1', 'johndoe@email.com');

    expect(employee.getEmail()).toHaveProperty('email');
    expect(employee.email).toBe('johndoe@email.com');
});

test("Gets employee's role", () => {
    const employee = new Employee('Employee', 'John Doe', '1', 'johndoe@email.com');

    expect(employee.getRole()).toHaveProperty('role');
    expect(employee.role).toBe('Employee');
});