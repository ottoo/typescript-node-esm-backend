FROM node:18

RUN npm install -g pnpm@7.33.0

COPY . /server
WORKDIR /server

RUN pnpm i && pnpm build

EXPOSE 4000
EXPOSE 5439

CMD ["/usr/local/bin/node", "/server/dist/index.js"]
