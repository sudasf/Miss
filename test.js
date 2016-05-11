server {
                listen 80;
                server_name www.91jiayunt.com;
                location / {
                        proxy_pass http://localhost:3000/;
                }
        }