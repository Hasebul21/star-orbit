# Star Orbit App

A beautiful React application featuring animated stars orbiting around a sun or moon. The number of orbiting stars is configurable, and you can toggle between day (sun) and night (moon) modes.

## Features

- 🌟 Configurable number of orbiting stars (1-8)
- ☀️ Day mode with animated sun
- 🌙 Night mode with animated moon
- 🎨 Beautiful gradient backgrounds
- ✨ Smooth animations and transitions
- 🐳 Docker support for easy deployment

## Local Development

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## Docker Deployment

### Build and Run with Docker

```bash
# Build the Docker image
docker build -t star-orbit-app .

# Run the container
docker run -p 3000:80 star-orbit-app
```

The app will be available at `http://localhost:3000`

### Using Docker Compose

```bash
# Build and start the container
docker-compose up -d

# Stop the container
docker-compose down
```

The app will be available at `http://localhost:3000`

## Usage

1. **Select Number of Stars**: Use the dropdown menu to choose how many stars (1-8) should orbit around the center body
2. **Toggle Day/Night Mode**: Click the "Switch to Moon/Sun Mode" button to toggle between sun and moon
3. **Watch the Animation**: Stars will orbit around the center body with smooth animations

## Technology Stack

- **React** - UI framework
- **Vite** - Build tool and dev server
- **CSS3** - Animations and styling
- **Docker** - Containerization
- **Nginx** - Production web server

## Project Structure

```
star-orbit-app/
├── src/
│   ├── App.jsx          # Main application component
│   ├── App.css          # Application styles
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── public/              # Static assets
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose configuration
├── nginx.conf          # Nginx configuration
└── package.json        # Dependencies and scripts
```

## License

MIT
# star-orbit
