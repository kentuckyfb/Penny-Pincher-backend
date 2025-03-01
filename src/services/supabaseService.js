const { createClient } = require('@supabase/supabase-js');
const dotenv = require('dotenv');

dotenv.config();


const supabaseUrl = "https://ohgghusajmmazejydxzi.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9oZ2dodXNham1tYXplanlkeHppIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAzMTc3NDgsImV4cCI6MjA1NTg5Mzc0OH0.xPdf3bB6XOGvwxwlSmKuLF3g7l74698waTA0rwQbxmA";


if (!supabaseUrl || !supabaseKey) {
    throw new Error('Supabase URL and Key must be defined in .env file');
  }
  
  const supabase = createClient(supabaseUrl, supabaseKey);
  
  // Debug: Log Supabase client initialization
  console.log('Supabase client initialized successfully');
  
  module.exports = supabase;