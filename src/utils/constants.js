// const BASE_URL = "http://localhost:7777";
// const BASE_URL = "https://devtinder-o67m.onrender.com";
const BASE_URL =
  import.meta.env.VITE_NODE_ENV === "production"
    ? "https://devtinder-458109.el.r.appspot.com/"
    : "http://localhost:7777";
const DEFAULT_AVATAR =
  "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp";

export { BASE_URL, DEFAULT_AVATAR };
