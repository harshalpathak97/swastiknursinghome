import { connectToDatabase } from '../lib/db.js';
import { authenticateRequest } from '../lib/auth.js';
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
  const decoded = authenticateRequest(req);
  
  if (!decoded) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const { db } = await connectToDatabase();
    const users = db.collection('users');

    if (req.method === 'GET') {
      const user = await users.findOne({ _id: new ObjectId(decoded.userId) });

      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      return res.status(200).json({
        success: true,
        user: {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
          phone: user.phone,
          address: user.address,
          gender: user.gender,
          dob: user.dob
        }
      });
    }

    if (req.method === 'PUT') {
      const { name, phone, address, gender, dob } = req.body;

      const updateData = { updatedAt: new Date() };
      
      if (name) updateData.name = name;
      if (phone) updateData.phone = phone;
      if (address !== undefined) updateData.address = address;
      if (gender) updateData.gender = gender;
      if (dob) updateData.dob = dob;

      await users.updateOne(
        { _id: new ObjectId(decoded.userId) },
        { $set: updateData }
      );

      const updatedUser = await users.findOne({ _id: new ObjectId(decoded.userId) });

      return res.status(200).json({
        success: true,
        user: {
          id: updatedUser._id.toString(),
          name: updatedUser.name,
          email: updatedUser.email,
          phone: updatedUser.phone,
          address: updatedUser.address,
          gender: updatedUser.gender,
          dob: updatedUser.dob
        }
      });
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (error) {
    console.error('Profile operation error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}






