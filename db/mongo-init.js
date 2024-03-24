db.createUser({
  user: 'admin',
  pwd: 'q1w2e3',
  roles: [
    {
      role: 'readWrite',
      db: 'sleepr',
    },
  ],
});
