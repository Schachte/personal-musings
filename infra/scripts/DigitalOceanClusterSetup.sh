<<'
  ___                _     ___  _             ___        _            
 | . \ _ _  ___ ._ _|/___ | . >| | ___  ___  / __> ___ _| |_ _ _  ___ 
 |   /| | |<_> || ' |<_-< | . \| |/ . \/ . | \__ \/ ._> | | | | || . \
 |_\_\`_. |<___||_|_|/__/ |___/|_|\___/\_. | <___/\___. |_| `___||  _/
      <___'                            <___'                     |_|  

 ENVIRONMENT: Development

 Super simple script that helps version some of the initial setup for K8
 cluster creation on Digital Ocean ecosystem. 

 - Creates kubernetes cluster and sets context in default project
 - Adds domain to account if doesn't exist
 - Applies development-grade Ingress to cluster
'

echo 'Setting up Digital Ocean cluster on development environment'
echo 'ETA: 5 minutes'

# Create single-node cluster on Digital Ocean 
doctl kubernetes cluster create ryan-schachte-personal --count 1

<<'
 Add sub-domain for development domain 
 Will need to manually add A-record and CNAME and attach record to load balancer
    1) Networking -> A -> Set HOSTNAME to @ with redirect to LB with 30 s TTL  
    2) Networking -> CNAME -> WWW with 30 s TTL
    3) LB redirect using GCloud domain DNS should resolve now
'
doctl compute domain create dev.ryan-schachte.com

# Install Nginx Ingress
k apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v0.35.0/deploy/static/provider/do/deploy.yaml


