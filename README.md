# Multi-Step Onboarding Wizard

A fully responsive multi-step onboarding wizard built with React. The application demonstrates modern form architecture using lifted state management, real-time validation, conditional rendering, and seamless user navigation across multiple onboarding steps. Designed following enterprise SaaS onboarding workflows commonly used in FinTech and modern web applications.

---

# Live URL

> Deploy to Vercel and paste your live URL here.

https://your-live-demo.vercel.app

---

# Screenshot

<img width="1917" height="1077" alt="Project Screenshot" src="YOUR_SCREENSHOT_URL_HERE" />

---

# Sprint Phases Completed

| Phase | Feature | Status |
|------|-----------------------------------------------|:----:|
| 1 | Multi-Step Form Architecture | ✅ |
| 1 | Personal Information Step | ✅ |
| 1 | Account Details Step | ✅ |
| 1 | Review & Submit Screen | ✅ |
| 1 | Next & Back Navigation | ✅ |
| 1 | Lifted State Management | ✅ |
| 1 | Data Persistence Between Steps | ✅ |
| 1 | Final Submission Payload | ✅ |
| 1 | Success Confirmation Screen | ✅ |
| 2 | Real-Time Form Validation | ✅ |
| 2 | Regex Email Validation | ✅ |
| 2 | Password Length Validation | ✅ |
| 2 | Disabled Next Button Until Valid | ✅ |
| 2 | Show / Hide Password Toggle | ✅ |
| 2 | Dynamic Progress Bar | ✅ |
| 2 | Responsive Mobile Layout | ✅ |
| 3 | React Hook Form Integration | ✅ |
| 3 | Zod Validation Schema | ✅ |
| 3 | Type-Safe Form Validation | ✅ |
| 3 | Optimized Form Performance | ✅ |

---

# Features

- Three-step onboarding workflow
- Conditional rendering for step transitions
- Parent-level state management using lifted state
- Persistent form data while navigating between steps
- Real-time input validation
- Regex-based email verification
- Password strength validation
- Dynamic progress indicator
- Previous and Next navigation controls
- Show / Hide password functionality
- Review page before final submission
- Success confirmation after completion
- Clean and responsive SaaS-inspired UI
- Accessible form controls
- Mobile-first responsive design

---

# Tech Stack

- React.js
- React Hooks
- React Hook Form
- Zod Validation
- JavaScript (ES6+)
- HTML5
- CSS3
- Flexbox
- CSS Grid
- Vite

---

# Project Structure

```text
multi-step-onboarding/

│
│
├── src/
│   │
│   ├── components/
│   │   ├── PersonalInfo.jsx
│   │   ├── AccountDetails.jsx
│   │   ├── Review.jsx
│   │   ├── ProgressBar.jsx
│   │   ├── Success.jsx
│   │   └── Button.jsx
│       ├── App.jsx
│       ├── main.jsx
│       └── index.css
│
├── package.json
├── vite.config.js
└── README.md
```

---

# How to Run Locally

```bash
# Clone the repository

git clone https://github.com/your-username/multi-step-onboarding.git

# Navigate into the project

cd multi-step-onboarding

# Install dependencies

npm install

# Start development server

npm run dev
```

The application will be available at:

```
http://localhost:5173
```

---

# Deployment

Deploy easily using **Vercel** or **Netlify**.

```bash
npm run build
```

Upload the generated **dist/** folder or connect your GitHub repository directly for automatic deployments.

---

# Validation Rules

### Personal Information

- First Name is required
- Last Name is required
- Valid email address
- Phone number validation

### Account Details

- Username is required
- Password must contain at least 8 characters
- Confirm Password must match
- Show / Hide Password functionality

### Review

- Displays all collected user information
- User can navigate back to edit any section
- Submit logs the complete payload
- Displays success screen after submission

---

# Learning Outcomes

- Multi-Step Form Architecture
- Component-Based Design
- Parent & Child State Management
- Lifted State Pattern
- Conditional Rendering
- Form Validation
- Regex Validation
- React Hook Form
- Zod Schema Validation
- Dynamic UI Rendering
- Responsive Web Design
- User Experience Optimization
- Form Performance Optimization
- Modern React Best Practices

---

# Future Improvements

- Save progress using Local Storage
- Dark Mode
- Framer Motion page transitions
- API integration for backend submission
- Authentication with Firebase
- Multi-language support
- File Upload Step
- Profile Picture Upload
- Toast Notifications
- Step Animation
- Theme Customization
- Unit Testing with Jest & React Testing Library

---

# Author

**Aashika Jain**

B.Tech Computer Science Engineering

Frontend Developer • React Developer • UI Enthusiast
