# visuify
This project involves creating a backend system for an image processing service similar to Cloudinary. The service will allow users to upload images, perform various transformations, and retrieve images in different formats. The system will feature user authentication, image upload, transformation operations, and efficient retrieval mechanisms.

## To build server docker image
`docker build -f server/Dockerfile -t visuify_server .`

## To create and run server docker container
`docker run -d -p 8000:8000 visuify_server`

## To build client docker image
`docker build -f client/Dockerfile -t visuify_client .`

## To create and run client docker container
`docker run -p 5173:5173 visuify_client`