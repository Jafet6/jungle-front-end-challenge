# jungle-front-end-challenge

## run development mode
1) start development mode: npm start

## create production builds
1) build docker container: docker image build -t jungledev .
2) run docker container: docker run --rm -d  -p 80:80/tcp jungledev:latest
