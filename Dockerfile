FROM node:18-alpine

WORKDIR /app

COPY package.json .
COPY pnpm-lock.yaml .

RUN npm install -g pnpm
RUN npm install -g pm2
RUN pnpm i

COPY . .

RUN pnpm run build

EXPOSE 3000
EXPOSE 5173

CMD ["pnpm", "start.production"]