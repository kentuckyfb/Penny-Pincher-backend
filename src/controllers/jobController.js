const supabase = require('../services/supabaseService');

const createJob = async (req, res) => {
  const { title, description, vendor, amount } = req.body;
  const { data, error } = await supabase
    .from('jobs')
    .insert([{ title, description, vendor, amount }]);

  if (error) return res.status(400).json({ error: error.message });
  res.status(201).json(data);
};

const getAllJobs = async (req, res) => {
  const { data, error } = await supabase.from('jobs').select('*');
  if (error) return res.status(400).json({ error: error.message });
  res.status(200).json(data);
};

const getJobById = async (req, res) => {
  const { id } = req.params;
  const { data, error } = await supabase.from('jobs').select('*').eq('id', id);
  if (error) return res.status(400).json({ error: error.message });
  res.status(200).json(data);
};

const updateJob = async (req, res) => {
  const { id } = req.params;
  const { title, description, vendor, amount } = req.body;
  const { data, error } = await supabase
    .from('jobs')
    .update({ title, description, vendor, amount })
    .eq('id', id);

  if (error) return res.status(400).json({ error: error.message });
  res.status(200).json(data);
};

const deleteJob = async (req, res) => {
  const { id } = req.params;
  const { data, error } = await supabase.from('jobs').delete().eq('id', id);
  if (error) return res.status(400).json({ error: error.message });
  res.status(200).json(data);
};

module.exports = { createJob, getAllJobs, getJobById, updateJob, deleteJob };