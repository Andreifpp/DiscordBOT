// config.js
require('dotenv').config();

let fileConfig = {};
if (process.env.NODE_ENV !== 'production') {
  // En local SI usamos config.json
  try {
    fileConfig = require('./config.json');
  } catch (e) {
    fileConfig = {};
  }
}

module.exports = {
  // Token: SIEMPRE desde ENV en producción
  token: process.env.TOKEN || fileConfig.token,

  // IDs / roles / canales
  guildId: process.env.GUILD_ID || fileConfig.guildId,
  supportRoleId: process.env.SUPPORT_ROLE_ID || fileConfig.supportRoleId,
  ticketCategoryId: process.env.TICKET_CATEGORY_ID || fileConfig.ticketCategoryId,
  logChannelId: process.env.LOG_CHANNEL_ID || fileConfig.logChannelId,

  // Invoices / Supabase (si aplica)
  supabaseUrl: process.env.SUPABASE_URL || fileConfig.supabaseUrl,
  supabaseKey: process.env.SUPABASE_KEY || fileConfig.supabaseKey,
  supabaseTable: process.env.SUPABASE_TABLE || fileConfig.supabaseTable || 'invoices',
  invoicesApiUrl: process.env.INVOICES_API_URL || fileConfig.invoicesApiUrl,

  // Colores (para que no crashee el embed)
  colors: {
    primary: process.env.PRIMARY_COLOR || (fileConfig.colors && fileConfig.colors.primary) || '#9d4edd',
    success: process.env.SUCCESS_COLOR || (fileConfig.colors && fileConfig.colors.success) || '#2ecc71',
    danger: process.env.DANGER_COLOR || (fileConfig.colors && fileConfig.colors.danger) || '#e74c3c',
  },
};
