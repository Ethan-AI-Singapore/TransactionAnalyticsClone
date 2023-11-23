import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const PORT = 8000;

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Analytics Endpoints
app.post("/api/v1/relative-performance/networth/", (req, res) => {
  const { asset_class, client_id, custodian_id, start_date, end_date } =
    req.body;
  return res.json({ client_id });
});

app.post("/api/v1/relative-performance/stocks/", (req, res) => {
  const { client_id, custodian_id, start_date, end_date } = req.body;
  return res.json({ client_id });
});

app.post("/api/v1/gross-allocation/networth/", (req, res) => {
  const { client_id, custodian_id, start_date, end_date } = req.body;
  return res.json({ client_id });
});

app.post("/api/v1/gross-allocation/pl-history/", (req, res) => {
  const { client_id, custodian_id, start_date, end_date } = req.body;
  return res.json({ client_id });
});

app.post("/api/v1/gross-allocation/", (req, res) => {
  const { client_id, custodian_id, start_date, end_date } = req.body;
  return res.json({ client_id });
});

app.get("/api/v1/relative-performance/asset-class/", (req, res) => {
  const { client_id } = req.query;
  return res.json({ client_id });
});

app.get("/api/v1/security/search/", (req, res) => {
  const { query } = req.query;
  return res.json({ query });
});




// Transaction API
app.get("/api/position/history/top_gainer/", (req, res) => {
  const { start_date, end_date, client } = req.query;
  return res.json({ start_date, end_date, client });
});

app.get("/api/statement/position/networth_cards/", (req, res) => {
  const { report_date } = req.query;
  return res.json({ report_date });
});

app.get("/api/custodian", (req, res) => {
  const { client__id } = req.query;
  return res.json({ client__id });
});

app.get("/", (req, res) => {
  res.send("Hello from the homepage.");
});

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
