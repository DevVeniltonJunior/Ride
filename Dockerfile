FROM node:18 AS builder

WORKDIR /usr/src/app

COPY package*.json ./

COPY tsconfig*.json ./

COPY ./src ./src

ENV DATABASE_URL="postgresql://user_user:Userpass@@1@localhost:5432/v1_rider?schema=public"
ENV PORT=4000

RUN npm install \
    && npm run build
