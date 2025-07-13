# Elevate Training Portal

A modern, responsive Employee Training Portal built with **Next.js**, **TypeScript**, **Tailwind CSS**, and **MongoDB**. This app simulates a learning platform for HRTech/EdTech use cases, where users can browse training courses and enroll in them.

**Live site**: [https://elevate-murex.vercel.app](https://elevate-murex.vercel.app)

## Features

- Home page with paginated list of training courses
- Search bar to filter courses by keyword (case-insensitive)
- Course details page with full description, prerequisites, instructor, etc.
- Enroll/Unenroll functionality using Redux Toolkit
- REST API endpoint to serve and filter courses 
- Global state management with Redux Toolkit
- MongoDB Atlas integration for data storage
- Tailwind CSS styling with mobile-first responsive design
- Error handling for UI and API errors
- Pagination support for course listings
- TypeScript support with strict types/interfaces

## Tech Stack

- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State Management:** Redux Toolkit
- **Database:** MongoDB Atlas
- **Deployment:** Vercel

## Screenshots

<img width="496" height="410" alt="image" src="https://github.com/user-attachments/assets/01a5f33f-4289-4c2e-ae23-9fc560bb330c" />
<img width="391" height="205" alt="image" src="https://github.com/user-attachments/assets/f58a3322-1632-4ca0-a779-a487b8ba2fea" />
<img width="381" height="243" alt="image" src="https://github.com/user-attachments/assets/d97a9328-922e-44b4-ac32-ae9cec070f44" />
<img width="339" height="98" alt="image" src="https://github.com/user-attachments/assets/666bd6de-e977-4465-a93f-f23dba71cf4a" />
<img width="170" height="31" alt="image" src="https://github.com/user-attachments/assets/e7cd9272-ff09-440d-b2cc-a8f6a5bc3568" />

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Philimuhire/employee-training-portal.git
cd employee-training-portal
```
### 2. Install Dependencies

```bash
npm install
```
### 3. Add Environment Variables

Create a .env file:

MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/elevate-training-db?retryWrites=true&w=majority&appName=YourAppName

### 4. Run the Development Server

npm run dev

Visit http://localhost:3000

## Deployment

The project is deployed on Vercel.

Live: https://elevate-murex.vercel.app

 ## Author

Philbert Muhire

LinkedIn: https://www.linkedin.com/in/philbert-muhire-182b96195/

Email: philimuhire@gmail.com
