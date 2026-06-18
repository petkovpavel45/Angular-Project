# Fondation — Full-stack Angular App

A full-stack CRUD platform for managing charitable foundations, built with Angular and MongoDB.

---

## Features

- **Browse foundations** — view all listed foundations with details
- **Create & manage** — authenticated users can create, edit, and delete foundations
- **Donations** — make donations to any foundation (once per user)
- **Authentication** — register/login with JWT-based session management
- **Route guards** — protected routes for authenticated users only
- **Ownership** — only the creator can edit or delete their foundation

## Tech Stack

![Angular](https://img.shields.io/badge/Angular-DD0031?style=flat&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)

**Frontend:** Angular, TypeScript, HTML5, CSS3  
**Backend:** Node.js, Express  
**Database:** MongoDB  
**Auth:** JWT tokens

## Getting Started

### Frontend

```bash
cd fondation-project
npm install
ng serve
```

Opens at `http://localhost:4200`

### Backend

```bash
cd Server
npm install
node index.js
```

API runs at `http://localhost:3000/api`

## API Endpoints

### Auth

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/users/register` | Register new user |
| POST | `/users/login` | Login |
| POST | `/users/logout` | Logout |

### Foundations

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/fondations` | Get all foundations |
| POST | `/fondations` | Create foundation (auth required) |
| GET | `/fondations/:id` | Get foundation details |
| PUT | `/fondations/:id` | Edit foundation (owner only) |
| DELETE | `/fondations/:id` | Delete foundation (owner only) |

### Donations

| Method | Endpoint | Description |
|--------|----------|-------------|
| PUT | `/donations/:fondationId` | Donate to a foundation (once per user) |

## License

MIT
