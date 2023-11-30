### API Documentation

#### Analytics Endpoints

1. **Relative Performance - Networth**
   - Method Type: POST
   - Endpoint: `/relative-performance/networth/`
   - Required Body:
     - `asset_class` (list[string])
     - `client_id` (string)
     - `custodian_id` (string)
     - `start_date` (string)
     - `end_date` (string)
   - Expected Response Type:
   - Array of Objects with the following structure:
     ```javascript
     [
       {
         x: "string", // Date in "YYYY-MM-DD" format
         y: number, // Numeric value
         z: "string", // Asset class
       },
       // Additional items...
     ];
     ```
2. **Relative Performance - Stocks**

   - Method Type: POST
   - Endpoint: `/relative-performance/stocks/`
   - Required Body:
     - `client_id` (string)
     - `security_id` (List[string]) // optional parameter, we can populate this from the ticker dropdown.
     - `start_date` (string)
     - `end_date` (string)
   - Expected Response Type:
   - Array of Objects with the following structure:
     ```javascript
     [
       {
         x: "string", // Date in "YYYY-MM-DD" format
         y: number, // Numeric value
         z: "string", // Asset class
       },
       // Additional items...
     ];
     ```

3. **Gross Allocation - Networth**

   - Method Type: POST
   - Endpoint: `/gross-allocation/networth/`
   - Required Body:
     - `client_id` (string)
     - `custodian_id` (string)
     - `start_date` (string)
     - `end_date` (string)
   - Expected Response Type:
   - Array of Objects with the following structure:
     ```javascript
     [
       {
         asset_class: "string", // Asset class
         x: "string", // Date in "YYYY-MM-DD" format
         value: number, // Numeric value
       },
       // Additional items...
     ];
     ```

4. **Gross Allocation - PL History**

   - Method Type: POST
   - Endpoint: `/gross-allocation/pl-history/`
   - Required Body:
     - `client_id` (string)
     - `custodian_id` (string)
     - `start_date` (string)
     - `end_date` (string)
   - Expected Response Type:
   - Array of Objects with the following structure:
     ```javascript
     [
       {
         asset_class: "string", // Asset class
         x: "string", // Date in "YYYY-MM-DD" format
         value: number, // Numeric value
       },
       // Additional items...
     ];
     ```

5. **Gross Allocation**

   - Method Type: POST
   - Endpoint: `/gross-allocation/`
   - Required Body:
     - `client_id` (string)
     - `custodian_id` (string)
     - `start_date` (string)
     - `end_date` (string)
   - Expected Response Type:
   - Array of Objects with the following structure:
     ```javascript
     [
       {
         title: "string", // Title describing the category (e.g., "Gross Allocation by asset class")
         x_label: "string" | null, // X-axis label (can be null)
         y_label: "string" | null, // Y-axis label (can be null)
         data: [
           {
             type: "string", // Type of the allocation (e.g., "Equity & Equivalents")
             value: number, // Numeric value representing the allocation
           },
           // Additional data items...
         ],
         metaData: [
           "string", // Additional metadata items related to the category
           // Additional metadata items...
         ],
       },
     ];
     ```

6. **Relative Performance - Asset Class**

   - Method Type: GET
   - Endpoint: `/relative-performance/asset-class/`
   - Query Parameter:
     - `client_id` (string)
   - Expected Response Type:
   - Array of Objects with the following structure:
     ```javascript
     [
       "string", // Asset class
       // Additional items...
     ];
     ```

7. **Security Search**
   - Method Type: GET
   - Endpoint: `/security/search/`
   - Query Parameter:
     - `query` (string)
   - Expected Response Type:
   - Array of Objects with the following structure:
     ```javascript
     [
       "string", // Asset class
       // Additional items...
     ];
     ```

#### Transaction API

8. **Position History - PieChart**

   - Method Type: GET
   - Endpoint: `/position/history/`
   - Required Parameters:

     - `asset_class` (string): Filter by asset class.
     - `security__country_name` (string): Filter by security country name.
     - `security__sub_industry` (string): Filter by security sub-industry.
     - `client` (string): The client identifier.
     - `custodian` (string): Filter by custodian.
     - `report_date` (string): Filter by report date.

   - Expected Response Type:
   - Array of Objects with the following structure:
     ```javascript
     {
       count: number,
       next: string | null,
       previous: string | null,
       results: [
         {
           id: string,
           custodian_name: string,
           client_name: string,
           security_name: string,
           isin: string,
           quantity: number,
           average_price: number,
           currency: string,
           mtm_price: number,
           asset_class: string,
           unrealised_pl: number,
           client: string,
           custodian: string,
           security: string,
           relationship_number: string,
           market_value: number,
           description: string,
           unrealised_pl_reporting: string,
           market_value_reporting: string,
           currency_reporting: string,
           related_positions: [
             {
               id: string,
               custodian_name: string,
               relationship_number: number,
               quantity: number,
               average_price: number,
               mtm_price: number,
               market_value: number,
               unrealised_pl: number,
             },
             // Additional related positions...
           ],
         },
         // Additional position history items...
       ];
     }
     ```

9. **Position History - Top Gainer**

   - Method Type: GET
   - Endpoint: `/position/history/top_gainer/`
   - Required Parameters:
     - `start_date` (string)
     - `end_date` (string)
     - `client` (string)
   - Expected Response Type:
   - Array of Objects with the following structure:

     ```javascript
     [
       {
         client_name: "string", // Name of the client
         security_id: "string", // Identifier for the security
         isin: "string", // ISIN (International Securities Identification Number) for the security
         security_description: "string", // Description of the security
         profit_loss: number, // Total profit or loss for the security
         percentage_profit_loss: number, // Percentage profit or loss for the security
       },
       // Additional position history items...
     ];
     ```

10. **Statement - Position Networth Cards**

- Method Type: GET
- Endpoint: `/statement/position/networth_cards/`
- Query Parameter:
  - `report_date` (string)
- Expected Response Type:
- Array of Objects with the following structure:
  ```javascript
    {
    client_cards: [
        {
        client_id: "string",       // Unique identifier for the client
        client_name: "string",     // Name of the client
        assets: number,            // Total assets for the client
        liabilities: number,       // Total liabilities for the client
        networth: number,          // Net worth for the client (assets - liabilities)
        currency: "string",        // Currency of the values (e.g., "SGD")
        },
        // Additional client cards...
    ],
    company_card: {
        client_name: "string",       // Name of the company
        assets: number,              // Total assets for the company
        liabilities: number,         // Total liabilities for the company
        networth: number,            // Net worth for the company (assets - liabilities)
        currency: "string",          // Currency of the values (e.g., "SGD")
    },
    }
  ```

11. **Custodian**
    - Method Type: GET
    - Endpoint: `/custodian`
    - Query Parameter:
      - `client__id` (string)
    - Expected Response Type:
    - Array of Objects with the following structure:
      ```javascript
      [
        {
          id: "string", // Unique identifier for the custodian
          created_at: "string", // Date and time of creation in ISO format
          modified_at: "string", // Date and time of last modification in ISO format
          name: "string", // Name of the custodian
          meta: null | object, // Additional metadata (can be null or an object)
          client: [
            "string", // Array of client IDs associated with this custodian
            // Additional client IDs...
          ],
        },
        // Additional custodian items...
      ];
      ```
