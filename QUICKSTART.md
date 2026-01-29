# Quick Start Guide

## 🚀 Get Started in 3 Steps

### Step 1: Choose Your Method

#### Option A: Local Development (Fastest for testing)
```bash
cd star-orbit-app
npm install
npm run dev
```
✅ App runs at: http://localhost:5173

#### Option B: Docker (Production-like environment)
```bash
cd star-orbit-app
docker-compose up -d
```
✅ App runs at: http://localhost:3000

### Step 2: Open in Browser

Navigate to the URL based on your chosen method above.

### Step 3: Interact with the App

1. **Change star count**: Use the dropdown to select 1-8 stars
2. **Toggle mode**: Click the button to switch between Sun ☀️ and Moon 🌙
3. **Watch the magic**: Enjoy the smooth orbital animations!

## 🎯 What You'll See

- **Stars** orbiting around a central body
- **Sun mode**: Bright golden sun with purple background
- **Moon mode**: Silver moon with deep blue background
- **Smooth animations**: Orbiting, pulsing, and twinkling effects

## 🛠️ Common Commands

### Local Development
```bash
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build
```

### Docker
```bash
docker-compose up -d              # Start container
docker-compose down               # Stop container
docker-compose logs -f            # View logs
docker-compose up -d --build      # Rebuild and start
```

## 📝 Configuration Examples

### Example 1: 2 Stars (Default)
- Select "2" from dropdown
- Stars positioned 180° apart
- Smooth synchronized orbiting

### Example 2: 4 Stars
- Select "4" from dropdown
- Stars positioned 90° apart (N, E, S, W)
- Creates a cross pattern

### Example 3: 8 Stars
- Select "8" from dropdown
- Stars positioned 45° apart
- Full circular distribution

## 🐛 Troubleshooting

### Dev server won't start
```bash
# Check if port 5173 is in use
lsof -i :5173

# Kill the process if needed
kill -9 <PID>
```

### Docker container won't start
```bash
# Check if port 3000 is in use
lsof -i :3000

# View container logs
docker-compose logs
```

### Changes not showing
```bash
# For local dev: Hard refresh browser (Cmd+Shift+R or Ctrl+Shift+R)

# For Docker: Rebuild
docker-compose up -d --build
```

## 📚 Next Steps

- Read [README.md](README.md) for detailed documentation
- Check [FEATURES.md](FEATURES.md) for feature details
- See [DOCKER_INSTRUCTIONS.md](DOCKER_INSTRUCTIONS.md) for Docker specifics

## 💡 Tips

- **Best visual experience**: Use 4-6 stars for balanced aesthetics
- **Performance**: All animations are CSS-based (GPU accelerated)
- **Customization**: Edit `src/App.css` to change colors and speeds
- **Star range**: Modify the array in `App.jsx` to allow more stars

Enjoy your star orbit experience! ✨
