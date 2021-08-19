# CS3219 A1

This is a repository that hosts source code and installation instructions for Task A1

## Tech stack

For this project, we use Nginx that runs in a Docker container

## File structure

- Dockerfile - instructions to build the docker image
- nginx.conf - configuration file for nginx
- `/app` - hosts a static HTML page

## Installation instructions

### Prerequisites

Install Docker.

### Instructions

To build the Docker image: `docker build -t cs3219_a1 .`
To run it in localhost:8080: `docker run -dp 8080:8080 cs3219_a1`
