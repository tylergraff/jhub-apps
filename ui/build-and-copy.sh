tsc
vite build

mv dist/assets/index-*.js dist/assets/index.js
mv dist/assets/index-*.css dist/assets/index.css

cp -r dist/assets/* ../jhub_apps/assets
