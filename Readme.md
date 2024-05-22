Claro, aquí tienes el archivo `README.md` completamente en Markdown con los detalles adicionales para las rutas:

````markdown
# Project 8 Rock the Code

## Technologies Used

- **Node.js**
- **Express.js**
- **MongoDB**

## Dependencies

```json
"dependencies": {
  "cloudinary": "^1.41.3",
  "dotenv": "^16.4.5",
  "express": "^4.19.2",
  "mongodb": "^6.6.2",
  "mongoose": "^8.4.0",
  "multer": "^1.4.5-lts.1",
  "multer-storage-cloudinary": "^4.0.0"
}
```
````

### Development Dependencies

```json
"devDependencies": {
  "nodemon": "^3.1.0"
}
```

## Scripts

```json
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js",
  "seed": "node seed/seed.js"
}
```

- **start**: Runs the application.
- **dev**: Runs the application with nodemon for development.
- **seed**: Adds 5 powers to the database.

## Routes

### HERO

- **Base URL**: `/api/hero`

| Method     | Endpoint       | Description                                                                               |
| ---------- | -------------- | ----------------------------------------------------------------------------------------- |
| **GET**    | `/`            | Get all heroes                                                                            |
| **POST**   | `/create`      | Add a new hero (requires `name` and `img` in `jpg`, `png`, `jpeg`, `gif`, `webp` formats) |
| **PUT**    | `/update/:_id` | Update an existing hero (requires `name` or `img`, and `:_id` as a parameter)             |
| **DELETE** | `/delete/:_id` | Delete a hero (requires `:_id` as a parameter)                                            |

**To create a hero, the following fields are required:**

- `name`: "Hero Name"
- `img`: _Image file in formats ['jpg', 'png', 'jpeg', 'gif', 'webp']_

**To update a hero, you can pass either or both fields:**

- `name`: "Updated Hero Name"
- `img`: _Updated image file_
- `:_id`: Hero ID (as a URL parameter)

**To delete a hero, pass the following parameter:**

- `:_id`: Hero ID (as a URL parameter)

### POWER

- **Base URL**: `/api/power`

| Method     | Endpoint       | Description                                                                      |
| ---------- | -------------- | -------------------------------------------------------------------------------- |
| **GET**    | `/`            | Get all powers                                                                   |
| **POST**   | `/create`      | Add a new power (requires `name`)                                                |
| **PUT**    | `/update/:_id` | Update an existing power (requires `:_id` as a parameter and `name` in the body) |
| **DELETE** | `/delete/:_id` | Delete a power (requires `:_id` as a parameter)                                  |

**To create a power, the following field is required:**

- `name`: "Power Name"

**To update a power, the following fields are required:**

- `:_id`: Power ID (as a URL parameter)
- `name`: "Updated Power Name" (in the body)

**To delete a power, the following parameter is required:**

- `:_id`: Power ID (as a URL parameter)

### FUSION

- **Base URL**: `/api/fusion`

| Method   | Endpoint | Description            |
| -------- | -------- | ---------------------- |
| **POST** | `/`      | Link a power to a hero |

**To link a power to a hero, the following fields are required:**

```json
{
  "hero": "Goku",
  "power": "Spirit Bomb"
}
```

## Author

Project by **Daniele Mazzola**

## Repository URL

[GitHub - PROYECT_8](https://github.com/danielemazzola/PROYECT_8)

```

```
