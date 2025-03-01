const supabase = require('../services/supabaseService');
const { costCentreType } = require('../types');

// Create Cost Centre
const createCostCentre = async (req, res) => {
  const { name, code } = req.body;
  const newCostCentre = { ...costCentreType, name, code };

  const { data, error } = await supabase.from('cost_centres').insert([newCostCentre]);
  if (error) return res.status(400).json({ error: error.message });
  res.status(201).json(data);
};

// Get All Cost Centres
const getAllCostCentres = async (req, res) => {
  const { data, error } = await supabase.from('cost_centres').select('*');
  if (error) return res.status(400).json({ error: error.message });
  res.status(200).json(data);
};

module.exports = { createCostCentre, getAllCostCentres };