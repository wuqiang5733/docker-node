build the image
# docker build -t express-users-api .

run a container 
# docker run -d -p 3000:3000 express-users-api

# docker run -d -p 3000:3000 -v user_volume:/app/data express-users-api
# docker run -d -p 3000:3000 -v user_volume:/app/data express-api
docker run -d -p 3000:3000 -v /app/node_modules -v user_volume:/app/data/ express-api
docker run -d -p 3000:3000 -v /app/node_modules -v user_volume:/app/data/ express-users-api
docker run -d -p 3000:3000  -v user_volume:/app/data/ express-users-api

# docker volume inspect user_volume

# docker container exec -it fbc787654872 sh

# docker rmi -f $(docker image -aq)

# docker rmi -f {contaienr ID}
# docker rm -f $(docker ps -aq)
# docker ps -a -q|xargs docker rm
# whereis nginx

below is the success volume command 
# docker run -d -p 3000:3000  -v /home/zhuhuhu/Documents/docker-exercise:/app/data/ express-users-api
# docker run --name express-container -d -p 3000:3000  -v user_volume:/app/data/ express-users-api

test command used in container,bcz have NO nano command

echo "1,Ian,ian@example.com" >> users.csv
echo "2,Reverse,reverse@example.com" >> users.csv
echo "3,John,john@example.com" >> users.csv
echo "4,Jane,jane@example.com" >> users.csv

# docker exec -it express-container sh
