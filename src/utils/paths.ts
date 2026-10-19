/**
 * Helper to resolve internal paths cleanly whether deployed at root (`/`)
 * or under a GitHub Pages repository subpath (`/jobshore`).
 */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL || '/';
  const normalizedBase = base.endsWith('/') ? base.slice(0, -1) : base;

  if (!path || path === '/') {
    return normalizedBase ? `${normalizedBase}/` : '/';
  }

  if (path.startsWith('#')) {
    return path;
  }

  if (path.startsWith('/#')) {
    const hash = path.slice(1); // '#section'
    return normalizedBase ? `${normalizedBase}/${hash}` : `/${hash}`;
  }

  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${normalizedBase}${normalizedPath}`;
}
