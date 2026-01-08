import { connectToDatabase } from '../lib/db.js';
import { authenticateRequest } from '../lib/auth.js';
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
  const { id } = req.query;
  const decoded = authenticateRequest(req);
  
  if (!decoded) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const { db } = await connectToDatabase();
    const appointments = db.collection('appointments');

    if (req.method === 'GET') {
      const appointment = await appointments.findOne({
        _id: new ObjectId(id),
        userId: new ObjectId(decoded.userId)
      });

      if (!appointment) {
        return res.status(404).json({ error: 'Appointment not found' });
      }

      return res.status(200).json({
        success: true,
        appointment: {
          id: appointment._id.toString(),
          doctorId: appointment.doctorId.toString(),
          doctorName: appointment.doctorName,
          doctorSpeciality: appointment.doctorSpeciality,
          date: appointment.date,
          time: appointment.time,
          reason: appointment.reason,
          status: appointment.status,
          paymentStatus: appointment.paymentStatus,
          amount: appointment.amount,
          createdAt: appointment.createdAt
        }
      });
    }

    if (req.method === 'PUT') {
      const { status, date, time } = req.body;

      const appointment = await appointments.findOne({
        _id: new ObjectId(id),
        userId: new ObjectId(decoded.userId)
      });

      if (!appointment) {
        return res.status(404).json({ error: 'Appointment not found' });
      }

      const updateData = { updatedAt: new Date() };
      
      if (status) updateData.status = status;
      if (date) updateData.date = new Date(date).toISOString().split('T')[0];
      if (time) updateData.time = time;

      await appointments.updateOne(
        { _id: new ObjectId(id) },
        { $set: updateData }
      );

      const updatedAppointment = await appointments.findOne({ _id: new ObjectId(id) });

      return res.status(200).json({
        success: true,
        appointment: {
          id: updatedAppointment._id.toString(),
          doctorId: updatedAppointment.doctorId.toString(),
          doctorName: updatedAppointment.doctorName,
          doctorSpeciality: updatedAppointment.doctorSpeciality,
          date: updatedAppointment.date,
          time: updatedAppointment.time,
          reason: updatedAppointment.reason,
          status: updatedAppointment.status,
          paymentStatus: updatedAppointment.paymentStatus,
          amount: updatedAppointment.amount
        }
      });
    }

    if (req.method === 'DELETE') {
      const appointment = await appointments.findOne({
        _id: new ObjectId(id),
        userId: new ObjectId(decoded.userId)
      });

      if (!appointment) {
        return res.status(404).json({ error: 'Appointment not found' });
      }

      await appointments.updateOne(
        { _id: new ObjectId(id) },
        { $set: { status: 'cancelled', updatedAt: new Date() } }
      );

      return res.status(200).json({
        success: true,
        message: 'Appointment cancelled successfully'
      });
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (error) {
    console.error('Appointment operation error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}






