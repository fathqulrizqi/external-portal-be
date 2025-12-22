// Simple validation for Distro_PO_MasterAchievement
export function validateMasterAchievement(data) {
  const requiredFields = [
    'customerCode',
    'customerName',
    'city',
    'targetQty',
    'targetAmount',
    'vehicle',
    'vehicleId',
    'periodYear'
  ];
  for (const field of requiredFields) {
    if (data[field] === undefined || data[field] === null || data[field] === '') {
      return `${field} is required`;
    }
  }
  if (isNaN(Number(data.targetQty)) || Number(data.targetQty) < 0) return 'targetQty must be a non-negative number';
  if (isNaN(Number(data.targetAmount)) || Number(data.targetAmount) < 0) return 'targetAmount must be a non-negative number';
  if (isNaN(Number(data.periodYear)) || Number(data.periodYear) < 2000) return 'periodYear must be a valid year';
  return null;
}
