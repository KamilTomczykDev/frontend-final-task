import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://sudeerlorujjwkdnfkdx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN1ZGVlcmxvcnVqandrZG5ma2R4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk3MTYwMjYsImV4cCI6MjA0NTI5MjAyNn0.Eh0TJrBePAHL0a3VO_kYQkzhSwUP4VvDMlJfx7AD7Ec";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
