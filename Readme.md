Claro, aquí tienes el archivo `README.md` completamente en Markdown con el formato adecuado para que se vea bien en GitHub:

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

| Method     | Endpoint       | Description                              |
| ---------- | -------------- | ---------------------------------------- |
| **GET**    | `/`            | Get all heroes                           |
| **POST**   | `/create`      | Add a new hero (requires image)          |
| **PUT**    | `/update/:_id` | Update an existing hero (requires image) |
| **DELETE** | `/delete/:_id` | Delete a hero                            |

**To create a hero, the following fields are required:**

- `name`: "Hero Name"
- `img`: _Image file_

### POWER

- **Base URL**: `/api/power`

| Method     | Endpoint       | Description              |
| ---------- | -------------- | ------------------------ |
| **GET**    | `/`            | Get all powers           |
| **POST**   | `/create`      | Add a new power          |
| **PUT**    | `/update/:_id` | Update an existing power |
| **DELETE** | `/delete/:_id` | Delete a power           |

### FUSION

- **Base URL**: `/api/fusion`

| Method   | Endpoint | Description            |
| -------- | -------- | ---------------------- |
| **POST** | `/`      | Link a power to a hero |

## Author

Project by **Daniele Mazzola**

## Repository URL

[GitHub - PROYECT_8](https://github.com/danielemazzola/PROYECT_8)

```

Este formato asegura que el archivo se vea bien organizado y claro en GitHub, utilizando Markdown para la estructura y el estilo del contenido.
```
