/**
 * Hash a string using SHA-256
 * Works in both Node.js (server-side) and browser (client-side) environments
 */
export async function hashString(input: string): Promise<string> {
	// Check if we're in a browser environment
	if (typeof window !== 'undefined' && window.crypto && window.crypto.subtle) {
		// Browser environment - use Web Crypto API
		const encoder = new TextEncoder();
		const data = encoder.encode(input);
		const hashBuffer = await window.crypto.subtle.digest('SHA-256', data);
		const hashArray = Array.from(new Uint8Array(hashBuffer));
		const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
		return hashHex;
	} else {
		// Node.js environment - use crypto module
		const crypto = await import('crypto');
		return crypto.createHash('sha256').update(input).digest('hex');
	}
}

