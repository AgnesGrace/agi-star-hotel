import { createClient } from "@supabase/supabase-js";

const SUPABASEURL = "https://danezqbffwlyabajidfk.supabase.co";
//Role level security is currently enabled for now, so this is saved for now.
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRhbmV6cWJmZndseWFiYWppZGZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY0MzE1MzAsImV4cCI6MjA5MjAwNzUzMH0.JqBNg7o1nQZuxF8Hyac4K9YFo4EgD_6tFltQzR2axDQ";

const supabase = createClient(SUPABASEURL, SUPABASE_KEY);

export default supabase;
