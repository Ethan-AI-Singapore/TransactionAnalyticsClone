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
import {
  CUSTODIAN,
  POSITION_HISTORY_TOP_GAINER,
  POSITION_NETWORTH_CARDS,
  POSITION_HISTORY_ASSET_CLASS,
  POSITION_HISTORY_COUNTRY,
  POSITION_HISTORY_SUB_INDUSTRY,
} from "./transactions_mock_data.js";

const app = express();
const PORT = 8000;

app.use(bodyParser.json());
app.use(cors());

// Analytics Endpoints
app.post("/relative-performance/networth/", (req, res) => {
  const { asset_class, client_id, custodian_id, start_date, end_date } =
    req.body;
  const filteredData = RELATIVE_PERFORMANCE_NETWORTH.filter((item) => {
    return asset_class.includes(item.z);
  });
  return res.json(filteredData);
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
app.get("/position/history", (req, res) => {
  const {
    asset_class,
    security__country_name,
    security__sub_industry,
    client,
    custodian,
    report_date,
  } = req.query;
  if (asset_class) {
    return res.json(POSITION_HISTORY_ASSET_CLASS);
  } else if (security__country_name) {
    return res.json(POSITION_HISTORY_COUNTRY);
  } else {
    return res.json(POSITION_HISTORY_SUB_INDUSTRY);
  }
});

app.get("/position/history/top_gainer/", (req, res) => {
  const { start_date, end_date, client } = req.query;
  return res.json(POSITION_HISTORY_TOP_GAINER);
});

app.get("/statement/position/networth_cards/", (req, res) => {
  const { report_date } = req.query;
  return res.json(POSITION_NETWORTH_CARDS);
});

app.get("/custodian", (req, res) => {
  const { client__id } = req.query;
  return res.json(CUSTODIAN);
});

app.get("/", (req, res) => {
  res.send("Hello from the homepage.");
});

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
