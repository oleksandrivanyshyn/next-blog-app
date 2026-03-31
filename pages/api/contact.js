import db from '../../lib/db';

function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email, name, message } = req.body;

  if (!email || !email.includes('@') || !name || !message) {
    return res.status(422).json({ message: 'Invalid input.' });
  }

  try {
    const stmt = db.prepare(
      'INSERT INTO messages (email, name, message) VALUES (?, ?, ?)',
    );
    const info = stmt.run(email, name, message);

    res.status(201).json({
      message: 'Successfully stored message!',
      id: info.lastInsertRowid,
    });
  } catch (error) {
    res.status(500).json({ message: 'Storing message failed!' });
  }
}

export default handler;
