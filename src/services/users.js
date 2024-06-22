require("dotenv").config();
const bcrypt = require("bcrypt");
const fs = require("fs").promises;
const jwt = require("jsonwebtoken");
const path = require("path");

const { JWT_SECRET } = process.env;
const usersFilePath = path.join(__dirname, "../db/users.json");

const authenticate = async ({ id, email, password }) => {
  const user = await find({ email });
  
  const isPasswordValid = await bcrypt.compare(password, user.password);

  const token = jwt.sign({ id: user.id }, JWT_SECRET, {
    expiresIn: 24 * 60 * 60, 
  });

  return { token };
};

const create = async ({ email, name, password }) => {
  const users = JSON.parse(await fs.readFile(usersFilePath));

  const newUser = {
    id: users.length + 1, 
    email,
    name,
    
    password: await bcrypt.hash(password, 10),
  };

  const token = jwt.sign({ id: newUser.id }, JWT_SECRET, {
    expiresIn: 24 * 60 * 60, 
  });

  users.push(newUser);

  await fs.writeFile(usersFilePath, JSON.stringify(users));

  return { token };
};

const find = async ({ id, email }) => {
  const users = JSON.parse(await fs.readFile(usersFilePath, 'utf8'));
  return users.find((user) => user.id === parseInt(id) || user.email === email);
};


module.exports = {
  authenticate,
  create,
  find,
};

/**
Line 10: Authenticate the user and return an authorization token for the user. Use this function to authenticate a user who’s logging in.
Line 13: Hash the user’s password to compare the result with the hash, and save it in the database to see if the password is correct.
Line 15: Call jwt.sign(), which returns an authentication token. The first argument is an object that contains the data to be embedded in the token. We can pass in a unique identifier for the user, such as the user’s ID stored in the database. The second argument is a string, which could be any random series of characters used to sign the token to ensure the token hasn’t been tampered with when it’s sent back to the server later on. The third argument is a configuration object for the token.
Line 22: Save the new user to the database and return an authorization token for the user.
Line 30: Here, pass the user’s password to the bcrypt.hash() function to create a hash, which is stored in the database instead of the user’s original password. Hashing is a one-way operation, so the hash can’t be reversed to its original form. The first argument is the password to be encrypted. The second argument is the number of salt rounds. The higher the number of salt rounds used, the stronger the resulting hashed password becomes.
Line 33: Generate the JWT with jwt.sign. The return value is the authentication token.
Line 34: Expire tokens after a certain amount of time so users can’t stay logged in forever.
Line 39: Save the new user to the database.
 * **/






























