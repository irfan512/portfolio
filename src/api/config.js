// Public configuration for the PortfolioAI backend. Kept separate from the client
// so the always-loaded launcher imports only these constants, not the client.
// Only the public backend URL lives here: no keys are ever needed or sent.

const DEV_FALLBACK = "http://127.0.0.1:8000"; // local backend (allows http://localhost:3000)

export const API_URL = (
  process.env.REACT_APP_PORTFOLIO_AI_URL || (process.env.NODE_ENV === "development" ? DEV_FALLBACK : "")
).replace(/\/+$/, "");

// Citations must point back into this portfolio. The backend already guarantees
// this; the check is repeated so the widget never renders any other link.
export const CITATION_PREFIX = "https://irfan512.github.io/portfolio/";
