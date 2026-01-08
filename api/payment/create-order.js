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

    const { appointmentId, amount } = req.body;

    if (!appointmentId || !amount) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const { db } = await connectToDatabase();
    const appointments = db.collection('appointments');
    const payments = db.collection('payments');

    const appointment = await appointments.findOne({
      _id: new ObjectId(appointmentId),
      userId: new ObjectId(decoded.userId)
    });

    if (!appointment) {
      return res.status(404).json({ error: 'Appointment not found' });
    }

    const paymentOrder = {
      appointmentId: new ObjectId(appointmentId),
      userId: new ObjectId(decoded.userId),
      amount: amount,
      status: 'pending',
      paymentMethod: 'online',
      createdAt: new Date(),
      updatedAt: new Date()
    };

    const result = await payments.insertOne(paymentOrder);

    return res.status(201).json({
      success: true,
      orderId: result.insertedId.toString(),
      amount: amount,
      appointmentId: appointmentId
    });
  } catch (error) {
    console.error('Create payment order error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}






