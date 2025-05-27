# MultiBaas Typescript SDK example

To run this code example you will first need to [generate an API key](https://docs.curvegrid.com/multibaas/api/generate-api-keys/) in the `DApp User` group for your MultiBaas deployment.

Once you have generated an API key you can export the key and the MultiBaas deployment URL into environment variables or have an `.env` file. Example:

```sh
export MB_BASE_URL="https://your_deployment.multibaas.com"
export MB_API_KEY="secret"

# or 
cp .env.example .env
```

Install the dependencies:

```sh
npm install @curvegrid/multibaas-sdk axios dotenv
```

Run the example script:

```sh
npm run start
```
