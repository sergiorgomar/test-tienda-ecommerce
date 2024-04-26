This project includes a backend and a frontend, you dont need run each project independently, because the project includes concurrently dependency for make more easy for you.


## Prerequisites

1. **Node JS.** This project was made using v20.6.0, but a higher version it's ok. Lowers version could doesn't work appropriately. 


## Getting Started


First, install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```


Make a `.env` file and set env variables. A example is showed in `.env.example` file.

```bash
#BACKEND
BACKEND_PORT = "is the port for run backend application"
AUTH_TOKEN = "is a hardcorder token with db, use any secure string"

#FRONTEND
NEXT_PUBLIC_URL_API ="http://localhost:<the configured backend port>" or "the backend url"
NEXT_PUBLIC_SHIPPING_AUTH_TOKEN = "the token provided by your shipper"
NEXT_PUBLIC_LOCAL_AUTH_TOKEN = "the backend api, it's AUTH_TOKEN"
FRONTEND_PORT = "is the por for run frontend application"
```

Now, you can run the project using:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:FRONTEND_PORT](http://localhost:3000) with your browser to see the frontend app.



## Good to know

1. Backend endpoints are protected with a Bearer token, you need put this token on Header request in each frontend request. Due token is linked with database, you need use the same AUTH_TOKEN configured on env variables.

2. Database don't need a especial configuration, the project was maded with SQLite engine. That's ready to use. The database.sqlite contains the database project. Edit `server/connection.ts` file for make changes on that, you can use the engine what you want. 

