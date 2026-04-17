export function decodeJwtPayload(token: string) {
  const payload = token.split('.')[1];
  const base64 = payload.replace(/-/g, '+').replace(/_/g, '/');
  return JSON.parse(Buffer.from(base64, 'base64').toString('utf-8'));
}
