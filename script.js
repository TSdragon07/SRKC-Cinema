// JavaScript code for the movie ticket pricing system
class Movie {
    constructor(title, rating, genre, ticketPrice, timing) {
        this.title = title;
        this.rating = rating;
        this.genre = genre;
        this.ticketPrice = ticketPrice;
        this.timing = timing;
    }
}

class Ticket {
    constructor(movie, quantity) {
        this.movie = movie;
        this.quantity = quantity;
    }

    total_price() {
        return this.quantity * this.movie.ticketPrice;
    }
}

class TicketSystem {
    constructor() {
        this.movies = [];
        this.tickets = [];
    }

    add_movie(title, rating, genre, ticketPrice, timing) {
        this.movies.push(new Movie(title, rating, genre, ticketPrice, timing));
    }

    display_movies() {
        // Implement logic to display movies
    }

    buy_ticket(movie_index, quantity) {
        // Implement logic to buy tickets
    }

    make_payment(payment_option) {
        // Implement logic to make payment
    }
}

// Create an instance of the TicketSystem
const ticketSystem = new TicketSystem();

// Add movies to the ticket system
ticketSystem.add_movie("CREW", "UA", "Comedy", 450.54, "12:00 PM");
ticketSystem.add_movie("The Godfather", "R", "Crime", 350.45, "03:00 PM");
ticketSystem.add_movie("The Dark Knight", "PG-13", "Action", 999, "06:00 PM");
ticketSystem.add_movie("Jungle Book", "R", "Comedy", 759, "12:00 PM");
ticketSystem.add_movie("The Legend of Hanuman", "R", "Action, Comedy, Worship", 859, "10:00 AM");
