FROM ruby:3.1.2

RUN apt-get update && apt-get install -y npm && npm install -g yarn

# RUN mkdir -p /var/app
# COPY . /var/app
# WORKDIR /var/app
WORKDIR /app
COPY Gemfile Gemfile.lock ./
RUN bundle install

COPY . .

CMD rails s -b 0.0.0.0