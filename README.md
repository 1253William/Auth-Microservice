# Auth-Microservice
A production-ready Authentication &amp; Authorization microservice built with NestJS, PostgreSQL, and Prisma.  This service handles user authentication, JWT-based authorization, and role-based access control for passengers, drivers, and admins.

## Core Features:
- Authentication via JWT (register/login)  JwtAuthGuard
- User Authorization via RolesGuard
- Role-based protected routes (RBAC) - Passenger, Driver, Admin
- PostgreSQL(neon) via Prisma

## Actions:
-  User can sign up (default passenger)
-  User can login, JWT generated with { sub, role } claims
-  Guard checks JWT validity, and role permission
-  Return user data or response
