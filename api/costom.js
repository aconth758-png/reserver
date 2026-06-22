const users = [
  { id: 1, name: 'Vinzz', level: 'admin' },
  { id: 2, name: 'Budi', level: 'user' },
  { id: 3, name: 'Ani', level: 'premium' }
];

module.exports = (req, res) => {
  const { method, query, headers, body } = req;

  // 1. Response beda berdasarkan header X-Device
  const device = headers['x-device'] || 'unknown';

  // 2. Filter data via query ?id=1
  const userId = parseInt(query.id);
  let data = users;
  if (userId) {
    data = users.filter(u => u.id === userId);
  }

  // 3. Response custom dari body POST
  const customMessage = body?.message || 'default vinzz';

  res.status(200).json({
    status: 'success',
    device,
    query_id: userId || null,
    custom_message: customMessage,
    data,
    timestamp: new Date().toISOString()
  });
};
