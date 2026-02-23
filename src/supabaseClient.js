import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Prevent client crash if environment variables are placeholders or missing
const isSupabaseConfigured = supabaseUrl && supabaseAnonKey && !supabaseAnonKey.includes('YOUR_SUPABASE_ANON_KEY');

export const supabase = isSupabaseConfigured
    ? createClient(supabaseUrl, supabaseAnonKey)
    : { from: () => ({ insert: () => Promise.resolve({ error: { message: 'Supabase is not configured. Please add your credentials to .env' } }) }) };
