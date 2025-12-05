//import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabaseClient = supabase.createClient('https://gqqikxsrfkwcmnvpcwbv.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdxcWlreHNyZmt3Y21udnBjd2J2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE4OTk3OTcsImV4cCI6MjA3NzQ3NTc5N30.2y9dxp883o4Nkz6twH-u7sqYCpzdfam12olg10-ar4E', {
    db:{
        schema: 'public'
    }
});


console.log(supabaseClient)