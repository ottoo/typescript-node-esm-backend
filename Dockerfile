FROM node:18

RUN npm install -g pnpm@7.33.0

ADD package.json /tmp/package.json
ADD pnpm-lock.yaml /tmp/pnpm-lock.yaml
RUN cd /tmp && pnpm i --frozen-lockfile

RUN mkdir -p /server/node_modules && cp -a /tmp/node_modules /server

WORKDIR /server
ADD . /server

RUN pnpm build

ENV NODE_ENV=production

EXPOSE 4000
EXPOSE 5439

CMD ["/usr/local/bin/node", "/server/dist/index.js"]
