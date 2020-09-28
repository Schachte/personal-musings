# Ryan Schachte's Blog 

### Statuses
| Service | Status |  Description
|--|--| --|
| Posts  | ![deploy-posts](https://github.com/Schachte/personal-musings/workflows/deploy-posts/badge.svg?branch=master)| Handles all functionality relevant to the blog side of things
| Comments  | ![deploy-posts](https://github.com/Schachte/personal-musings/workflows/deploy-posts/badge.svg?branch=master)| Comment management, moderation and rate limiting
| Authentication  | ![deploy-posts](https://github.com/Schachte/personal-musings/workflows/deploy-posts/badge.svg?branch=master)| JWT Auth management to handle sessions and authentication, mostly for administrative management
| Metrics and Logging  | ![deploy-posts](https://github.com/Schachte/personal-musings/workflows/deploy-posts/badge.svg?branch=master)| All metrics, statistics and logging management are managed in isolated container
| Scheduler  | ![deploy-posts](https://github.com/Schachte/personal-musings/workflows/deploy-posts/badge.svg?branch=master)| Cron-based scheduler jobs are handled in separate node to facilitate updating specific pieces of the site, run batch metric jobs and send alerts, emails, etc.

👋 I'm Ryan Schachte and this is the source-code to my blog, or rather, the source code to my playground of applications and projects that I build and deploy to a distributed Kubernetes cluster to try and learn new and fun technologies. Some things you'll most likely find in here are:

- Multi-node cluster configuration for Kubernetes
- Automated dockerization for micro-services running within the cluster
	- Blog
	- Posts
	- Scheduler
	- Video Management
- Java, Node.JS, React, CSS, HTML, Python, other various technology
- Persistent & distributed database setup with Postgres/PGAdmin



