from db import db


class Tour(db.Model):
    __tablename__ = "tours"

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(120), nullable=False)
    location = db.Column(db.String(120), nullable=False)
    price = db.Column(db.Float, nullable=False)
    days = db.Column(db.Integer, nullable=False)
    image = db.Column(db.String(500), nullable=True)
    description = db.Column(db.Text, nullable=False)

    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "location": self.location,
            "price": self.price,
            "days": self.days,
            "image": self.image,
            "description": self.description,
        }