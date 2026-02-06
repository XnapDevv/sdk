export function verifyWallet(address: string): boolean {
  return address.startsWith("wallet_");
}
