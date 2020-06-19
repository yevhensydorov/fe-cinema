package main

import (
	api "be-cinema/api"
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/gorilla/mux"
	"github.com/joho/godotenv"
)

func init() {
	if err := godotenv.Load(); err != nil {
		log.Print("No .env file found")
	}
}

func main() {
	r := mux.NewRouter()
	r.HandleFunc("/movies/{movieName}", api.GetMovies).Methods("GET")
	http.Handle("/", r)

	fmt.Println("Server is running on port: 8080")
	log.Fatal(http.ListenAndServe(os.Getenv("SERVER_PORT"), nil))
}
