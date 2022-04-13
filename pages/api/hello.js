// create a simple hello world api

export default function handler(req, res) {
  return res.status(200).json({ salute: 'Hello World!' });
}
