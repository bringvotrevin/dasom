const express = require('express');
const { Contact } = require('../contactSchema.js');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    // const collection = client.db('contact_list').collection('contact');
    // const contacts = await collection.find({}).toArray();
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    console.error('Error fetching contacts', error);
    res.status(500).send('Internal Server Error');
  }
});

// POST endpoint to create a new contact
router.post('/', async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();
    res.status(201).json(newContact);
  } catch (error) {
    console.error('Error creating contact', error);
    res.status(500).send('Internal Server Error');
  }
});

router.put('/:id', async (req, res) => {
  const contactId = req.params.id;
  const updateData = req.body;
  try {
    const updatedContact = await Contact.findByIdAndUpdate(
      contactId,
      updateData,
      { new: true }
    );
    if (updatedContact) {
      res.status(200).json(updatedContact);
    } else {
      res.status(404).json({ error: 'Contact not found' });
    }
  } catch (error) {
    console.error('Error updating contact:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.delete('/:id', async (req, res) => {
  const contactId = req.params.id;

  try {
    const deletedContact = await Contact.deleteOne({ _id: contactId });

    if (deletedContact) {
      res.status(200).json(deletedContact);
    } else {
      res.status(404).json({ error: 'Not Found' });
    }
  } catch (error) {
    console.error('데이터 삭제 오류:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
