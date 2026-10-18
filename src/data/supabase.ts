import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Null when env vars are missing so the rest of the site still renders;
// forms check for this and show a message instead of submitting.
export const supabase = supabaseUrl && supabaseKey ? createClient(supabaseUrl, supabaseKey) : null

if (!supabase) {
  console.error('Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY; form submissions are disabled')
}

export const PAYMENT_BUCKET = 'payment-screenshots'
