import { model, Schema } from 'mongoose';

import { contactsType } from '../../constants/contacts.js';

import { handleSaveError } from './hooks.js';

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    isFavourite: {
      type: Boolean,
      required: true,
      default: false,
    },
    contactType: {
      type: String,
      enum: contactsType,
      required: true,
      default: ['personal'],
    },
  },
  { versionKey: false, timestamps: true, createdAt: Date.now, updatedAt: Date.now },
);

contactSchema.post('save', handleSaveError);

export const ContactCollection = model('contact', contactSchema);
