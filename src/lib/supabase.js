import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
    console.error('⚠️ Missing Supabase environment variables!');
    console.error('Please add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to your .env file or deployment environment.');
    console.error('See SUPABASE_SETUP.md for instructions.');
}

// Create client with fallback for missing env vars (prevents app crash)
export const supabase = createClient(
    supabaseUrl || 'https://placeholder.supabase.co',
    supabaseAnonKey || 'placeholder-key',
    {
        auth: {
            autoRefreshToken: true,
            persistSession: true,
            detectSessionInUrl: true
        }
    }
);

// Flag to check if Supabase is properly configured
export const isSupabaseConfigured = !!(supabaseUrl && supabaseAnonKey);
