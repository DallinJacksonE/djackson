#!/bin/bash

# Stop and remove the old container if it exists (don't fail if it doesn't)
docker stop djackson.dev || true
docker rm djackson.dev || true

# Build the new Docker image
docker build -t djackson-dev-image .

# Run the container in detached mode, exposing port 8080, and restarting automatically
docker run -d --name djackson.dev --restart unless-stopped -p 8080:8080 djackson-dev-image
