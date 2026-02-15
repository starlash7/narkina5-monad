// Narkina5 Design System - Shared Constants

export const colors = {
  primary: '#7c3aed',
  primaryLight: '#9f67ff',

  bg: '#2a1f45',
  bgDark: '#3a2b66',
  bgCard: '#1a1a1a',

  text: '#2a1f45',
  textSecondary: '#6c5f8b',
  textMuted: '#8a7ca8',

  success: '#22c55e',
  info: '#3b82f6',
  warning: '#eab308',
  error: '#ef4444',
  purple: '#8b5cf6',
} as const;

export const gradients = {
  primary: `linear-gradient(135deg, ${colors.primary}, ${colors.primaryLight})`,
} as const;

export function rgba(hex: string, alpha: number): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

// Monad
export const MONAD_RPC = 'https://testnet-rpc.monad.xyz';
export const MONAD_NETWORK = 'devnet';
export const CONTRACT_ADDRESS = 'EaVBaKvaimQs88sNVpjutm2sCxsnyxdR7kQQBxy9Qh24';
