import * as admin from 'firebase-admin';

// Pendiente poner las credenciales reales de firebase
const app = (admin as typeof admin & { apps?: Array<{ name: string }> }).apps?.find((
    value: { name: string }) => value.name === '[DEFAULT]') ??
     admin.initializeApp({
  projectId: process.env.FIREBASE_PROJECT_ID,
});

export const firebaseAdmin = admin;
