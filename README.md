<div align="center"><h2>Ryan Schachte's Blog</h2></div>


### Statuses
| Service | Deployment Statuses |  Description
|--|--| --|
| Posts  | ![deploy-posts](https://github.com/Schachte/personal-musings/workflows/deploy-posts/badge.svg?branch=master)| Handles all functionality relevant to the blog side of things


👋 &nbsp;&nbsp; I'm Ryan Schachte and this is the source-code to my blog, or rather, the source code to my playground of applications and projects that I build and deploy to a distributed Kubernetes cluster to try and learn new and fun technologies.


### Run Local

For development, you just need to `brew install skaffold` and have the Docker Daemon running with Kubernetes enabled. Once that is rolling, just simply run `skaffold dev` and the entire cluster will spin up with hot reloading support on _all_ microservices and client-side updates. 

