const UserController = require("./user-controller");
const User = require("./user");

let userController;
beforeEach(() => {
    userController = new UserController();
  });

test('add user to userController', () => {
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);
    expect(userController.getUsers()).toContain(user);
  });

test('verificar que no se añada el mismo usuario dos veces', () => {
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);
    expect(() => userController.add(user)).toThrow('El usuario ya existe');
  });

test('remove user to userController', () => {
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });

test('verificar que no se elimine un usuario si no existe', () => {
    let user = new User(1234,"Santiago", "santiago@generation.org");
    expect(() => userController.remove(user)).toThrow('El usuario no existe');
  });

test('Verificación de FindByEmail', () => {
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);

    expect(userController.findByEmail(user.email)).toBe(user);
  });

test('Verificación de FindByEmail para un usuario no existente', () => {
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);

    expect(userController.findByEmail(user.email+'.mx')).not.toBe(user);
  });

test('Verificación de FindById', () => {
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);

    expect(userController.findById(user.id)).toBe(user);
  });

test('Verificación de FindById de un usuario no existente', () => {
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);

    expect(userController.findById(user.id+1)).not.toBe(user);
  });
