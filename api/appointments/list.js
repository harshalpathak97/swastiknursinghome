import { connectToDatabase } from '../lib/db.js';
import { authenticateRequest } from '../lib/auth.js';
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const decoded = authenticateRequest(req);
    
    if (!decoded) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const { db } = await connectToDatabase();
    const appointments = db.collection('appointments');

    const userAppointments = await appointments
      .find({ userId: new ObjectId(decoded.userId) })
      .sort({ date: -1, time: -1 })
      .toArray();

    const formattedAppointments = userAppointments.map(apt => ({
      id: apt._id.toString(),
      doctorId: apt.doctorId.toString(),
      doctorName: apt.doctorName,
      doctorSpeciality: apt.doctorSpeciality,
      date: apt.date,
      time: apt.time,
      reason: apt.reason,
      status: apt.status,
      paymentStatus: apt.paymentStatus,
      amount: apt.amount,
      createdAt: apt.createdAt
    }));

    return res.status(200).json({
      success: true,
      appointments: formattedAppointments
    });
  } catch (error) {
    console.error('List appointments error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}






