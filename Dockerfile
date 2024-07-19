FROM registry.ssgadm.com/rancher/node:16.17.0-alpine AS runner

RUN addgroup -S app && adduser -S -G app app
RUN apk add --no-cache curl

ARG DEPLOY_ZONE
ARG CONTEXT_PATH
ARG SERVICE_NAME
ARG APPS

# set Runtime Env
ENV NODE_ENV production
ENV CONTEXT_PATH ${CONTEXT_PATH}
ENV DEPLOY_ZONE ${DEPLOY_ZONE}
ENV SERVICE_NAME ${SERVICE_NAME}
ENV APPS ${APPS}

RUN echo "RUNNER CONTEXT_PATH: ${CONTEXT_PATH}"
RUN echo "RUNNER DEPLOY_ZONE: ${DEPLOY_ZONE}"
RUN echo "RUNNER SERVICE_NAME: ${SERVICE_NAME}"
RUN echo "RUNNER APPS: ${APPS}"

WORKDIR /app

COPY .yarn .yarn
COPY .pnp.* ./
COPY .yarnrc.yml ./
COPY yarn.lock ./
COPY ts*.json ./

COPY ./package.json ./package.json

COPY ./apps/${APPS}/ts*.json ./apps/${APPS}/
COPY ./apps/${APPS}/next.config.js ./apps/${APPS}/next.config.js
COPY ./apps/${APPS}/package.json ./apps/${APPS}/package.json

COPY ./apps/${APPS}/config ./apps/${APPS}/config
COPY ./apps/${APPS}/.env ./apps/${APPS}/.env
COPY ./apps/${APPS}/core ./apps/${APPS}/core
COPY ./apps/${APPS}/.next ./apps/${APPS}/.next
COPY ./apps/${APPS}/types ./apps/${APPS}/types
COPY ./apps/${APPS}/public ./apps/${APPS}/public
COPY ./apps/${APPS}/cache-policy ./apps/${APPS}/.next/cache-policy

# packages 폴더까지 복사할 필요가 있는지 확인 필요
COPY ./packages ./packages

RUN echo "YARN VERSION IN RUNNER: " && yarn --version

CMD ["yarn", "start-deploy"]