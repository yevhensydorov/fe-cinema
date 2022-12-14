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

//Movie struct describes properties of the movie in the list of movies
type Movie struct {
	Title  string `json:"title"`
	Year   string `json:"year"`
	ImdbID string `json:"imdbID"`
	Poster string `json:"poster"`
}

//MovieDetails struct describes details for the one movie
type MovieDetails struct {
	Title    string    `json:"title"`
	Year     string    `json:"year"`
	Released string    `json:"released"`
	Runtime  string    `json:"runtime"`
	Genre    string    `json:"genre"`
	Director string    `json:"director"`
	Actors   string    `json:"actors"`
	Plot     string    `json:"plot"`
	Poster   string    `json:"poster"`
	Ratings  []Ratings `json:"ratings"`
}

//Ratings struct describes the structure of ratings list for each movie
type Ratings struct {
	Source string `json:"source"`
	Value  string `json:"value"`
}

//AllMovies struct describe the list of movies
type AllMovies struct {
	Movie []Movie `json:"search"`
}

func init() {
	if err := godotenv.Load(); err != nil {
		log.Print("No .env file found")
	}
}

//GetMovies function is for getting movies array from api
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

//GetMovieDetails function is for getting detail info for the one movie
func GetMovieDetails(w http.ResponseWriter, r *http.Request) {
	var movieDetail MovieDetails

	movieAPIURL := os.Getenv("API_URL")
	movieAPIKey := os.Getenv("API_KEY")
	vars := mux.Vars(r)
	movieID := vars["movieId"]

	resp, err := http.Get(movieAPIURL + movieAPIKey + "&i=" + movieID)

	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		log.Print("Can't get details of the movie", err)
	}

	bytes, err := ioutil.ReadAll(resp.Body)

	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		log.Print("Can't fetch movie details", err)
	}

	if err := json.Unmarshal(bytes, &movieDetail); err != nil {
		fmt.Println("Error parsing json", err)
	}

	// Allow CORS here By * or specific origin
	w.Header().Set("Access-Control-Allow-Origin", "*")

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(movieDetail)
}
