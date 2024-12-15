import * as contactsServices from '../services/contacts.js';

import createHttpError from 'http-errors';

export const getAllContactsController = async (req, res) => {
  const contacts = await contactsServices.getAllContacts();
  res.json({
    status: 200,
    message: 'Successfully found contacts!',
    data: contacts,
  });
};

export const getAllContactsByIdController = async (req, res, next) => {
  const { contactId } = req.params;

  const contact = await contactsServices.getContactsById(contactId);

  if (!contact) {
    throw createHttpError(404, 'Contact not found');
  }
  res.json({
    status: 200,
    message: `Successfully found contact with id ${contactId}!`,
    data: contact,
  });
};
