/**
 * ReviewSchema - No longer needed as reviews are embedded in the main PhoneRepair schema in index.html
 * Keeping this component as a no-op to avoid breaking imports
 */
const ReviewSchema = () => {
  // Reviews are now embedded directly in the main business schema in index.html
  // This prevents duplicate LocalBusiness entities that cause "Invalid object type" errors
  return null;
};

export default ReviewSchema;
