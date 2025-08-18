# Internee.pk Portal

A modern web application built with React and Vite that connects students with internship opportunities. The portal features a clean UI with Tailwind CSS styling and responsive design.

## Features

- Interactive landing page with hero section
- Internship listings with categories:
  - Frontend Development 
  - Backend Development
  - Mobile App Development
  - Graphic Design
  - Chatbot Development
  - Machine Learning
- Responsive navigation menu
- Form validation using Formik and Yup
- Toast notifications for form submissions
- Partner organization showcase
- Mobile-friendly design

## Tech Stack

- React 19
- Vite 7
- React Router v7 
- Tailwind CSS
- Formik + Yup for form handling
- React Toastify for notifications
- ESLint for code quality

## Getting Started

1. Clone the repository
2. Install dependencies:
```sh
npm install
```

3. Run development server:
```sh
npm run dev
```

4. Build for production:
```sh
npm run build
```

## Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Form.jsx         # Application form with validation
│   ├── Hero.jsx         # Landing page hero section
│   ├── Internship.jsx   # Internship listings
│   └── Navbar.jsx       # Navigation component
├── pages/               # Route pages
│   └── Home.jsx         # Main landing page
└── App.jsx              # Root component with routing
```

## Contributing

Feel free to submit issues and pull requests to help improve the project.

## License

This project is available under the MIT License.