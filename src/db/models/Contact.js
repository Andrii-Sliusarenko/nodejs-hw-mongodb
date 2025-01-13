import { model, Schema } from 'mongoose';

import { contactsType } from '../../constants/contacts.js';

import { handleSaveError } from './hooks.js';

import { mailFormat } from '../../constants/index.js';

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
      match: mailFormat,
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
      default: 'personal',
    },
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'users',
    },
    photo: {
      type: String,
    },
  },
  {
    versionKey: false,
    timestamps: true,
    createdAt: Date.now,
    updatedAt: Date.now,
  },
);

contactSchema.post('save', handleSaveError);

export const ContactCollection = model('contact', contactSchema);
