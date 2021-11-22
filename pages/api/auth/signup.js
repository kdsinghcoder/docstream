import { createUser, findUser } from '../../../lib/user';
import db from '../../../middleware/database';

export default db(async (req, res) => {
  try {
    if(findUser(req.body.username)){
      throw new Error('site is already taken');
    }else{
      await createUser(req.body);
      res.status(200).send({ done: true });
    }
  } catch (error) {
    console.error(error);
    res.status(500).end(error.message);
  }
});