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

    const { orderId, paymentId, signature } = req.body;

    if (!orderId || !paymentId) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const { db } = await connectToDatabase();
    const payments = db.collection('payments');
    const appointments = db.collection('appointments');

    const payment = await payments.findOne({
      _id: new ObjectId(orderId),
      userId: new ObjectId(decoded.userId)
    });

    if (!payment) {
      return res.status(404).json({ error: 'Payment order not found' });
    }

    await payments.updateOne(
      { _id: new ObjectId(orderId) },
      {
        $set: {
          status: 'completed',
          paymentId: paymentId,
          signature: signature,
          paidAt: new Date(),
          updatedAt: new Date()
        }
      }
    );

    await appointments.updateOne(
      { _id: payment.appointmentId },
      {
        $set: {
          paymentStatus: 'paid',
          status: 'confirmed',
          updatedAt: new Date()
        }
      }
    );

    return res.status(200).json({
      success: true,
      message: 'Payment verified successfully'
    });
  } catch (error) {
    console.error('Payment verification error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}






