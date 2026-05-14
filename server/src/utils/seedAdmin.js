/**
 * Nexora Studio — Admin Seed Script
 * Run: npm run seed
 *
 * Checks if an admin user already exists. If not, creates one
 * using ADMIN_EMAIL and ADMIN_PASSWORD from .env.
 * Safe to run multiple times — will skip if admin exists.
 */
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

dotenv.config({ path: join(dirname(fileURLToPath(import.meta.url)), '../../.env') });

// Inline User schema (avoids circular imports when running standalone)
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ['client', 'admin'], default: 'client' },
  avatar: String,
  createdAt: { type: Date, default: Date.now },
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

async function seedAdmin() {
  if (!process.env.MONGODB_URI) {
    console.error('❌ MONGODB_URI is not set in .env');
    process.exit(1);
  }
  if (!process.env.ADMIN_EMAIL || !process.env.ADMIN_PASSWORD) {
    console.error('❌ ADMIN_EMAIL or ADMIN_PASSWORD not set in .env');
    process.exit(1);
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    const existing = await User.findOne({ role: 'admin' });
    if (existing) {
      console.log(`ℹ️  Admin already exists: ${existing.email} — skipping seed.`);
      return;
    }

    const passwordHash = await bcrypt.hash(process.env.ADMIN_PASSWORD, 12);
    const admin = await User.create({
      name: 'Nexora Admin',
      email: process.env.ADMIN_EMAIL,
      password: passwordHash,
      role: 'admin',
    });

    console.log(`✅ Admin user created: ${admin.email}`);
    console.log(`   Login at /admin with your credentials.`);
  } catch (err) {
    console.error('❌ Seed failed:', err.message);
    process.exit(1);
  } finally {
    await mongoose.disconnect();
    console.log('✅ MongoDB disconnected');
    process.exit(0);
  }
}

seedAdmin();
