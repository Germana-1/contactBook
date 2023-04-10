
#!/usr/bin/env bash
# exit on error
set -o errexit

yarn
yarn add typescript --dev
npm i --save-dev @types/express
npm i --save-dev @types/cors
yarn build
yarn typeorm migration:run -d dist/data-source
