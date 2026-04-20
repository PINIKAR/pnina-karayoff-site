// Tweaks panel — colors, fonts, text edit, variant switcher
const THEMES = [
  { id: "forest",  name: "ירוק יער + זהב", bg: "#0a1a10", panel: "#0f2419", panel_deep: "#070f0b", brand: "#2d5a3d", brand_deep: "#1a3a28", accent: "#c9a84c", accent_2: "#e8c97a" },
  { id: "emerald", name: "אזמרגד + כסף",   bg: "#0a1512", panel: "#0f1f1a", panel_deep: "#060d0b", brand: "#1f6b4a", brand_deep: "#134432", accent: "#cfd3d8", accent_2: "#f0f2f5" },
  { id: "midnight",name: "חצות + זהב",     bg: "#0a0f16", panel: "#101826", panel_deep: "#06090f", brand: "#1e3a5f", brand_deep: "#122540", accent: "#c9a84c", accent_2: "#e8c97a" },
  { id: "marble",  name: "שיש בהיר",        bg: "#f5f2ec", panel: "#ebe6dc", panel_deep: "#e0d9cc", brand: "#2d5a3d", brand_deep: "#1a3a28", accent: "#8a6a1f", accent_2: "#b58d35", text: "#1a1a1a", silver: "#4a4f55", muted: "#6e7580", border: "rgba(0,0,0,0.08)", border_accent: "rgba(138,106,31,0.35)" },
  { id: "charcoal",name: "פחם + אולטרה",    bg: "#0e0e10", panel: "#17171a", panel_deep: "#08080a", brand: "#2a3a46", brand_deep: "#1a2730", accent: "#d9b66a", accent_2: "#f0d58b" },
];

const FONTS = [
  { id: "heebo",    name: "Heebo (ברירת מחדל)", display: "Heebo",    body: "Heebo",    url: "family=Heebo:wght@300;400;500;600;700;800;900" },
  { id: "assistant",name: "Assistant",           display: "Assistant",body: "Assistant",url: "family=Assistant:wght@300;400;500;600;700;800" },
  { id: "rubik",    name: "Rubik",              display: "Rubik",    body: "Rubik",    url: "family=Rubik:wght@300;400;500;600;700;800;900" },
  { id: "frank",    name: "Frank Ruhl (סריפים)",display: "Frank Ruhl Libre", body: "Heebo", url: "family=Frank+Ruhl+Libre:wght@400;500;700;900&family=Heebo:wght@300;400;500;600;700" },
];

const applyTheme = (t) => {
  const r = document.documentElement.style;
  r.setProperty('--theme-bg', t.bg);
  r.setProperty('--theme-panel', t.panel);
  r.setProperty('--theme-bg-deep', t.panel_deep);
  r.setProperty('--theme-brand', t.brand);
  r.setProperty('--theme-brand-deep', t.brand_deep);
  r.setProperty('--theme-accent', t.accent);
  r.setProperty('--theme-accent-2', t.accent_2);
  r.setProperty('--grad-accent', `linear-gradient(135deg, ${t.accent} 0%, ${t.accent_2} 100%)`);
  r.setProperty('--theme-text',   t.text   || '#f5f6f7');
  r.setProperty('--theme-silver', t.silver || '#c6ccd3');
  r.setProperty('--theme-muted',  t.muted  || '#8a9099');
  r.setProperty('--theme-border', t.border || 'rgba(255,255,255,0.08)');
  r.setProperty('--theme-border-accent', t.border_accent || 'rgba(201,168,76,0.30)');
};

const applyFont = (f) => {
  // inject/replace google font link
  let link = document.getElementById('tweak-font-link');
  if (!link) { link = document.createElement('link'); link.id = 'tweak-font-link'; link.rel = 'stylesheet'; document.head.appendChild(link); }
  link.href = `https://fonts.googleapis.com/css2?${f.url}&display=swap`;
  document.documentElement.style.setProperty('--font-display', `'${f.display}', system-ui, sans-serif`);
  document.documentElement.style.setProperty('--font-body',   `'${f.body}', system-ui, sans-serif`);
};

const TweaksPanel = ({ open, close, variant, setVariant, theme, setTheme, font, setFont, editing, setEditing }) => (
  <div className={`tweaks-panel ${open ? "open" : ""}`}>
    <div className="tweaks-head">
      <span>Tweaks</span>
      <button onClick={close} style={{ background: "transparent", border: "none", color: "var(--theme-muted)", cursor: "pointer", fontSize: 18 }}>×</button>
    </div>

    <div className="tweaks-sec">
      <div className="tweaks-label">וריאציה</div>
      <div className="variant-toggle">
        <button className={variant === 1 ? "active" : ""} onClick={() => setVariant(1)}>אדיטוריאל</button>
        <button className={variant === 2 ? "active" : ""} onClick={() => setVariant(2)}>מרכזי</button>
      </div>
    </div>

    <div className="tweaks-sec">
      <div className="tweaks-label">ערכת צבעים</div>
      <div className="tweaks-row">
        {THEMES.map(t => (
          <button
            key={t.id}
            className={`swatch ${theme === t.id ? "active" : ""}`}
            onClick={() => setTheme(t.id)}
            title={t.name}
            style={{ background: `linear-gradient(135deg, ${t.bg} 0%, ${t.bg} 50%, ${t.accent} 50%, ${t.accent_2} 100%)` }}
          />
        ))}
      </div>
      <div style={{ fontSize: 11, color: "var(--theme-muted)", marginTop: 8 }}>
        {THEMES.find(t => t.id === theme)?.name}
      </div>
    </div>

    <div className="tweaks-sec">
      <div className="tweaks-label">טיפוגרפיה</div>
      <div className="tweaks-row" style={{ gap: 6 }}>
        {FONTS.map(f => (
          <button
            key={f.id}
            className={`tweak-font-btn ${font === f.id ? "active" : ""}`}
            style={{ fontFamily: `'${f.display}', sans-serif` }}
            onClick={() => setFont(f.id)}
          >
            {f.name}
          </button>
        ))}
      </div>
    </div>

    <div className="tweaks-sec">
      <div className="tweaks-label">עריכת טקסטים</div>
      <div className="variant-toggle">
        <button className={!editing ? "active" : ""} onClick={() => setEditing(false)}>כבוי</button>
        <button className={editing ? "active" : ""} onClick={() => setEditing(true)}>פעיל</button>
      </div>
      {editing && (
        <div className="tweak-edit-hint" style={{ marginTop: 10 }}>
          לחצי על כותרות או פסקאות מסומנות כדי לערוך אותן ישירות. השינויים נשמרים אוטומטית בזמן העריכה.
        </div>
      )}
    </div>
  </div>
);

window.TweaksPanel = TweaksPanel;
window.THEMES = THEMES;
window.FONTS = FONTS;
window.applyTheme = applyTheme;
window.applyFont = applyFont;
