import mongoose from 'mongoose';

export interface Auth {
  name: string;
  email: string;
  password: string;
  googleId?: string;
}
