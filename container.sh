#!/bin/bash
docker rm -f node
docker image build -t node_app_prom .
docker run --name "node" -p 8080:8080 -d node_app_prom