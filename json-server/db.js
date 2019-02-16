module.exports = () => {
  const db = Array.apply(null, { length: 30 }).map((val, i) => ({
    id: i,
    username: "fake" + i
  }));

  return {
    users: db
  };
};
