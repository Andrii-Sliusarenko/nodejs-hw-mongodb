import { getAllContacts, getContactsById } from '../services/contacts.js';

export const getAllContactsController = async (req, res, next) => {
  const data = await getAllContacts();
  res.json({
    status: 200,
    message: 'Successfully found contacts!',
    data,
  });
};

export const getAllContactsByIdController = async (req, res, next) => {
  const { contactId } = req.params;
  const data = await getContactsById(contactId);
  if (!data) {
    return res.status(404).json({ message: 'Contact not found' });
  }
  res.json({
    status: 200,
    message: `Successfully found contact with id ${contactId}!`,
    data,
  });
};
