import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://pyeknadouhznjaaxhcnv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB5ZWtuYWRvdWh6bmphYXhoY252Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDUyMjU4NjcsImV4cCI6MTk2MDgwMTg2N30.f2_9kPGld0ybvLtSE7kdkCFaflGwSeeL0WQkZUFBNYI";
const supabase = createClient(supabaseUrl, supabaseKey);
console.log("init supabase", supabase);
export default function useSupabase() {
  return supabase;
}
