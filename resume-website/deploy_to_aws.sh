aws lightsail push-container-image \
    --region us-east-1 \
    --service-name resume-site-container-service \
    --image resume-website:latest \
    --label resume-website

# warning: AWS Lightsail is built on x86, so you can't push Docker images from ARM Macs