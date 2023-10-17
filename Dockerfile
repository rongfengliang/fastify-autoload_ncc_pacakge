FROM  node:18.18.2-buster-slim
WORKDIR /app
ENTRYPOINT [ "node","index.js" ]