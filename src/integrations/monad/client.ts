import { env } from '../../config/env';

export function getMonadRpcUrl(): string {
  return env.monadRpcUrl;
}
