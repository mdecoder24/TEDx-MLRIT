import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ykscrweiygspkbzusiuo.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlrc2Nyd2VpeWdzcGtienVzaXVvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI1MDI5MTksImV4cCI6MjA1ODA3ODkxOX0.jiOZBFYC-Evxc3nGTNoo5h78KCmEMj30oxgzfeH6iNk'

export const supabase = createClient(supabaseUrl, supabaseKey)