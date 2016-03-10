FROM node:5.3

# Maintainer
MAINTAINER John Pizzo <john@cobrain.com>

# Add the current working folder as a mapped folder at /usr/src/app
ADD . /usr/src/app

# Set the current working directory to the new mapped folder.
WORKDIR /usr/src/app

# Install your application's dependencies
RUN npm install
RUN npm install ./server

# define the port to expose
EXPOSE 3000

# Run web server
CMD ['node', 'server/index.js']
