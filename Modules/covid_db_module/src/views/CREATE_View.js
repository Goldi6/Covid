async function createView(sql, viewName, query) {
  const result = await sql.poolRequest(query);

  if (result?.number === 2714) {
    console.log(`View ${viewName} already exists`);
  } else {
    console.log(`Created View ${viewName}!`);
  }
  return;
}

module.exports = createView;
