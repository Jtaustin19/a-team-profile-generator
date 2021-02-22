
const Engineer = require('../lib/Engineer');

test("Checks engineer's info", () => {
    const engineer = new Engineer('John Doe', 'Employee', '1', 'johnddoe@email.com', 'johndoebermann');

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.role).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(String));
    expect(engineer.email).toEqual(expect.any(String));
});

test("Checks engineer's github username", () => {
    const engineer = new Engineer('John Doe', 'Employee', '1', 'johnddoe@email.com', 'johndoebermann');

    expect(engineer.github).toEqual(expect.any(String));
    expect(engineer.github).toBe('johndoebermann');
});

test("Gets engineer's github username", () => {
    const engineer = new Engineer('John Doe', 'Employee', '1', 'johnddoe@email.com', 'johndoebermann');

    expect(engineer.getGithub()).toEqual({'github': engineer.github});
    expect(engineer.github).toEqual('johndoebermann');
});

test("Checks if role is overridden to 'Engineer'", () => {
    const engineer = new Engineer('John Doe', 'Employee', '1', 'johnddoe@email.com', 'johndoebermann');

    expect(engineer.getRole()).toEqual({'role': engineer.role});
    expect(engineer.role).toBe('Engineer');
});