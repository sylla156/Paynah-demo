# Build stage
FROM node:20-slim AS builder

# Install system dependencies
RUN apt-get update && apt-get install -y \
    procps \
    && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm ci

# Copy project files
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM node:20-slim AS runner


# Set working directory
WORKDIR /app

# Set environment
ENV NODE_ENV production

# Create non-root user
# RUN addgroup --system --gid 1001 nodejs
# RUN adduser --system --uid 1001 nextjs

# Copy necessary files from builder
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Switch to non-root user
# USER nextjs

# Expose port
EXPOSE 3000

# Set entrypoint with tini
# ENTRYPOINT ["/tini", "--"]

# Run the application
CMD ["node", "server.js"]
