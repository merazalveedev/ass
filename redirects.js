const routes = {
  // Social Platforms
  "facebook": "https://facebook.com/merazalvee",
  "twitter": "https://twitter.com/merazalvee",
  "instagram": "https://instagram.com/merazalvee",
  "linkedin": "https://linkedin.com/in/merazalvee",
  "youtube": "https://youtube.com/@merazalvee",
  "github": "https://github.com/merazalvee",
  "tiktok": "https://www.tiktok.com/@merazalvee",
  "snapchat": "https://www.snapchat.com/add/merazalvee",
  "pinterest": "https://www.pinterest.com/merazalvee",
  "reddit": "https://www.reddit.com/user/merazalvee",

  // Messaging & Community
  "whatsapp": "https://wa.me/8801XXXXXXXXX",
  "telegram": "https://t.me/merazalvee",
  "discord": "https://discord.gg/your-server-code",
  "messenger": "https://m.me/merazalvee",

  // Developer & Design Platforms
  "dribbble": "https://dribbble.com/merazalvee",
  "behance": "https://www.behance.net/merazalvee",
  "codepen": "https://codepen.io/merazalvee",
  "stack": "https://stackoverflow.com/users/your-id/merazalvee",
  "dev": "https://dev.to/merazalvee",

  // Others (Content, Business, Blog)
  "medium": "https://medium.com/@merazalvee",
  "blog": "https://merazalvee.com",
  "buymeacoffee": "https://www.buymeacoffee.com/merazalvee",
  "gumroad": "https://merazalvee.gumroad.com",
  "kofi": "https://ko-fi.com/merazalvee"
};

const path = window.location.pathname.replace(/^\/+/g, "").toLowerCase();
const redirectUrl = routes[path];

if (redirectUrl) {
  window.location.href = redirectUrl;
} else {
  document.body.innerHTML = "<h1>Link not found!</h1>";
}
