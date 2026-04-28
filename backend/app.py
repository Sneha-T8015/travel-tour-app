from flask import Flask, jsonify, request
from flask_cors import CORS
from db import db
from models.tour import Tour
import os

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 10000))
    app.run(host="0.0.0.0", port=port)
app = Flask(__name__)
CORS(app)

# For SQLite
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///travel.db"

# If you want MySQL instead, comment the SQLite line above and use this:
# app.config["SQLALCHEMY_DATABASE_URI"] = "mysql+pymysql://root:password@localhost/travel_db"

app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db.init_app(app)


@app.route("/", methods=["GET"])
def home():
    return jsonify({"message": "Welcome to the Travel Tour API"}), 200


@app.route("/api/tours", methods=["POST"])
def add_tour():
    data = request.get_json()

    new_tour = Tour(
        title=data["title"],
        location=data["location"],
        price=data["price"],
        days=data["days"],
        image=data.get("image", ""),
        description=data["description"],
    )

    db.session.add(new_tour)
    db.session.commit()

    return jsonify({"message": "Tour added successfully"}), 201


@app.route("/api/tours", methods=["GET"])
def get_tours():
    tours = Tour.query.all()
    return jsonify([tour.to_dict() for tour in tours]), 200


@app.route("/api/book", methods=["POST"])
def book_tour():
    data = request.get_json()

    # For now, just return the submitted data
    # Later we can store bookings in SQL too
    return jsonify({
        "message": "Booking received successfully",
        "booking": data
    }), 201


@app.route("/seed", methods=["GET"])
def seed_data():
    if Tour.query.count() == 0:
        tours = [
            Tour(
                title="Goa Beach Escape",
                location="Goa",
                price=7999,
                days=3,
                image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
                description="Enjoy beaches, water sports, and nightlife in Goa."
            ),
            Tour(
                title="Ooty Hills Tour",
                location="Ooty",
                price=5999,
                days=2,
                image="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
                description="A relaxing hill-station trip with tea gardens and cool weather."
            ),
            Tour(
                title="Manali Adventure",
                location="Manali",
                price=9999,
                days=5,
                image="https://images.unsplash.com/photo-1518002054494-3a6f94352e9d",
                description="Snow, mountains, and adventure sports in Manali."
            )
        ]

        db.session.add_all(tours)
        db.session.commit()
        return jsonify({"message": "Sample tours inserted"})

    return jsonify({"message": "Tours already exist"})


if __name__ == "__main__":
    with app.app_context():
        db.create_all()
    app.run(debug=True)