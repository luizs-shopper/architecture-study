FROM node:16 as base

RUN mkdir /opt/architecture
WORKDIR /opt/architecture

RUN apt update \
    && export DEBIAN_FRONTEND=noninteractive \
    && apt install -y apt-utils \
    && apt install -y --no-install-recommends locales build-essential

RUN cp /usr/share/zoneinfo/Brazil/East /etc/localtime
RUN echo "Brazil/East" > /etc/timezone
RUN export LC_ALL=pt_BR.UTF-8
RUN export LANG=pt_BR.UTF-8
RUN sed -i '/^#.* pt_BR.UTF-8 /s/^#//' /etc/locale.gen
RUN locale-gen

COPY ./package.json /opt/architecture
RUN yarn install --production

COPY . /opt/architecture/
ENV PORT=80
EXPOSE 80

#### PRODUCTION
FROM base AS production
RUN yarn build
CMD yarn start

#### TEST
FROM base as testing
RUN yarn install
CMD yarn test

#### DEVELOPMENT
FROM base as development
WORKDIR /opt/architecture
ENV DEBUG_PORT=9320
EXPOSE 9320
RUN yarn install
CMD yarn dev