const supabase = require('../services/supabaseService');

const validateSession = async (req, res, next) => {
  try {
    const { data: { session }, error } = await supabase.auth.getSession();

    if (error || !session) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    // Attach the session to the request object
    req.session = session;
    next();
  } catch (error) {
    console.error("Session validation error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = validateSession;