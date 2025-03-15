import { redirect } from 'next/navigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Authentication Error',
  description: 'There was a problem signing you in',
};

export default function AuthError() {
  redirect('/site/auth/error');
} 