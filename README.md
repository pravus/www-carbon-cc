# Description

This project builds the root of [www.carbon.cc](www.carbon.cc).
It is implemented as a Docker container running NGINX and is ready for deployment to Kubernetes.

# Building Locally

The site can be run locally through Docker and by default listens on port 8000.

```bash
docker build -t www-carbon-cc:latest . && docker run --name=www-carbon-cc --rm -it --publish=8000:8000 www-carbon-cc:latest
```

Once running you can connect on port 8000 using [http://localhost:8000/](http://localhost:8000/).
