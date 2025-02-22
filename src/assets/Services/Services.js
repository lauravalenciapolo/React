
const usuarios = [
    {
        id: 1,
        name: "LauraAdmin",
        email: "laura@hotmail.com",
        password: "123456",
        rol: "admin"
    },
    {
        id: 2,
        name: "LauraUser",
        email: "laura2@gmail.com",
        password: "1234",
        rol: "user"
    },
    {
        id: 3,
        name: "LauraUser2",
        email: "laura3@gmail.com",
        password: "1234",
        rol: "user"
    }
]

const LoadDataMock = [{id: 1, emailUser: "laura@laura", monto: 10000, state: "pending"}, 
    {id:2, emailUser: "laura2@laura", monto: 8000, state: "pending"}, 
    {id:3, emailUser: "laura3@laura", monto: 1000, state: "pending"}, 
    {id:4, emailUser: "laura4@laura", monto: 1000, state: "accept"},]

export const fetchLogin = (email, password) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = usuarios.find(e => e.email === email && e.password === password);
            if (user) {
                const token = btoa(`${user.id}:${user.email}`);
                resolve({ success: true, token, user });
            } else {
                reject({ success: false, message: "Usuario o contraseña incorrecta" });
            }
        }, 1000);
    });
};

export const fetchLoads = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const loads = LoadDataMock.filter(e => e.state == "pending")
            resolve({ success: true, data: loads });
        }, 1000);
    });
};



export default {fetchLogin, fetchLoads}