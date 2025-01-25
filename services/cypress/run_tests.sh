#!/usr/bin/env bash

cd /app/ && npm install cypress --save-dev --force && CYPRESS_defaultCommandTimeout=10000 cypress run -q
