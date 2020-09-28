# Ryans SSL Setup Explained 

The SSL used is issued via the Lets Encrypt CA. The management is automatically managed via cert-manager and supports 90-day
automatic renewals for the cluster. 

1. Check cert-manager docs for upgrades/removals
2. Update the ingress rule-set for specifying the domains to be used
3. Delete any old secrets (Might be good to change secret name for prod cert issuance)
4. Test on the staging endpoint to avoid usage limits against lets encrypt issuance server
5. Apply the Issuer `k apply -f Issuer.yml` after the cert has been created via ingress updates
6. Check status via `k get certificaterequests` and `k get certificates` to debug any issue failures