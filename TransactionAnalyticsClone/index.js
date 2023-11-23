import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import {
  RELATIVE_PERFORMANCE_NETWORTH,
  RELATIVE_PERFORMANCE_STOCKS,
  GROSS_ALLOCATION_NETWORTH,
  GROSS_ALLOCATION_PL_HISTORY,
  GROSS_ALLOCATION,
  RELATIVE_PERFORMANCE_ASSET_CLASS,
  SECURITY_SEARCH,
} from "./analytics_mock_data.js";
const app = express();
const PORT = 8000;

app.use(bodyParser.json());
app.use(cors());

// Analytics Endpoints
app.post("/relative-performance/networth/", (req, res) => {
  const { asset_class, client_id, custodian_id, start_date, end_date } =
    req.body;
  return res.json(RELATIVE_PERFORMANCE_NETWORTH);
});

app.post("/relative-performance/stocks/", (req, res) => {
  const { client_id, custodian_id, start_date, end_date } = req.body;
  return res.json(RELATIVE_PERFORMANCE_STOCKS);
});

app.post("/gross-allocation/networth/", (req, res) => {
  const { client_id, custodian_id, start_date, end_date } = req.body;
  return res.json(GROSS_ALLOCATION_NETWORTH);
});

app.post("/gross-allocation/pl-history/", (req, res) => {
  const { client_id, custodian_id, start_date, end_date } = req.body;
  return res.json(GROSS_ALLOCATION_PL_HISTORY);
});

app.post("/gross-allocation/", (req, res) => {
  const { client_id, custodian_id, start_date, end_date } = req.body;
  return res.json(GROSS_ALLOCATION);
});

app.get("/relative-performance/asset-class/", (req, res) => {
  const { client_id } = req.query;
  return res.json(RELATIVE_PERFORMANCE_ASSET_CLASS);
});

app.get("/security/search/", (req, res) => {
  const { query } = req.query;
  return res.json(SECURITY_SEARCH);
});

// Transaction API
app.get("/position/history/top_gainer/", (req, res) => {
  const { start_date, end_date, client } = req.query;
  return res.json({ start_date, end_date, client });
});

app.get("/statement/position/networth_cards/", (req, res) => {
  const { report_date } = req.query;
  return res.json({ report_date });
});

app.get("/custodian", (req, res) => {
  const { client__id } = req.query;
  return res.json({ client__id });
});

app.get("/", (req, res) => {
  res.send("Hello from the homepage.");
});

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
