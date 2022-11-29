# stage 1 - build
FROM node:17-alpine as build

WORKDIR /app

COPY package*.json /app/

RUN yarn install

COPY . .

RUN yarn build

# stage 2 - production
FROM node:17-alpine as prod

WORKDIR /app

RUN chown -R node:node /app

USER node

ENV NODE_ENV=production

COPY --chown=node:node --from=build /app/package*.json /app

COPY --chown=node:node --from=build /app/dist /app/dist

COPY --from=build /app/.env.production /app/.env

RUN yarn install --only=prod

CMD ["yarn", "start"]



