import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try {
    const { data, status } = await axios.put(
      "https://api.chatengine.io/users/",
      {
        username: username,
        secret: username,
        first_name: username,
      },
      {
        headers: { "Private-Key": "9eecb28a-007b-4f85-b214-65eaa88a2c5a" },
      }
    );

    return res.status(status).json(data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
});

app.listen(3001, () => console.log("server stared"));
