FROM node:24-alpine

USER node

WORKDIR /app

COPY --chown=node:node package*.json ./

RUN npm ci --only=production

COPY --chown=node:node . .

EXPOSE 5000

CMD [ "node", "src/app.js" ] 