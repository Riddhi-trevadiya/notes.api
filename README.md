# Notes API

A RESTful Notes API built with **Node.js**, **Express**, and **TypeScript**, following a layered architecture used in real-world backend applications.

## Features

- CRUD operations for notes
- Express routing
- Controllers and Services architecture
- TypeScript interfaces (models)
- Request validation middleware
- Global error handling
- RESTful API design

## Tech Stack

- Node.js
- Express
- TypeScript

## Project Structure

```text
src/
├── controllers/
├── services/
├── routes/
├── models/
├── middleware/
├── errors/
├── app.ts
└── server.ts
```

## API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /notes | Get all notes |
| GET | /notes/:id | Get a note by ID |
| POST | /notes | Create a note |
| PUT | /notes/:id | Update a note |
| DELETE | /notes/:id | Delete a note |

## Status

🚧 In Progress
