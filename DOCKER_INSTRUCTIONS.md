# Docker Instructions for Star Orbit App

## Quick Start

### Option 1: Using Docker Compose (Recommended)

```bash
# Navigate to the project directory
cd star-orbit-app

# Build and start the container
docker-compose up -d

# View logs
docker-compose logs -f

# Stop the container
docker-compose down
```

Access the app at: **http://localhost:3000**

### Option 2: Using Docker Commands

```bash
# Build the Docker image
docker build -t star-orbit-app .

# Run the container
docker run -d -p 3000:80 --name star-orbit-app star-orbit-app

# View logs
docker logs -f star-orbit-app

# Stop and remove the container
docker stop star-orbit-app
docker rm star-orbit-app
```

Access the app at: **http://localhost:3000**

## How It Works

The Dockerfile uses a **multi-stage build**:

1. **Build Stage**: 
   - Uses Node.js 20 Alpine image
   - Installs dependencies
   - Builds the React app with Vite
   - Creates optimized production files in `/dist`

2. **Production Stage**:
   - Uses lightweight Nginx Alpine image
   - Copies built files from build stage
   - Serves the app on port 80
   - Includes custom Nginx configuration for SPA routing

## Customizing the Port

To run on a different port, change the port mapping:

```bash
# Run on port 8080 instead
docker run -d -p 8080:80 --name star-orbit-app star-orbit-app
```

Or update `docker-compose.yml`:

```yaml
ports:
  - "8080:80"  # Change 3000 to your desired port
```

## Image Size

The final Docker image is optimized and lightweight:
- Uses Alpine Linux base images
- Multi-stage build removes build dependencies
- Only production files are included
- Estimated size: ~50-60 MB

## Troubleshooting

### Container won't start
```bash
# Check logs
docker logs star-orbit-app

# Check if port is already in use
lsof -i :3000
```

### Rebuild after code changes
```bash
# With Docker Compose
docker-compose up -d --build

# With Docker commands
docker build -t star-orbit-app . --no-cache
docker stop star-orbit-app
docker rm star-orbit-app
docker run -d -p 3000:80 --name star-orbit-app star-orbit-app
```

## Production Deployment

For production deployment, consider:

1. **Using a specific version tag**:
   ```bash
   docker build -t star-orbit-app:v1.0.0 .
   ```

2. **Environment-specific configurations**:
   - Update Nginx configuration for your domain
   - Add SSL/TLS certificates
   - Configure CORS if needed

3. **Health checks**:
   ```yaml
   healthcheck:
     test: ["CMD", "wget", "--quiet", "--tries=1", "--spider", "http://localhost:80"]
     interval: 30s
     timeout: 10s
     retries: 3
   ```

4. **Resource limits**:
   ```yaml
   deploy:
     resources:
       limits:
         cpus: '0.5'
         memory: 512M
   ```
