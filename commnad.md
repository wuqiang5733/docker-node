build the image
# docker build -t express-users-api .

run a container 
# docker run -d -p 3000:3000 express-users-api

# docker run -d -p 3000:3000 -v user_volume:/usr/src/app express-users-api

# docker volume inspect user_volume

# docker container exec -it xxx sh


