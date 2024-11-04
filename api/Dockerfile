FROM node:lts-alpine AS dev

WORKDIR /app
COPY *.json ./
COPY src src
RUN npm install
COPY data data
EXPOSE 4000

CMD ["npm", "run", "full"]