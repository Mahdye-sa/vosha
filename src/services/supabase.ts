import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://vmbgccrmrjcsbjmmjqht.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZtYmdjY3Jtcmpjc2JqbW1qcWh0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMwMjkyNDYsImV4cCI6MjA2ODYwNTI0Nn0.yHld_ehgaDiHG-g-WsERNElDZ-jDhbz1MLgt980eZjY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
