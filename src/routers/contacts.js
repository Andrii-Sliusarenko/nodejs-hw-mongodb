import { Router } from 'express';

import { ctrlWrapper } from '../utils/ctrlWrapper.js';

import * as contactsController from '../controllers/contacts.js';

const contactsRouter = Router();
contactsRouter.get('/', ctrlWrapper(contactsController.getAllContactsController));

contactsRouter.get('/:contactId', ctrlWrapper(contactsController.getAllContactsByIdController));

export default contactsRouter;
