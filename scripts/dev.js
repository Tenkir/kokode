const { execSync } = require('node:child_process')

console.log('Installing dependencies...');
execSync('yarn', {stdio: 'inherit'});

console.log('Starting docker containers...');
execSync('docker-compose up -d', {stdio: 'inherit'});

console.log('Running database migrations...');
execSync('yarn migrate', {stdio: 'inherit'});

console.log('Generating database client');
execSync('yarn generate', {stdio: 'inherit'});
execSync('yarn workspace @kokode/database build', {stdio: 'inherit'});

console.log('Starting developement server...');
execSync('yarn workspace @kokode/app dev', {stdio: 'inherit'});
