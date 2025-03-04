const supabase = require('../services/supabaseService');


// Check if user exists
const checkUser = async (req, res) => {
  const { email } = req.body;

  console.log("Checking user with email:", email);

  try {
    // Use the Supabase Auth API to check if the user exists
    const { data: { users }, error } = await supabase.auth.admin.listUsers({
      page: 1,
      perPage: 1,
      filter: `email.eq.${email}`,
    });

    console.log("Query result:", { users, error });

    if (error) {
      console.error("Supabase error:", error);
      return res.status(400).json({ error: error.message });
    }

    // If users array is not empty, the user exists
    const exists = users.length > 0;
    res.status(200).json({ exists });
  } catch (error) {
    console.error("Error checking user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Signup
const signUp = async (req, res) => {
  const { email, password } = req.body;
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) return res.status(400).json({ error: error.message });
  res.status(201).json(data);
};

// Login
const login = async (req, res) => {
  const { email, password } = req.body;
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) return res.status(400).json({ error: error.message });
  res.status(200).json(data);
};

// Get Session (Validate Session)
const getSession = async (req, res) => {
  const { data, error } = await supabase.auth.getSession();

  if (error) return res.status(401).json({ error: error.message });

  if (!data.session) {
    return res.status(401).json({ error: "No active session" });
  }

  res.status(200).json(data.session);
};

// Logout
const logout = async (req, res) => {
  const { error } = await supabase.auth.signOut();

  if (error) return res.status(400).json({ error: error.message });
  res.status(200).json({ message: 'Logged out successfully' });
};




module.exports = { checkUser, signUp, login, getSession, logout };