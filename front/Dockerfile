# BUILD
FROM node:20-alpine AS build-env

RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build

# DEPLOY
FROM node:20-alpine

WORKDIR /app

COPY --from=build-env /app/ ./

EXPOSE 3000

CMD ["yarn", "start"]
