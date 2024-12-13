import express from 'express';
import cors from 'cors';
import pino from 'pino-http';
import dotenv from 'dotenv';
import { getAllContacts, getContactsById } from '../src/services/contacts.js';

dotenv.config();
const PORT = Number(process.env.PORT) || 3000;

export const setupServer = () => {
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );

  app.get('/contacts', async (req, res, next) => {
    const data = await getAllContacts();
    res.json({
      status: 200,
      message: 'Successfully found contacts!',
      data,
    });
  });
  app.get('/contacts  /:contactId', async (req, res, next) => {
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
  });

  app.use('*', (req, res) => {
    res.status(404).json({
      message: 'Not found',
    });
  });

  app.use((err, req, res, next) => {
    res.status(500).json({
      message: 'Something went wrong',
    });
  });

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
