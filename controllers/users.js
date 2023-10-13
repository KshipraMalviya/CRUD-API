import { v4 as uuid } from 'uuid';

let users = [];

export const getUsers = (req, res) => {
    console.log(`Users in the database: ${users}`);

    res.send(users);
}

export const createUser = (req, res) => {   
    const user = req.body;

    console.log(user);

    users.push({...user, id: uuid()});

    console.log(users);
    
    console.log(`User ${user.firstName} added to the database.`);

    res.send(`User ${user.firstName} added to the database.`);
};

export const getUser = (req, res) => {
    const id = req.params.id;

    const foundUser = users.find((user) => user.id === id);

    res.send(foundUser);
};

export const deleteUser = (req, res) => { 
    const id = req.params.id;

    users = users.filter((user) => user.id !== id);

    console.log(`user with id ${req.params.id} has been deleted`);

    res.send(`user with id ${req.params.id} has been deleted`);
};

export const updateUser =  (req,res) => {
    const id = req.params.id;

    const { firstName, lastName, age } = req.body;

    const user = users.find((user) => user.id === id);
    
    if(firstName) user.firstName = firstName;
    if(lastName) user.lastName = lastName;
    if(age) user.age = age;

    res.send(`User with the id ${id} has been updated`)
};