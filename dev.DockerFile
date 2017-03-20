FROM node:boron
# make and copy 
RUN mkdir -p /code
COPY package.json /code
# only copy directory if you are not mounting your working directory
# COPY . /code

# set working directory to /code and run npm install
WORKDIR /code
RUN npm install
EXPOSE 8080