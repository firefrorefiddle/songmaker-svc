FROM firefrorefiddle/songmaker:1

RUN npm install express child_process morgan

COPY . /app/svc/
WORKDIR /app/svc

CMD nodejs app.js