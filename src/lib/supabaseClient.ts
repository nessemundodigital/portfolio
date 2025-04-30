import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mhkxzxsdisdbzxikxktd.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1oa3h6eHNkaXNkYnp4aWt4a3RkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU5MjY4NTEsImV4cCI6MjA2MTUwMjg1MX0.eBMu823exYmXbc-IiAEDtmWmkjQd87thBQtjBqTice8';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
