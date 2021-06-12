const fs = require('fs').promises;
const path = require('path');
const { uid } = require('uid');

const contactsPath = path.resolve('model/contacts.json');

const listContacts = async () => {
  try {
    const data = await fs.readFile(contactsPath, 'utf8');
    return JSON.parse(data);
  } catch (e) {
    throw new Error(e);
  }
};

const getContactById = async (contactId) => {
  try {
    const data = await fs.readFile(contactsPath, 'utf8');
    const contacts = JSON.parse(data);
    const contact = contacts.find(({ id }) => id.toString() === contactId);
    return contact;
  } catch (e) {
    throw new Error(e);
  }
};

const removeContact = async (contactId) => {
  try {
    const data = await fs.readFile(contactsPath, 'utf8');
    const contacts = JSON.parse(data);
    const updatedContacts = contacts.filter(
      ({ id }) => id.toString() !== contactId
    );
    await fs.writeFile(contactsPath, JSON.stringify(updatedContacts));
    return true;
  } catch (e) {
    throw new Error(e);
  }
};

const addContact = async (body) => {
  const { name, email, phone } = body;
  const newContact = {
    id: uid(),
    name,
    email,
    phone,
  };
  try {
    const data = await fs.readFile(contactsPath, 'utf8');
    const
  }
}

const updateContact = async (contactId, body) => { }

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
}
