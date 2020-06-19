package api

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"os"

	"github.com/gorilla/mux"
	"github.com/joho/godotenv"
)

//Movie struct describes properties of the movie
type Movie struct {
	Title  string
	Year   string
	ImdbID string `json:"imdbID"`
	Poster string
}

//AllMovies struct describe the list of movies
type AllMovies struct {
	Movie []Movie `json:"Search"`
}

func init() {
	if err := godotenv.Load(); err != nil {
		log.Print("No .env file found")
	}
}

// GetMovies function is for getting movies array from api
func GetMovies(w http.ResponseWriter, r *http.Request) {
	var movies AllMovies

	movieAPIURL := os.Getenv("API_URL")
	movieAPIKey := os.Getenv("API_KEY")
	vars := mux.Vars(r)
	movieName := vars["movieName"]

	resp, err := http.Get(movieAPIURL + movieAPIKey + "&s=" + movieName)

	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		log.Print("Can't get the list of movies", err)
	}

	bytes, err := ioutil.ReadAll(resp.Body)

	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		log.Print("Can't fetch movies", err)
	}

	if err := json.Unmarshal(bytes, &movies); err != nil {
		fmt.Println("Error parsing json", err)
	}

	//Allow CORS here By * or specific origin
	w.Header().Set("Access-Control-Allow-Origin", "*")

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(movies)
}
