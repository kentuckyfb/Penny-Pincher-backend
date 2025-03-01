// Define types for your tables
const purchaseOrderType = {
    id: null,
    vendor_id: null,
    cost_centre_name: null,
    cost_element_name: null,
    status: 'active', // Default status
    amount: null,
    created_at: null,
  };
  
  const vendorType = {
    id: null,
    name: null,
    contact_email: null,
    created_at: null,
  };
  
  const costCentreType = {
    id: null,
    name: null,
    code: null,
    created_at: null,
  };
  
  const costElementType = {
    id: null,
    name: null,
    code: null,
    created_at: null,
  };
  
  module.exports = { purchaseOrderType, vendorType, costCentreType, costElementType };