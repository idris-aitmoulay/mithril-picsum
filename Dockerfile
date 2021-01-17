# todo: compiule time
FROM node:12-alpine AS builder
WORKDIR /app
COPY . .
RUN npm install -D && npm run build

# todo: run time
FROM nginx:alpine
COPY devops/nginx/default.conf /etc/nginx/conf.d/
COPY --from=builder /app/dist/ /usr/share/nginx/html/
