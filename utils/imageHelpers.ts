// Helper to correct image paths for GitHub Pages
export const resolvePath = (path: string | undefined) => {
  if (!path) return '';
  // Check if it's an external URL (http/https)
  if (path.startsWith('http')) return path;
  
  // Clean up path: remove leading slash if present to avoid double slashes with BASE_URL
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  return `${import.meta.env.BASE_URL}${cleanPath}`;
};