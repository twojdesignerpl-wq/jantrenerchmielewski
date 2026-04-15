export const ADMIN_EMAILS = [
  "michalchelmza@gmail.com",
  "krakowiaczek691@gmail.com",
] as const;

export function isAdminEmail(email: string | undefined): boolean {
  if (!email) return false;
  return (ADMIN_EMAILS as readonly string[]).includes(email.toLowerCase());
}
