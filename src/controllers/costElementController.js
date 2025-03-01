const supabase = require('../services/supabaseService');
const { costElementType } = require('../types');

// Create Cost Element
const createCostElement = async (req, res) => {
  const { name, code } = req.body;
  const newCostElement = { ...costElementType, name, code };

  const { data, error } = await supabase.from('cost_elements').insert([newCostElement]);
  if (error) return res.status(400).json({ error: error.message });
  res.status(201).json(data);
};

// Get All Cost Elements
const getAllCostElements = async (req, res) => {
  const { data, error } = await supabase.from('cost_elements').select('*');
  if (error) return res.status(400).json({ error: error.message });
  res.status(200).json(data);
};

module.exports = { createCostElement, getAllCostElements };