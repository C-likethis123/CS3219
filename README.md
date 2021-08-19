# CS3219 A1

This is a repository that hosts source code, installation instructions for Task A1

## Tech stack

For this project, we use Nginx that runs in a Docker container

## File structure

Dockerfile - instructions to build the docker image
`/app` - hosts a static HTML page
                                                                                     
## Installation instructions

### Prerequisites

Install Docker.

### Instructions

To build the Docker image: `docker build -t cs3219_a1 .`
To run it in localhost:3000: `docker run -dp 3000:3000 cs3219_a1`
 

                                                                                     
                                                                                     
                                                                                     
