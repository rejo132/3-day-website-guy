# Rejesho Portfolio

A modern, responsive portfolio website built with Next.js, React, and Tailwind CSS.

## Features

- 🌙 Dark/Light mode toggle
- 📱 Fully responsive design
- ✨ Smooth animations and transitions
- 📧 Working contact form with email integration
- 🎨 Modern glassmorphism design
- ⚡ Optimized performance

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd 3-day-website-guy
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory:
```env
# Email Configuration
# You need to create an App Password in your Gmail account
# Go to Google Account > Security > 2-Step Verification > App passwords
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

### Setting up Email (Gmail)

1. Enable 2-Step Verification in your Google Account
2. Generate an App Password:
   - Go to Google Account Settings
   - Security > 2-Step Verification > App passwords
   - Generate a new app password for "Mail"
3. Use this app password in your `.env.local` file

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

### Building for Production

```bash
npm run build
npm start
```

## Technologies Used

- **Next.js 15** - React framework
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Nodemailer** - Email functionality

## Contact Form

The contact form is fully functional and will send emails to `enochrejesho254@gmail.com` when users submit messages. Make sure to:

1. Set up the environment variables correctly
2. Use a Gmail account with App Password authentication
3. Test the form in development before deploying

## Deployment

The portfolio is ready for deployment on platforms like:
- Vercel (recommended)
- Netlify
- Railway

## License

This project is open source and available under the [MIT License](LICENSE).
