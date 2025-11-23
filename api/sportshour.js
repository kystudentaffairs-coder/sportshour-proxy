const fetch = require("node-fetch");

module.exports = async (req, res) => {
  const url = "https://script.google.com/macros/s/AKfycbyEsBtjNGfI4HatyhDBpXrgg-9tpUbUDV1pXzOHnpE88Qpb6fWiAzVxtT-gdOirdYPF_w/exec";

  try {
    const response = await fetch(url);
    const text = await response.text();

    res.status(200).send(text);
  } catch (err) {
    res.status(500).json({ error: "Proxy error", details: err.message });
  }
};
