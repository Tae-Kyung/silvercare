export const colors = {
  primary: '#87CEEB',
  primaryDark: '#5BB5D8',
  secondary: '#F5E6D3',
  accent: '#90EE90',
  background: '#FFFFFF',
  textMain: '#2C3E50',
  textLight: '#7F8C8D',
  error: '#E74C3C',
  success: '#27AE60',
} as const;

export type ColorKey = keyof typeof colors;
