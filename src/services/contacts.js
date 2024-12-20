import { ContactCollection } from '../db/models/Contact.js';

import { calculatePaginationData } from '../utils/calculatePaginationData.js';

export const getAllContacts = async ({ page = 1, perPage = 10 }) => {
  const limit = perPage;
  const skip = (page - 1) * perPage;

  const contactsQuery = ContactCollection.find();
  const contactsCount = await ContactCollection.find().merge(contactsQuery).countDocuments();
  const contacts = await contactsQuery.skip(skip).limit(limit).exec();
  const paginationData = calculatePaginationData(contactsCount, perPage, page);
  return {
    data: contacts,
    ...paginationData,
  };
};

export const getContactsById = async (contactId) => {
  const contact = await ContactCollection.findById(contactId);
  return contact;
};

export const createContact = async (payload) => {
  const contact = await ContactCollection.create(payload);
  return contact;
};
export const patchContact = async (contactId, payload, options = {}) => {
  const rawResult = await ContactCollection.findOneAndUpdate({ _id: contactId }, payload, {
    new: true,
    includeResultMetadata: true,
    ...options,
  });

  if (!rawResult || !rawResult.value) return null;

  return {
    contact: rawResult.value,
    isNew: Boolean(rawResult?.lastErrorObject?.upserted),
  };
};

export const deleteContact = async (contactId) => {
  const contact = await ContactCollection.findOneAndDelete({ _id: contactId });
  return contact;
};
