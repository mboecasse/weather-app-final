/**
 * Format temperature to display in Celsius with degree symbol
 */
export function formatTemperature(temp: number): string {
  const roundedTemp = Math.round(temp);
  return `${roundedTemp}°C`;
}

/**
 * Format date to display in a human-readable format
 */
export function formatDate(timestamp: number): string {
  const date = new Date(timestamp * 1000);
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

/**
 * Format time from Unix timestamp
 */
export function formatTime(timestamp: number): string {
  const date = new Date(timestamp * 1000);
  return date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit'
  });
}