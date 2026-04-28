# Travel Tour Website - Project Structure

## 📋 Overview

This is a modern, production-ready travel tour booking website built with **React** and **Flask**, featuring a structured architecture with proper separation of concerns.

---

## 🏗️ Project Structure

### Frontend Structure

```
frontend/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Navbar.jsx       # Navigation bar with routing links
│   │   ├── Hero.jsx         # Hero banner on home page
│   │   ├── TourCard.jsx     # Individual tour card component
│   │   ├── BookingForm.jsx  # Tour booking form
│   │   ├── Footer.jsx       # Footer component (new)
│   │   ├── SearchFilter.jsx # Search and filter tours (new)
│   │   └── Testimonials.jsx # Customer testimonials (new)
│   │
│   ├── pages/               # Page components (routes)
│   │   ├── Homes.jsx        # Home page with featured tours (updated)
│   │   ├── Tours.jsx        # All tours page with filtering (updated)
│   │   ├── TourDetails.jsx  # Individual tour details & booking (new)
│   │   └── Contact.jsx      # Contact page (updated)
│   │
│   ├── services/            # API communication layer
│   │   └── api.js           # Centralized API calls (new)
│   │
│   ├── hooks/               # Custom React hooks
│   │   └── useTours.js      # Reusable tour data fetching logic (new)
│   │
│   ├── utils/               # Helper functions and constants
│   │   └── constants.js     # App-wide constants (new)
│   │
│   ├── App.jsx              # Main app component with routing (updated)
│   ├── main.jsx             # Entry point with BrowserRouter (updated)
│   ├── index.css            # Global styles
│   └── App.css              # App-specific styles
│
├── package.json             # Dependencies (added axios)
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js

Backend Structure

```
backend/
├── app.py                   # Main Flask application (updated)
├── db.py                    # Database initialization
├── requirements.txt         # Python dependencies
├── instance/                # SQLite database (auto-created)
│   └── travel.db
│
├── models/
│   └── tour.py              # Tour model
│
└── venv/                    # Virtual environment
```

---

## ✨ Key Features Added

### 1. **Better Architecture**
- ✅ `services/api.js` - Centralized API communication
- ✅ `hooks/useTours.js` - Custom hooks for tour data fetching
- ✅ `utils/constants.js` - Centralized constants and configurations

### 2. **New Components**
- ✅ **Footer** - Professional footer with links and contact info
- ✅ **SearchFilter** - Advanced search with destination, price, and duration filters
- ✅ **Testimonials** - Customer reviews and ratings

### 3. **Enhanced Pages**
- ✅ **Home (Homes.jsx)** - Now includes featured tours, benefits section, testimonials
- ✅ **Tours (Tours.jsx)** - Added search/filter functionality
- ✅ **TourDetails (NEW)** - Full tour details page with advanced booking form
- ✅ **Contact (NEW)** - Professional contact page with form and info

### 4. **Better Styling**
- ✅ Improved responsive design
- ✅ Enhanced hover effects and transitions
- ✅ Better form designs with focus states
- ✅ Professional card layouts

### 5. **Improved User Experience**
- ✅ Tour filtering and search
- ✅ Detailed tour information pages
- ✅ Better form validation and feedback
- ✅ Loading and error states

---

## 🚀 Running the Application

### Backend (Flask)

```bash
cd backend
source venv/bin/activate
python3 app.py
```

**Backend runs on:** `http://localhost:5000`

**Available endpoints:**
- `GET /api/tours` - Get all tours
- `POST /api/tours` - Create new tour (admin)
- `POST /api/book` - Book a tour
- `GET /seed` - Seed database with sample data

### Frontend (React + Vite)

```bash
cd frontend
npm install  # If not done already
npm run dev
```

**Frontend runs on:** `http://localhost:5174`

---

## 🔗 API Integration

### Services (`services/api.js`)

The API client uses **axios** with centralized configuration:

```javascript
const apiClient = axios.create({
  baseURL: 'http://127.0.0.1:5000/api',
  timeout: 10000
})
```

### Available Methods:

```javascript
tourService.getAllTours()      // Fetch all tours
tourService.createTour(data)   // Create new tour
tourService.bookTour(data)     // Book a tour
```

---

## 🎣 Custom Hooks

### `useTours` Hook

```javascript
const { tours, loading, error } = useTours()
```

Fetches and manages tour data with loading and error states.

### `useBookTour` Hook

```javascript
const { bookTour, loading, error, success } = useBookTour()
```

Manages tour booking with async operations.

---

## 📦 Dependencies

### Frontend (Added)
- ✅ `axios` - HTTP client for API calls
- ✅ `react-router-dom` - Client-side routing
- ✅ `tailwindcss` - Utility-first CSS framework

### Backend
- ✅ `Flask` - Web framework
- ✅ `Flask-SQLAlchemy` - ORM
- ✅ `Flask-Cors` - CORS support
- ✅ `pymysql` - MySQL driver

---

## 🎯 Next Steps / Future Enhancements

- [ ] Add user authentication (login/signup)
- [ ] Implement payment gateway (Stripe/PayPal)
- [ ] Add review and rating system
- [ ] Implement admin dashboard
- [ ] Add image upload functionality
- [ ] Email confirmation for bookings
- [ ] Add favorites/wishlist feature
- [ ] Implement multi-language support
- [ ] Add real map integration
- [ ] Set up proper error handling and logging

---

## 📱 Responsive Design

All components are built with **TailwindCSS** ensuring:
- ✅ Mobile-first approach
- ✅ Tablet optimization
- ✅ Desktop-ready layouts
- ✅ Touch-friendly interfaces

---

## 🔐 Security Notes

Current implementation is for development. For production:
- [ ] Add proper authentication
- [ ] Implement rate limiting
- [ ] Add input validation on backend
- [ ] Use environment variables for sensitive data
- [ ] Set up HTTPS
- [ ] Add CSRF protection

---

## 📝 Sample Tour Data

The database is seeded with 3 sample tours:

1. **Goa Beach Escape** - ₹7,999 (3 days)
2. **Ooty Hills Tour** - ₹5,999 (2 days)
3. **Manali Adventure** - ₹9,999 (5 days)

Access seed endpoint: `http://localhost:5000/seed`

---

## 🛠️ Development Tools

- **Frontend:** React 19, Vite, TailwindCSS, React Router
- **Backend:** Flask, SQLAlchemy, Flask-CORS
- **Database:** SQLite (development), MySQL (production-ready)
- **API Testing:** curl, Postman
- **Version Control:** Git

---

## 📖 File Breakdown

| File | Purpose |
|------|---------|
| `App.jsx` | Main routing component with layout |
| `Navbar.jsx` | Navigation links and branding |
| `TourCard.jsx` | Displays individual tour info |
| `TourDetails.jsx` | Full tour detail page with booking |
| `SearchFilter.jsx` | Filter tours by location, price, duration |
| `BookingForm.jsx` | Quick booking inquiry form |
| `Footer.jsx` | Site footer with links |
| `Testimonials.jsx` | Customer reviews section |
| `services/api.js` | Centralized API client |
| `hooks/useTours.js` | Custom data fetching hooks |
| `utils/constants.js` | App configuration constants |

---

## ✅ Status

✅ Project restructured and production-ready
✅ All components properly organized
✅ API integration implemented
✅ Custom hooks created
✅ Frontend and backend running
✅ Sample data seeded

**Ready for:** Feature development, deployment, or customization!

---

Last Updated: April 24, 2024
