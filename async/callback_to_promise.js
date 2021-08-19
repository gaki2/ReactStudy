class UserStorage {
    loginUser(id, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (
                    (id === 'ellie' && password == '1234') ||
                    (id === 'coder' && password == '5454')
                ) {
                    resolve(id);
                } else {
                    reject(new Error('Wrong info'));
                }
            }, 5000);
        })
    }

    getRoles(user) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (user === 'ellie') {
                    resolve({ name: 'ellie', role: 'admin' });
                } else {
                    reject(new Error('no access'));
                }
            },1000)
        })
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(id, password)
.then((user) => userStorage.getRoles(user))
.then((msg) => console.log(`Hello ${msg.name}, you have a ${msg.role} role`))
.catch((error) => console.log(error))