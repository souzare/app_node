#!/bin/bash
docker rm -f node
docker image build -t node_app_prom .
docker run --name "node" -p 3000:3000 -d node_app_prom