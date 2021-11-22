import { removeTokenCookie } from '../../../lib/auth-cookies';
import db from '../../../middleware/database';

export default db(async (req, res) => {
  removeTokenCookie(res);
  res.writeHead(302, { Location: '/' });
  res.end();
});