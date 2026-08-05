Notes API

REST API built with Node.js, Express, TypeScript,
Prisma ORM and PostgreSQL.

------------------------------------------------------------

Features

• JWT Authentication
• User Authorization
• CRUD Operations for Notes
• Password Hashing (bcrypt)
• PostgreSQL + Prisma ORM
• Request Validation
• Centralized Error Handling
• Layered Architecture

------------------------------------------------------------

Tech Stack

Node.js
Express.js
TypeScript
PostgreSQL
Prisma ORM
JWT
bcrypt

------------------------------------------------------------

Getting Started

git clone ...
npm install
npx prisma migrate dev
npm run dev

------------------------------------------------------------

Environment Variables

PORT=
DATABASE_URL=
JWT_SECRET=

------------------------------------------------------------

API Endpoints

POST   /auth/register
POST   /auth/login

GET    /notes
GET    /notes/:id
POST   /notes
PUT    /notes/:id
DELETE /notes/:id

------------------------------------------------------------

Future Improvements

- Docker
- Swagger
- Refresh Tokens
- Pagination
- Search
- CI/CD
