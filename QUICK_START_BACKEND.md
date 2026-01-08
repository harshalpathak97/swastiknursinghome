# Quick Start - Backend Setup

## ✅ What's Been Set Up

1. **API Folder Structure** - All serverless functions created in `/api`
2. **Authentication** - Login, Register, Verify endpoints
3. **Appointments** - Create, List, Update, Cancel endpoints
4. **User Profile** - Get and Update endpoints
5. **Payment** - Create order and verify endpoints
6. **Frontend API Client** - Ready-to-use in `src/lib/api.js`
7. **Dependencies Installed** - mongodb, jsonwebtoken, bcryptjs

## 🚀 Next Steps (Required)

### 1. Set Up MongoDB Atlas (5 minutes)

1. Go to [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Sign up (free tier available)
3. Create a cluster
4. Click "Connect" → "Connect your application"
5. Copy the connection string
6. Replace `<password>` with your password

### 2. Add Environment Variables

#### Option A: For Vercel (Production)

1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add these variables:

```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/...
MONGODB_DB=swastik_nursing
JWT_SECRET=your-random-secret-key-here
```

#### Option B: For Local Development

Create `.env` file in project root:

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/...
MONGODB_DB=swastik_nursing
JWT_SECRET=your-random-secret-key-here
```

**Note:** `.env` files are gitignored, so create it manually.

### 3. Test the API

After deploying to Vercel or running locally:

```bash
# Test register endpoint
curl -X POST https://your-app.vercel.app/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.com","password":"test123","phone":"1234567890"}'
```

### 4. Integrate Frontend

See `INTEGRATION_EXAMPLE.md` for code examples to update:
- `src/pages/Login.jsx`
- `src/pages/myappointment.jsx`
- `src/pages/Profile.jsx`

## 📁 API Structure

```
api/
├── lib/
│   ├── db.js          # MongoDB connection
│   └── auth.js        # JWT & password utilities
├── auth/
│   ├── register.js    # POST /api/auth/register
│   ├── login.js       # POST /api/auth/login
│   └── verify.js      # GET /api/auth/verify
├── appointments/
│   ├── create.js      # POST /api/appointments/create
│   ├── list.js        # GET /api/appointments/list
│   └── [id].js        # GET/PUT/DELETE /api/appointments/:id
├── users/
│   └── profile.js     # GET/PUT /api/users/profile
└── payment/
    ├── create-order.js # POST /api/payment/create-order
    └── verify.js       # POST /api/payment/verify
```

## 🔑 API Usage Examples

### Frontend API Client (Already Created)

```javascript
import { authAPI, appointmentAPI, userAPI } from './lib/api';

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

// Create Appointment
const appointment = await appointmentAPI.create({
  doctorId: 'doctor-id',
  date: '2024-12-25',
  time: '10:00 AM',
  reason: 'Checkup'
});
```

## ⚠️ Important Notes

1. **JWT_SECRET**: Use a strong random string in production
2. **MongoDB IP Whitelist**: Add `0.0.0.0/0` for Vercel or specific IPs
3. **CORS**: Already handled by Vercel
4. **Token Storage**: Store JWT in localStorage (already in API client)

## 🐛 Troubleshooting

**API not working?**
- Check environment variables in Vercel
- Verify MongoDB connection string
- Check Vercel function logs

**Authentication failing?**
- Verify JWT_SECRET is set
- Check token format: `Bearer <token>`
- Ensure token is in localStorage

**Database errors?**
- Verify MongoDB URI is correct
- Check IP whitelist in MongoDB Atlas
- Ensure database user has permissions

## 📚 Full Documentation

- `BACKEND_SETUP.md` - Detailed setup guide
- `INTEGRATION_EXAMPLE.md` - Frontend integration examples






