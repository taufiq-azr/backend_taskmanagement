
# Task Management REST API Documentation

## Introduction

This is the documentation for the Task Management REST API, which is built using Node.js. The API allows users to manage tasks including creating, updating, retrieving, and deleting tasks.

## Base URL

```
http://localhost:3000/api/
```

## Authentication

To use the API, you need to include a token in the `Authorization` header for protected routes.

### Example

```
Authorization: Bearer your-token-here
```

## Endpoints

### 1. User Registration

- **URL:** `/api/signup`
- **Method:** `POST`
- **Description:** Register a new user.
- **Request Body:**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

- **Responses:**
  - `200 Created` on success
  - `400 Bad Request` if the input is invalid

### 2. User Login

- **URL:** `/api/login`
- **Method:** `POST`
- **Description:** Log in a user.
- **Request Body:**

```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

- **Responses:**
  - `200 OK` with a token
  - `401 Unauthorized` if credentials are incorrect

### 3. Get All Tasks

- **URL:** `/tasks`
- **Method:** `GET`
- **Description:** Retrieve a list of all tasks.
- **Headers:**
  - `Authorization: Bearer <token>`
- **Responses:**
  - `200 OK` with the list of tasks
  - `401 Unauthorized` if not authenticated

### 4. Create a New Task

- **URL:** `/tasks`
- **Method:** `POST`
- **Description:** Create a new task.
- **Headers:**
  - `Authorization: Bearer <token>`
- **Request Body:**

```json
{
  "title": "New Task",
  "description": "Task description",
  "status": "non-favorite",
  "dueDate": "2024-12-31T23:59:59.999Z",
  "userId": "60e6efeb52e85b45b8f7a1e3"
}
```

- **Responses:**
  - `200 Created` on success
  - `400 Unauthorized` if not authenticated

### 5. Get a Single Task

- **URL:** `/tasks/:id`
- **Method:** `GET`
- **Description:** Retrieve a specific task by its ID.
- **Headers:**
  - `Authorization: Bearer <token>`
- **Responses:**
  - `200 OK` with the task details
  - `404 Not Found` if the task does not exist
  - `401 Unauthorized` if not authenticated

### 6. Update a Task

- **URL:** `/tasks/:id`
- **Method:** `PUT`
- **Description:** Update a task by its ID.
- **Headers:**
  - `Authorization: Bearer <token>`
- **Request Body:**

```json
{
  "title": "Updated Task",
  "description": "Updated description",
  "status": "completed"
}
```

- **Responses:**
  - `200 OK` on success
  - `400 Bad Request` if the input is invalid
  - `404 Not Found` if the task does not exist
  - `401 Unauthorized` if not authenticated

### 7. Delete a Task

- **URL:** `/tasks/:id`
- **Method:** `DELETE`
- **Description:** Delete a task by its ID.
- **Headers:**
  - `Authorization: Bearer <token>`
- **Responses:**
  - `204 No Content` on success
  - `404 Not Found` if the task does not exist
  - `401 Unauthorized` if not authenticated

## Error Handling

The API uses conventional HTTP response codes to indicate the success or failure of an API request. Errors are returned in a structured JSON format:

- **Example Error Response:**

```json
{
  "error": "Invalid credentials"
}
```

## Development and Deployment

- **Technologies Used:** Node.js, Express, MongoDB
- **Environment Variables:**
  - `PORT`: Port on which the server will run
  - `MONGO_URI`: MongoDB connection string
  - `JWT_SECRET`: Secret key for JWT token

## License

This API is licensed under the MIT License.
