import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(bodyParser.json());

interface Item {
  id: number;
  name: string;
}

let items: Item[] = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
];

app.get('/items', (req, res) => {
  try {
    if (!items || items.length === 0) {
      throw new Error('No items found');
    }

    console.log('List of items:', items);
    res.json(items);
  } catch (error) {
    console.error('Error retrieving items:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/items', (req, res) => {
  try {
    const newItem = req.body as { name: string };
    console.log('Received item:', newItem);
    items.push({ id: items.length + 1, ...newItem });
    res.status(201).json(newItem);
  } catch (error) {
    console.error('Error creating item:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

export default app; 