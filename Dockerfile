FROM node:16-alpine AS builder
LABEL authors="nathaelbonnal"

WORKDIR /app

ARG NX_BACKEND
ENV NX_BACKEND $NX_BACKEND

COPY package.json .
COPY yarn.lock .
COPY .yarn .yarn
COPY .yarnrc.yml .yarnrc.yml
RUN yarn install --immutable

COPY . .
RUN yarn build

FROM nginx:latest
