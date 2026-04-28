# 🚀 Quick Start Guide - Travel Tour Website

## Prerequisites

- Node.js 16+ 
- Python 3.8+
- npm or yarn

---

## 🏃 Quick Start (5 minutes)

### 1. Clone and Navigate
```bash
cd /Users/admin/Desktop/Projects/travel-tour-app
```

### 2. Start Backend
```bash
cd backend
source venv/bin/activate
python3 app.py
```
✅ Backend ready at: `http://localhost:5000`

### 3. Start Frontend
```bash
cd frontend
npm run dev
```
✅ Frontend ready at: `http://localhost:5174`

### 4. Seed Database (First time only)
```bash
curl http://localhost:5000/seed
```
✅ Database populated with 3 sample tours

---

## 📍 Available Routes

| Route | Purpose |
|-------|---------|
| `/` | Home page with featured tours |
| `/tours` | All tours with search/filter |
| `/tour/:id` | Individual tour details & booking |
| `/contact` | Contact information & form |

---

## 🔌 API Endpoints

### Tours
```bash
GET /api/tours              # Get all tours
POST /api/tours             # Create new tour (admin)
GET /seed                   # Seed database
```

### Bookings
```bash
POST /api/book              # Submit booking inquiry
```

---

## 🎨 Component Hierarchy

```
App
├── Navbar
├── Routes
│   ├── Home (Homes.jsx)
│   │   ├── Hero
│   │   ├── BookingForm
│   │   ├── Featured Tours (TourCards)
│   │   └── Testimonials
│   ├── Tours
│   │   ├── SearchFilter
│   │   └── TourCards Grid
│   ├── TourDetails
│   │   ├── Tour Info
│   │   └── Booking Form
│   └── Contact
│       ├── Contact Info
│       └── Contact Form
└── Footer
```

---

## 📝 Key Files & What They Do

### Frontend

**Components:**
- `Navbar.jsx` - Navigation menu
- `Hero.jsx` - Hero banner image
- `TourCard.jsx` - Tour card display
- `BookingForm.jsx` - Quick booking form
- `SearchFilter.jsx` - Tour filtering
- `Testimonials.jsx` - Customer reviews
- `Footer.jsx` - Site footer

**Pages:**
- `Homes.jsx` - Landing page
- `Tours.jsx` - Tours listing
- `TourDetails.jsx` - Single tour page
- `Contact.jsx` - Contact page

**Services:**
- `services/api.js` - API communication
- `hooks/useTours.js` - Data fetching custom hooks
- `utils/constants.js` - Constants & config

### Backend

- `app.py` - Flask main app with routes
- `models/tour.py` - Tour database model
- `db.py` - Database setup

---

## 🧪 Testing the API

### Get All Tours
```bash
curl http://localhost:5000/api/tours
```

### Book a Tour
```bash
curl -X POST http://localhost:5000/api/book \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "9876543210",
    "destination": "Goa",
    "people": 2,
    "date": "2024-05-15"
  }'
```

---

## 🐛 Troubleshooting

### Frontend Won't Load
```bash
cd frontend
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Backend Port in Use
```bash
lsof -i :5000
kill -9 <PID>
```

### CORS Errors
- Ensure backend is running on port 5000
- Check CORS is enabled in Flask (`Flask-CORS` is installed)

### Database Issues
```bash
# Reset database
rm backend/instance/travel.db
# Reseed
curl http://localhost:5000/seed
```

---

## 📦 Install Dependencies

### First Time Setup

**Backend:**
```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

**Frontend:**
```bash
cd frontend
npm install
```

---

## 🚀 Deployment Ready

The application is structured for production deployment:

- ✅ Environment-ready configuration
- ✅ Scalable component architecture
- ✅ Separated concerns (services, hooks, components)
- ✅ API abstraction layer
- ✅ Error handling
- ✅ Loading states
- ✅ Responsive design

---

## 📚 Project Structure Overview

```
travel-tour-app/
├── backend/                 # Flask API server
│   ├── app.py              # Main app with routes
│   ├── db.py               # Database setup
│   ├── requirements.txt     # Python dependencies
│   ├── models/
│   │   └── tour.py         # Tour model
│   └── venv/               # Virtual environment
│
├── frontend/               # React + Vite app
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/          # Route pages
│   │   ├── services/       # API client
│   │   ├── hooks/          # Custom hooks
│   │   ├── utils/          # Constants & helpers
│   │   └── App.jsx         # Main app
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
└── PROJECT_STRUCTURE.md    # Detailed project guide
```

---

## 💡 Tips

1. **Hot Reload:** Changes to React files auto-refresh in browser
2. **Network:** Access from other devices with `--host` flag in Vite
3. **Database:** SQLite for dev, upgrade to MySQL for production
4. **Styling:** Use TailwindCSS utilities directly in JSX

---

## 🆘 Need Help?

Check these files:
- `PROJECT_STRUCTURE.md` - Detailed architecture
- `backend/app.py` - API endpoints
- `frontend/src/App.jsx` - Routing setup
- `frontend/src/services/api.js` - API client

---

Happy coding! 🎉
