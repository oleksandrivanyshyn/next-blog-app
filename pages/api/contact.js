function handler(req, res) {
  const { name, email, message } = req.body;
  if (req.method === 'POST') {
    if (
      !email ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid input' });
    }
  }
  const newMessage = {
    name,
    email,
    message,
  };
  console.log(newMessage);
  res
    .status(201)
    .json({ text: 'Successfully stored message!', message: newMessage });
}
