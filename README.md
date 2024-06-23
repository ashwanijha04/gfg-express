## Recipes Express Application - Comprehensive Guide

## Overview

The Recipes Express application is a web API that allows users to fetch and manage recipes stored in a JSON file. It utilizes Node.js and Express.js, implementing a layered architecture with a focus on service, controller, and router layers. The application also incorporates authentication using JSON Web Tokens (JWT) and Passport.js to secure API endpoints.

## Application Structure

### Service Layer

Handles business logic and data manipulation, primarily focusing on reading and writing to the `recipes.json` file.

### Controller Layer

Processes incoming requests, utilizes services to retrieve data or perform actions, and sends responses to the client.

### Router Layer

Defines URL routes and associates them with specific controller functions.

### Main Application File

Initializes and configures the Express server, sets up middleware, and ties together routers.

## File Structure

```

/recipes-express

│

├── /controllers

│   ├── recipes.js

│   └── users.js

├── /services

│   ├── recipes.js

│   └── users.js

├── /routers

│   ├── recipes.js

│   └── users.js

├── /middleware

│   ├── auth.js

├── /db

│   ├── recipes.json

│   ├── users.json

├── index.js

├── package.json

└── README.md

```

## How It Works

### Service Layer

- `services/recipes.js`: Interacts directly with `db/recipes.json` to fetch, add, or modify recipes.

- `services/users.js`: Manages user data and handles authentication-related functionalities.

### Controller Layer

- `controllers/recipes.js`: Contains functions like `getAllRecipes`, `getRecipeById`, etc.

- `controllers/users.js`: Handles user authentication, login, and registration processes.

### Router Layer

- `routers/recipes.js`: Routes like `/api/v1/recipes` are defined here.

- `routers/users.js`: Defines authentication routes such as `/api/v1/login` and `/api/v1/register`.

### Authentication with JWT and Passport

- **User Registration and Login**: Users can register and log in through the `/register` and `/login` endpoints. Upon successful login, a JWT is generated.

- **JWT Generation**: Using Passport's `jwt` strategy, a token is created and signed with a secret key.

- **Middleware Authentication**: The `auth.js` middleware uses Passport to verify the JWT from the `Authorization` header in each request to protected routes.

- **Protected Routes**: Routes that require authentication are secured by the `auth.js` middleware, ensuring that only requests with a valid JWT can access them.

## Setup and Installation

### Prerequisites

- Install Node.js and npm on your machine.

### Steps to Run

#### 1. Clone the Repository

```bash

git clone https://github.com/your-username/recipes-express.git

cd recipes-express

```

#### 2. Install Dependencies

```bash

npm install

```

#### 3. Run the Server

```bash

node index.js

```

## Accessing the API

After starting the server, you can use a browser or tools like curl or Postman to interact with the API.

### Example Request: Get All Recipes

```bash

curl http://localhost:8081/api/v1/recipes

```

### Example Request: User Login

```bash

curl -X POST -H "Content-Type: application/json" -d '{"username": "test", "password": "test"}' http://localhost:8081/api/v1/login

```

## Additional Features

- **Logging**: Each API request is logged with details like method, path, and timestamp for debugging.

- **Modifying Data**: The JSON files in the `db` directory can be updated directly to add or change recipes and users.

## Contributing

Contributions are welcome! You can contribute by submitting pull requests with enhancements or fixes.

## License

This project is licensed under the MIT License, which allows for reuse with minimal restrictions.

By following these guidelines, even a beginner can understand how the Recipes Express application functions, set it up, and start interacting with its APIs.
