class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        // backend 가 없기 때문에 setTimeout 으로 딜레이를 주면서 백앤드와
        // 통신하는 상황을 가정
        setTimeout(() => {
            if (
                (id === 'ellie' && password == '1234') ||
                (id === 'coder' && password == '5454')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 10);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'ellie') {
                onSuccess({ name: 'ellie', role: 'admin' });
            } else {
                onError(new Error('no access'));
            }
        })
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
    id,
    password,
    user => {
        userStorage.getRoles(
            user,
            userWithRole => {
                alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`)
            },
            error => {
                console.log(error);
            })
    },
    error => {
        console.log(error);
    }
);