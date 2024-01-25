import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://dowudwevniepateyiblx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRvd3Vkd2V2bmllcGF0ZXlpYmx4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDYxMzE3NjUsImV4cCI6MjAyMTcwNzc2NX0.niKrpMDBDt8dWs9Xsybq3dogB4AUbI-jk88m1TrRiuU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
