import { connectToDatabase } from '../lib/db.js';
import { authenticateRequest } from '../lib/auth.js';
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const decoded = authenticateRequest(req);
    
    if (!decoded) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const { doctorId, date, time, reason, patientName, patientPhone, patientEmail } = req.body;

    if (!doctorId || !date || !time || !reason) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const { db } = await connectToDatabase();
    const appointments = db.collection('appointments');
    const doctors = db.collection('doctors');

    const doctor = await doctors.findOne({ _id: new ObjectId(doctorId) });
    if (!doctor) {
      return res.status(404).json({ error: 'Doctor not found' });
    }

    const appointmentDate = new Date(date);
    const appointmentTime = time;

    const existingAppointment = await appointments.findOne({
      doctorId: new ObjectId(doctorId),
      date: appointmentDate.toISOString().split('T')[0],
      time: appointmentTime,
      status: { $in: ['pending', 'confirmed'] }
    });

    if (existingAppointment) {
      return res.status(400).json({ error: 'Time slot already booked' });
    }

    const appointment = {
      userId: new ObjectId(decoded.userId),
      doctorId: new ObjectId(doctorId),
      doctorName: doctor.name,
      doctorSpeciality: doctor.speciality,
      date: appointmentDate.toISOString().split('T')[0],
      time: appointmentTime,
      reason: reason,
      patientName: patientName || '',
      patientPhone: patientPhone || '',
      patientEmail: patientEmail || '',
      status: 'pending',
      paymentStatus: 'pending',
      amount: doctor.fees || 0,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    const result = await appointments.insertOne(appointment);

    return res.status(201).json({
      success: true,
      appointment: {
        id: result.insertedId.toString(),
        ...appointment,
        userId: appointment.userId.toString(),
        doctorId: appointment.doctorId.toString()
      }
    });
  } catch (error) {
    console.error('Create appointment error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}






