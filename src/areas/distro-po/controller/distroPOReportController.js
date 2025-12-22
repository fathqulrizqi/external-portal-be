import { getReport } from '../service/distroPOReportService.js';

const distroPOReportController = {
  async getReport(req, res) {
    try {
      let { distributors, year, type } = req.query;
      // Support array-style query params (distributors[]=A&distributors[]=B)
      if (Array.isArray(distributors)) {
        // already an array, do nothing
      } else if (typeof distributors === 'string') {
        try {
          const parsed = JSON.parse(distributors);
          if (Array.isArray(parsed)) distributors = parsed;
          else distributors = [distributors];
        } catch (e) {
          // Not a JSON array, treat as single value
          distributors = [distributors];
        }
      } else if (typeof distributors === 'undefined' || distributors === null) {
        distributors = [];
      }
      const report = await getReport({ distributors, year, type });
      res.json(report);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

export default distroPOReportController;
