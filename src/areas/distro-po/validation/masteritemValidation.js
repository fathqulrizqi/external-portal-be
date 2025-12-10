// Validation for Distro_PO_MasterItem
export function validateMasterItem(body) {
  const {
    vehicle,
    vehicleId,
    category,
    productName,
    spType,
    itemId,
    isActive,
    price
  } = body;
  if (!vehicle || !vehicleId || !category || !productName || !itemId) {
    throw new Error('Missing required fields');
  }
  return {
    vehicle,
    vehicleId,
    category,
    productName,
    spType,
    itemId,
    isActive: typeof isActive === 'boolean' ? isActive : true,
    price: typeof price === 'number' ? price : null
  };
}