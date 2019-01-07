FROM node:10.15-alpine
RUN apk --no-cache add \
        tzdata \
        curl &&\
    rm -rf /var/cache/apk/* &&\
    curl -o- -L https://yarnpkg.com/install.sh | sh

WORKDIR /src/app

# Copy application code.
COPY . .

# Install dependencies.
RUN yarn install --pure-lockfile

EXPOSE 3000

CMD [ "yarn", "start" ]
