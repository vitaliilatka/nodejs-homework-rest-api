const express = require('express');
const router = express.Router();

const {
  listContacts,
  getContactById,
  addContact,
  removeContact,
  updateContact,
} = require('../../model');

router.get('/', async (req, res, next) => {
  try {
    const contacts = await listContacts();
    res.status(200).json({ contacts, status: 'success' });
  } catch (e) {
    next(e);
  }
});

router.get('/:contactId', async (req, res, next) => {
  const { contactId } = req.params;
  try {
    const contact = await getContactById(contactId);
    if (contact) {
      return res.status(200).json({ contact, status: 'success' });
    }
    res.status(404).json({ message: 'Not found' });
  } catch (e) {
    next(e);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const contact = await addContact(req.body);
    res.status(201).json({ contact, status: 'success' });
  } catch (e) {
    next(e);
  }
});

router.delete('/:contactId', async (req, res, next) => {
  const { contactId } = req.params;
  try {
    const result = await removeContact(contactId);
    if (result) {
      return res.status(200).json({ message: `contact #${contactId} deleted` });
    }
    res.status(404).json({ message: 'Not found' });
  } catch (e) {
    next(e);
  }
});

router.patch('/:contactId', async (req, res, next) => {
  const { contactId } = req.params;
  const { body } = req;
  try {
    const contact = await updateContact(contactId, body);
    if (!req.body) {
      res.status(400).json({ message: 'missing fields' });
    }
    if (contact) {
      return res.status(200).json({ contact, status: 'success' });
    }
    res.status(404).json({ message: 'Not Found' });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
