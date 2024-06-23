## Recipes Express Application

## Overview

The Recipes Express application is a simple API that serves recipe data from a JSON file. It is built using Node.js and Express.js and follows a modular architecture, separating concerns into different layers such as services, controllers, and routers.

## Application Structure

The application is structured into the following parts:

## Service Layer

Handles the logic for fetching recipe data from a JSON file.

## Controller Layer

Manages HTTP requests and responses, interacting with the service layer to get data.

## Router Layer

Defines the API routes and maps them to the appropriate controller functions.

## Main Application File

Sets up the Express server, middleware, and integrates all parts together.

## File Structure

```

/recipes-express

│

├── /controllers

│   └── recipes.js

├── /db

│   └── recipes.json

├── /routers

│   └── recipes.js

├── /services

│   └── recipes.js

├── app.js

├── package.json

└── README.md

```

## How It Works

## Service Layer (`services/recipes.js`)

Reads the recipes data from a JSON file located in the `db` directory.

## Controller Layer (`controllers/recipes.js`)

Contains the `getAll` function that fetches all recipes using the service layer and sends them as a JSON response.

## Router Layer (`routers/recipes.js`)

Sets up the route `/api/v1/recipes` and maps it to the `getAll` controller function.

## Main Application (`app.js`)

Configures the Express server, middleware, and routes.

## How to Run the Application

## Prerequisites

- Node.js installed on your machine.

## Steps to Run

## Clone the Repository

```bash

git clone https://github.com/your-username/recipes-express.git

cd recipes-express

```

## Install Dependencies

```bash

npm install

```

## Run the Server

```bash

node app.js

```

## Access the API

Open your browser or use a tool like curl or Postman to visit `http://localhost:8081/api/v1/recipes`.

## Example Request

To fetch all recipes, send a GET request to:

```bash

http://localhost:8081/api/v1/recipes

```

## Expected Response

```json

{

  "data": [

    {

      "id": 1,

      "name": "Chicken Vesuvio",

      "healthLabels": ["Sugar-Conscious", "Peanut-Free", "Tree-Nut-Free"],

      "cookTimeMinutes": 60,

      "prepTimeMinutes": 10,

      "ingredients": [

        "1/2 cup olive oil",

        "5 cloves garlic, peeled",

        "2 large russet potatoes, peeled and cut into chunks",

        "1 3-4 pound chicken, cut into 8 pieces (or 3 pound chicken legs)",

        "3/4 cup white wine",

        "3/4 cup chicken stock",

        "3 tablespoons chopped parsley",

        "1 tablespoon dried oregano",

        "Salt and pepper",

        "1 cup frozen peas, thawed"

      ]

    }

    // ... more recipes

  ]

}

```

## Additional Information

- The application logs incoming requests to the console with the request method, path, and timestamp.

- You can modify the `db/recipes.json` file to add, remove, or update the recipes data.

- Feel free to contribute to this project by submitting pull requests or opening issues for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.
