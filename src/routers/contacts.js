import { Router } from 'express';

import { ctrlWrapper } from '../utils/ctrlWrapper.js';

import { validateBody } from '../middlewares/validateBody.js';
import { createContactSchema, updateContactSchema } from '../validation/contacts.js';

import * as contactsController from '../controllers/contacts.js';

const contactsRouter = Router();
contactsRouter.get('/', ctrlWrapper(contactsController.getAllContactsController));

contactsRouter.get('/:contactId', ctrlWrapper(contactsController.getAllContactsByIdController));

contactsRouter.post(
  '/',
  validateBody(createContactSchema),
  ctrlWrapper(contactsController.createContactController),
);

contactsRouter.patch(
  '/:contactId',
  validateBody(updateContactSchema),
  ctrlWrapper(contactsController.patchContactController),
);

contactsRouter.delete('/:contactId', ctrlWrapper(contactsController.deleteContactController));

export default contactsRouter;
