FROM rockylinux:8

WORKDIR /app

RUN dnf update -y && dnf install -y \
    epel-release

RUN curl --silent --location https://dl.yarnpkg.com/rpm/yarn.repo | tee /etc/yum.repos.d/yarn.repo
RUN rpm --import https://dl.yarnpkg.com/rpm/pubkey.gpg

RUN dnf module enable nodejs:18 -y
RUN dnf install -y vim curl \
    nodejs yarn npm \    
    wget unzip \
    procps iproute

RUN dnf clean all

COPY . .

RUN npm install
ENV PATH=$PATH:/var/www/html/node_modules/.bin/
ENV NODE_OPTIONS="--max-old-space-size=1024"
RUN npm run build
CMD ["npm", "run", "start:prod"]