# Backend Setup Guide - Vercel Serverless Functions

This project uses Vercel Serverless Functions for the backend API. Follow these steps to set it up.

## Prerequisites

1. **MongoDB Atlas Account** (Free tier available)
   - Sign up at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
   - Create a free cluster
   - Get your connection string

2. **Vercel Account** (Already connected)

## Setup Steps

### 1. Install Dependencies

```bash
npm install
```

This will install:
- `mongodb` - Database driver
- `jsonwebtoken` - JWT authentication
- `bcryptjs` - Password hashing

### 2. Set Up MongoDB

1. Go to MongoDB Atlas dashboard
2. Create a new cluster (free tier is fine)
3. Click "Connect" → "Connect your application"
4. Copy the connection string
5. Replace `<password>` with your database password
6. Add your IP address to the whitelist (or use 0.0.0.0/0 for development)

### 3. Configure Environment Variables

#### For Local Development

Create a `.env` file in the root directory:

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/?retryWrites=true&w=majority
MONGODB_DB=swastik_nursing
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
FRONTEND_URL=http://localhost:5173
```

#### For Vercel Deployment

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add the following variables:
   - `MONGODB_URI` - Your MongoDB connection string
   - `MONGODB_DB` - Database name (default: `swastik_nursing`)
   - `JWT_SECRET` - A random secret string for JWT tokens
   - `FRONTEND_URL` - Your frontend URL (optional)

### 4. Database Collections

The API will automatically create these collections when you use them:
- `users` - User accounts
- `appointments` - Appointment bookings
- `payments` - Payment records
- `doctors` - Doctor information (you can seed this manually)

### 5. Seed Initial Data (Optional)

You can manually add doctor data to MongoDB or create a seed script:

```javascript
// Example doctor document structure
{
  _id: ObjectId("..."),
  name: "Dr. Amit Shah",
  degree: "MD Pediatrics",
  speciality: "Pediatrician",
  fees: 800,
  experience: "10+ years",
  about: "Experienced pediatrician...",
  image: "/path/to/image.png"
}
```

## API Endpoints

### Authentication

- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/verify` - Verify JWT token

### Appointments

- `POST /api/appointments/create` - Create appointment
- `GET /api/appointments/list` - List user appointments
- `GET /api/appointments/[id]` - Get appointment details
- `PUT /api/appointments/[id]` - Update appointment
- `DELETE /api/appointments/[id]` - Cancel appointment

### User Profile

- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile

### Payments

- `POST /api/payment/create-order` - Create payment order
- `POST /api/payment/verify` - Verify payment

## Testing the API

### Using curl:

```bash
# Register
curl -X POST http://localhost:5173/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","password":"password123","phone":"1234567890"}'

# Login
curl -X POST http://localhost:5173/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}'
```

### Using the Frontend API Client

The frontend includes an API client in `src/lib/api.js`:

```javascript
import { authAPI, appointmentAPI } from './lib/api';

// Register
const result = await authAPI.register({
  name: 'John Doe',
  email: 'john@example.com',
  password: 'password123',
  phone: '1234567890'
});

// Login
const result = await authAPI.login('john@example.com', 'password123');
localStorage.setItem('token', result.token);

// Create appointment
const appointment = await appointmentAPI.create({
  doctorId: 'doctor-id',
  date: '2024-12-25',
  time: '10:00 AM',
  reason: 'Regular checkup'
});
```

## Deployment

1. Push your code to GitHub
2. Vercel will automatically detect the API routes in the `/api` folder
3. Add environment variables in Vercel dashboard
4. Deploy!

## Troubleshooting

### API Routes Not Working

- Make sure `vercel.json` includes the API rewrite rule
- Check that files are in `/api` folder (not `/src/api`)
- Verify environment variables are set in Vercel

### Database Connection Issues

- Verify MongoDB URI is correct
- Check IP whitelist in MongoDB Atlas
- Ensure database user has proper permissions

### Authentication Issues

- Verify JWT_SECRET is set
- Check token is being sent in Authorization header
- Ensure token format: `Bearer <token>`

## Next Steps

1. Integrate the API calls into your React components
2. Update Login.jsx to use `authAPI.login()`
3. Update Appointment.jsx to use `appointmentAPI.create()`
4. Add error handling and loading states
5. Implement payment gateway (Razorpay/Stripe)






