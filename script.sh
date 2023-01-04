#!/bin/bash

osascript -e 'tell app "Terminal"
  do script "cd project/mono-workspace/kafka && bin/zookeeper-server-start.sh config/zookeeper.properties"
  do script "cd project/mono-workspace/kafka && bin/kafka-server-start.sh config/server.properties"
  do script "cd project/mono-workspace/nestjs-mono && yarn start:dev"
end tell'


