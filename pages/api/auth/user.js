import { getLoginSession } from '../../../lib/auth';
import { findUser } from '../../../lib/user';
import db from '../../../middleware/database';

export default db(async (req, res) => {
  try {
    const session = await getLoginSession(req);
    const user = (session && (await findUser(session))) ?? null;

    res.status(200).json({ user });
  } catch (error) {
    console.error(error);
    res.status(500).end('Authentication token is invalid, please log in');
  }
});