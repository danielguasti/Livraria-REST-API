import nookies from 'nookies';
const ACCESS_TOKEN_KEY = 'ACCESS_TOKEN_KEY';

const Hora = 60 * 60 * 1;

export const tokenService = {
  save(accessToken, ctx = null) {
    nookies.set(ctx, ACCESS_TOKEN_KEY, accessToken, {
      maxAge: Hora,
      path: '/',
    });
  },
  get(ctx = null) {
    const cookies = nookies.get(ctx);
    return cookies[ACCESS_TOKEN_KEY] || '';
  },
  delete(ctx = null) {
    nookies.destroy(ctx, ACCESS_TOKEN_KEY);
  }
}