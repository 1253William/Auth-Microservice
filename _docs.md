# Auth-Microservice
A production-ready Authentication &amp; Authorization microservice built with NestJS, PostgreSQL, and Prisma.  This service handles user authentication, JWT-based authorization, and role-based access control for passengers, drivers, and admins.

## Tech Stack
-NestJS (TypeScript)
-PostgreSQL
-Prisma ORM
-JWT Authentication
-Role-Based Access Control (RBAC)
-Jest & Supertest (Unit + E2E tests)
-GitHub Actions (CI)
-Render (Deployment)

## Roles Supported:
```
PASSENGER
DRIVER
ADMIN
```
-Roles are embedded in JWT tokens and enforced using NestJS Guards.

## Core Features:
-User registration & login
-Secure password hashing
-JWT authentication
-Role-based authorization
-PostgreSQL persistence via Prisma
-Minimal unit & E2E testing
-CI/CD pipeline with GitHub Actions

## Architecture
This service follows NestJS best practices:
Modular structure
Service-based business logic
Dependency Injection
DTO validation
Guards for authentication & authorization

## Environment Variables
DATABASE_URL=postgresql://user:password@host:5432/db
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=1d

## Testing
# unit tests
```npm run test```

# e2e tests
```npm run test:e2e```

## Running Locally
npm install
npx prisma migrate dev
npm run start:dev

# CI/CD & Deployment
CI: GitHub Actions runs tests and builds on every push
Deployment: Automatically deployed to Render


