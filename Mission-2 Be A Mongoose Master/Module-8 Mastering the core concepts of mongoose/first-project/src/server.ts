const mongoose = require("mongoose");

async function main() {
  await mongoose.connect(process.env.DATABASE_URL);
}

const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
