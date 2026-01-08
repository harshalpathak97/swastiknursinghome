import { connectToDatabase } from '../lib/db.js';
import { hashPassword, generateToken } from '../lib/auth.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, password, phone, address, gender, dob } = req.body;

    if (!name || !email || !password || !phone) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const { db } = await connectToDatabase();
    const users = db.collection('users');

    const existingUser = await users.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const hashedPassword = await hashPassword(password);
    
    const user = {
      name,
      email: email.toLowerCase(),
      password: hashedPassword,
      phone,
      address: address || '',
      gender: gender || '',
      dob: dob || '',
      createdAt: new Date(),
      updatedAt: new Date()
    };

    const result = await users.insertOne(user);
    const token = generateToken(result.insertedId.toString());

    return res.status(201).json({
      success: true,
      token,
      user: {
        id: result.insertedId.toString(),
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
        gender: user.gender,
        dob: user.dob
      }
    });
  } catch (error) {
    console.error('Registration error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}






