# Frontend Integration Examples

Here are examples of how to integrate the backend API into your React components.

## 1. Update Login Component

```javascript
// src/pages/Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authAPI } from "../lib/api";

const Login = () => {
  const navigate = useNavigate();
  const [state, setState] = useState('Sign Up');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      let result;
      
      if (state === 'Sign Up') {
        result = await authAPI.register({
          name: formData.name,
          email: formData.email,
          password: formData.password,
          phone: formData.phone || ''
        });
      } else {
        result = await authAPI.login(formData.email, formData.password);
      }

      if (result.success) {
        localStorage.setItem('token', result.token);
        localStorage.setItem('user', JSON.stringify(result.user));
        navigate('/');
        window.location.reload();
      }
    } catch (err) {
      setError(err.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="min-h-[80vh] flex items-center px-4">
      <div className="flex flex-col gap-3 m-auto items-center sm:items-start p-6 sm:p-8 w-full max-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg">
        <p className="text-xl sm:text-2xl font-semibold text-center sm:text-left w-full">
          {state === 'Sign Up' ? "Create Account" : "Login"}
        </p>
        
        {error && (
          <div className="w-full p-2 bg-red-100 text-red-700 rounded">
            {error}
          </div>
        )}

        {state === "Sign Up" && (
          <div className="w-full">
            <p>Full Name</p>
            <input
              className="border border-zinc-300 rounded w-full p-2 mt-1"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
          </div>
        )}
        
        <div className="w-full">
          <p>Email</p>
          <input
            className="border border-zinc-300 rounded w-full p-2 mt-1"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            required
          />
        </div>
        
        <div className="w-full">
          <p>Password</p>
          <input
            className="border border-zinc-300 rounded w-full p-2 mt-1"
            type="password"
            value={formData.password}
            onChange={(e) => setFormData({...formData, password: e.target.value})}
            required
          />
        </div>
        
        <button
          type="submit"
          disabled={loading}
          className="bg-primary text-white w-full py-2 rounded-md text-base disabled:opacity-50"
        >
          {loading ? 'Loading...' : (state === 'Sign Up' ? "Create Account" : "Login")}
        </button>
        
        {state === "Sign Up" ? (
          <p>
            Already have an account?{' '}
            <span
              onClick={() => setState('Login')}
              className="text-primary underline cursor-pointer"
            >
              Login here
            </span>
          </p>
        ) : (
          <p>
            Create a New account?{' '}
            <span
              onClick={() => setState('Sign Up')}
              className="text-primary underline cursor-pointer"
            >
              Click here
            </span>
          </p>
        )}
      </div>
    </form>
  );
};

export default Login;
```

## 2. Update Appointment Booking

```javascript
// src/pages/Appointment.jsx (add booking form)
import { useState } from "react";
import { appointmentAPI } from "../lib/api";

const AppointmentBooking = ({ doctorId, doctorFees }) => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    reason: '',
    patientName: '',
    patientPhone: ''
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await appointmentAPI.create({
        doctorId,
        date: formData.date,
        time: formData.time,
        reason: formData.reason,
        patientName: formData.patientName,
        patientPhone: formData.patientPhone
      });

      if (result.success) {
        alert('Appointment booked successfully!');
        // Redirect or show success message
      }
    } catch (error) {
      alert('Error: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Form fields */}
      <input
        type="date"
        value={formData.date}
        onChange={(e) => setFormData({...formData, date: e.target.value})}
        required
      />
      {/* ... other fields ... */}
      <button type="submit" disabled={loading}>
        {loading ? 'Booking...' : 'Book Appointment'}
      </button>
    </form>
  );
};
```

## 3. Update My Appointments Page

```javascript
// src/pages/myappointment.jsx
import { useEffect, useState } from "react";
import { appointmentAPI } from "../lib/api";

const Myappointment = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const result = await appointmentAPI.list();
      if (result.success) {
        setAppointments(result.appointments);
      }
    } catch (error) {
      console.error('Error fetching appointments:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = async (appointmentId) => {
    if (!confirm('Are you sure you want to cancel this appointment?')) {
      return;
    }

    try {
      await appointmentAPI.cancel(appointmentId);
      fetchAppointments();
      alert('Appointment cancelled successfully');
    } catch (error) {
      alert('Error: ' + error.message);
    }
  };

  if (loading) {
    return <div>Loading appointments...</div>;
  }

  return (
    <div>
      <p className="pb-3 mt-12 font-medium text-zinc-700 border-b">
        My appointments
      </p>
      <div>
        {appointments.length === 0 ? (
          <p>No appointments found</p>
        ) : (
          appointments.map((appointment) => (
            <div key={appointment.id} className="grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b">
              <div className="flex-1 text-sm text-zinc-600">
                <p className="text-neutral-800 font-semibold">
                  {appointment.doctorName}
                </p>
                <p>{appointment.doctorSpeciality}</p>
                <p className="text-sm mt-1">
                  <span className="text-sm text-neutral-700 font-medium">
                    Date & Time:
                  </span>{' '}
                  {appointment.date} | {appointment.time}
                </p>
                <p className="text-sm">
                  Status: <span className="font-medium">{appointment.status}</span>
                </p>
              </div>
              <div className="flex flex-col gap-2 justify-end">
                {appointment.paymentStatus === 'pending' && (
                  <button className="text-sm text-stone-500 text-center sm:min-w-48 py-2 border hover:bg-primary hover:text-white transition-all duration-300 rounded">
                    Pay Online
                  </button>
                )}
                {appointment.status !== 'cancelled' && (
                  <button
                    onClick={() => handleCancel(appointment.id)}
                    className="text-sm text-stone-500 text-center sm:min-w-48 py-2 border hover:bg-red-600 hover:text-white transition-all duration-300 rounded"
                  >
                    Cancel appointment
                  </button>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Myappointment;
```

## 4. Update Profile Page

```javascript
// src/pages/Profile.jsx
import { useEffect, useState } from "react";
import { userAPI } from "../lib/api";

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const result = await userAPI.getProfile();
      if (result.success) {
        setUserData(result.user);
      }
    } catch (error) {
      console.error('Error fetching profile:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    try {
      const result = await userAPI.updateProfile({
        name: userData.name,
        phone: userData.phone,
        address: userData.address,
        gender: userData.gender,
        dob: userData.dob
      });

      if (result.success) {
        setUserData(result.user);
        setIsEdit(false);
        alert('Profile updated successfully');
      }
    } catch (error) {
      alert('Error: ' + error.message);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!userData) {
    return <div>Error loading profile</div>;
  }

  // ... rest of your component JSX
};
```

## 5. Add Auth Protection

Create a protected route wrapper:

```javascript
// src/components/ProtectedRoute.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authAPI } from "../lib/api";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const token = localStorage.getItem('token');
    
    if (!token) {
      navigate('/login');
      return;
    }

    try {
      const result = await authAPI.verify();
      if (result.success) {
        setAuthenticated(true);
      } else {
        localStorage.removeItem('token');
        navigate('/login');
      }
    } catch (error) {
      localStorage.removeItem('token');
      navigate('/login');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return authenticated ? children : null;
};

export default ProtectedRoute;
```

Then use it in App.jsx:

```javascript
import ProtectedRoute from './components/ProtectedRoute';

// In your routes:
<Route
  path="/profile"
  element={
    <ProtectedRoute>
      <Profile />
    </ProtectedRoute>
  }
/>
```






