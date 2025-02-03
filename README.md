# Backend Task

 It performs CRUD operations on a MongoDB database for a User resource, implements Login and Signup functionality using JWT, and includes OTP-based Signin/Signup using email.

## Technology Stack

- Node.js
- Express.js
- MongoDB

## User Resource Fields

- `id` (unique identifier for the user)
- `name` (name of the user)
- `email` (unique email address of the user)
- `phone` (unique phone number of the user)
- `password` (hashed password of the user)
- `role` (e.g., 'user' or 'admin')

## Authentication and Authorization

- JWT-based Login and Signup for user authentication.
- JWT is securely signed and includes an expiration time.
- JWT is used to protect sensitive routes like update and delete.

## OTP-Based Signin/Signup

- OTP-based authentication using email for both Signup and Signin.
- OTPs are generated and validated.
- OTPs are sent securely via email and have an expiration time.

## Key Functionalities

- Input validation and proper error handling for user data.
- Secure sensitive operations (update and delete) with authentication middleware.
- CRUD operations on User resource with REST API endpoints.

## API Endpoints

- `GET /api/users` - Returns a list of all users.
- `GET /api/users/:id` - Returns the user with the specified ID.
- `POST /api/users` - Creates a new user with the provided data.
- `PUT /api/users/:id` - Updates the user with the specified ID.
- `DELETE /api/users/:id` - Deletes the user with the specified ID.
- `POST /api/auth/login` - Handles JWT-based user login.
- `POST /api/auth/signup` - Handles JWT-based user signup.
- `POST /api/auth/otp/send` - Sends an OTP for email authentication.
- `POST /api/auth/otp/verify` - Verifies the OTP for Signin or Signup.

