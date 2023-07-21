FROM node:18 AS builder

WORKDIR /usr/src/app

COPY package*.json ./

COPY tsconfig*.json ./

COPY ./src ./src

RUN npm install \
    && npm run build
