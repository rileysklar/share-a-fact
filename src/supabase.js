import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://jakndyxymlcyoatwbzla.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impha25keXh5bWxjeW9hdHdiemxhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzUxOTIzNDQsImV4cCI6MTk5MDc2ODM0NH0.CvHai4san22FNicYRjTeznCM6NsWXYs2I-88BrUd7Fo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
