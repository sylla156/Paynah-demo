# Paynah Web Application

## Description
Paynah is a modern financial management web application built with Next.js, offering features like transaction management, account monitoring, and payment processing. The application provides a sleek, responsive interface designed for optimal user experience across all devices.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Development Options](#development-options)
- [Database Setup](#database-setup)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Contributing](#contributing)

## Prerequisites
- Node.js (v18 or higher)
- Docker and Docker Compose (for containerized development)
- MongoDB
- Git

## Installation

1. Clone the repository:
```bash
git clone https://github.com/sylla156/Paynah-demo.git
cd Paynah-demo
```

2. Copy the environment template:


```shellscript
cp .env.example .env
```

3. Configure your environment variables in the `.env` file


## Development Options

### Option 1: Docker Development

1. Start the application:


```shellscript
make run
```

2. View logs:


```shellscript
make watch_logs
```

3. Stop the application:


```shellscript
make stop
```

### Option 2: Local Development

1. Install dependencies:


```shellscript
npm install
```

2. Start the development server:


```shellscript
npm run dev
```

## Database Setup

1. Connect to your MongoDB instance
2. Create an admin user in the database:


```javascript
db.users.insertOne({
  email: "admin@example.com",
  password: "hashed_password", // Make sure to hash the password
  role: "admin",
  name: "Admin User"
})
```

## Environment Variables

Create a `.env` file in the project root with the following variables:

```plaintext
# Database
MONGODB_URI=your_mongodb_connection_string

# Authentication
JWT_SECRET=your_jwt_secret
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000

# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:3000/api

# Other Configuration
NODE_ENV=development
```

## Available Scripts

```shellscript
# Development
npm run dev         # Start development server
npm run build      # Build production application
npm run start      # Start production server
npm run lint       # Run ESLint
npm run type-check # Run TypeScript compiler check

# Docker Commands
make run          # Start Docker containers
make stop         # Stop Docker containers
make watch_logs   # View Docker logs
```

## Project Structure

```plaintext
paynah/
├── app/                  # Next.js 13 app directory
├── components/          # React components
├── contexts/           # React contexts
├── lib/                # Utility functions
├── public/            # Static assets
├── styles/           # Global styles
├── types/           # TypeScript types
└── docker/         # Docker configuration
```

## Features

- 🔐 Secure Authentication
- 💳 Account Management
- 💸 Transaction Tracking
- 📊 Financial Dashboard
- 🌐 Multi-language Support
- 🎨 Responsive Design


## Live Demo

Visit [https://paynah.ibrahimcode.dev/](https://paynah.ibrahimcode.dev/) to see the application in action.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## Troubleshooting

### Common Issues

1. **MongoDB Connection Issues**

1. Verify your MongoDB URI in the `.env` file
2. Ensure MongoDB is running
3. Check network connectivity



2. **Docker Issues**

1. Ensure Docker daemon is running
2. Check if ports are available
3. Verify Docker Compose installation



3. **Build Errors**

1. Clear `.next` directory
2. Delete `node_modules` and reinstall
3. Verify Node.js version





## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Next.js team for the amazing framework
- Vercel for hosting
- All contributors who have helped shape this project


## Support

For support, email [support@paynah.com](mailto:support@paynah.com) or join our Slack channel.

```plaintext

Key features of this README:

1. Clear installation instructions for both Docker and local development
2. Detailed environment variable setup
3. Database configuration with admin user creation
4. Project structure overview
5. Comprehensive troubleshooting section
6. Contributing guidelines
7. Multiple development options
8. Clear prerequisites
9. Common issues and solutions

The README is designed to help developers get started quickly while providing all necessary information for both basic and advanced usage.
```