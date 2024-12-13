import { Router } from 'express';

import {
  getAllContactsController,
  getAllContactsByIdController,
} from '../controllers/contacts.js';

const contactsRouter = Router();
contactsRouter.get('/', getAllContactsController);

contactsRouter.get('/:contactId', getAllContactsByIdController);

export default contactsRouter;
