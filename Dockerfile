FROM node:18 AS builder

WORKDIR /usr/src/app

COPY . .

ENV DATABASE_URL="postgres://user_user:Userpass@@1@172.18.0.5:5432/v1_rider"
ENV PORT=4000

RUN npm install \
    && npm run build
