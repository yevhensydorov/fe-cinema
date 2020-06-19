FROM golang:alpine

WORKDIR /
COPY .env .env
RUN apk add git
RUN go get -d github.com/gorilla/mux
RUN go get github.com/joho/godotenv

# Copy the local package files to the container's workspace.
ADD . /go/src/be-cinema

RUN go install /go/src/be-cinema

# Run the outyet command by default when the container starts.
ENTRYPOINT /go/bin/be-cinema

CMD ["go","run","./main.go"]

EXPOSE 8080