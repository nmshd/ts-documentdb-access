set -e
set -x

npm ci
npx lerna bootstrap
npm run lint:prettier
npx lerna run license-check --stream
npx lerna run build --stream
npm run lint:eslint --stream
