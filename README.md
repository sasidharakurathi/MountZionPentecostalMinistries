# Mount Zion Pentecostal Ministries - React Version

This is the React version of the Mount Zion Pentecostal Ministries website, converted from the original Django application.

## Features

- Modern React 18 with functional components and hooks
- Responsive design with mobile-friendly navigation
- Image gallery with automatic carousel functionality
- Component-based architecture for maintainability
- Mock data system replacing Django models
- Clean, semantic HTML structure

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Header.js       # Navigation header with dropdown menus
│   ├── Footer.js       # Footer with links and social media
│   ├── PosterSection.js # Hero section with church info
│   ├── BranchSection.js # Video and about section
│   ├── AboutUsSection.js # Bible verses display
│   └── ImageGallery.js  # Interactive image carousel
├── pages/              # Page components
│   └── Home.js         # Main homepage
├── hooks/              # Custom React hooks
│   └── useData.js      # Data fetching hooks
├── data/               # Mock data
│   └── mockData.js     # Sample messages and songs
├── App.js              # Main app component with routing
├── index.js            # Application entry point
└── styles/             # CSS files for each component
```

## Installation

1. Make sure you have Node.js installed (version 14 or higher)

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:3000`

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## Key Components

### Header
- Responsive navigation with mobile hamburger menu
- Dropdown menus for About Us and Videos sections
- Social media links

### ImageGallery
- Automatic image carousel (3-second intervals)
- Manual navigation with arrow buttons
- Thumbnail gallery with selection indicators
- Smooth transitions and hover effects

### Data Management
- Custom hooks (`useLatestMessages`, `useLatestSongs`) for data fetching
- Mock data system simulating API calls
- Loading states and error handling ready for real API integration

## Styling

- Component-based CSS architecture
- Responsive design using CSS Grid and Flexbox
- Mobile-first approach with media queries
- Consistent color scheme (maroon #800000 as primary color)

## Future Enhancements

- Connect to real backend API
- Add more pages (About, Contact, etc.)
- Implement form handling for contact/donation
- Add animation libraries for enhanced UX
- Implement SEO optimization
- Add accessibility features

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2025 Mount Zion Pentecostal Ministries
