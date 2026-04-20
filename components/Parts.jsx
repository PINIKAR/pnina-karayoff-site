// Navigation
const Nav = ({ TXT }) => (
  <nav className="nav">
    <div className="nav-inner">
      <a href="#top" className="nav-brand">
        <div className="nav-logo-mark"><img src="assets/logo-pk.png" alt="" /></div>
        <div className="nav-brand-text">
          <div className="nav-brand-name">Pnina Karayoff</div>
          <div className="nav-brand-role">AI Architect</div>
        </div>
      </a>
      <div className="nav-links">
        <a href="#services" className="nav-link">{TXT.nav_services}</a>
        <a href="#why" className="nav-link">{TXT.nav_why}</a>
        <a href="#about" className="nav-link">{TXT.nav_about}</a>
        <a href="#testimonials" className="nav-link">{TXT.nav_testimonials}</a>
        <a href="#faq" className="nav-link">{TXT.nav_faq}</a>
      </div>
      <a href="#contact" className="nav-cta">{TXT.nav_cta}</a>
    </div>
  </nav>
);

// Hero v1 — Editorial split with framed monument
const HeroV1 = ({ TXT }) => (
  <section className="hero v1" id="top">
    <div className="hero-bg" />
    <div className="container">
      <div className="hero-grid">
        <div className="hero-content">
          <div className="hero-badge"><span className="dot"/>{TXT.hero_badge}</div>
          <h1>
            <span data-edit="hero_title_1">{TXT.hero_title_1}</span>{" "}
            <span className="accent" data-edit="hero_title_accent">{TXT.hero_title_accent}</span>{" "}
            <span data-edit="hero_title_2">{TXT.hero_title_2}</span>
          </h1>
          <p className="hero-sub" data-edit="hero_sub">{TXT.hero_sub}</p>
          <div className="hero-actions">
            <a href="#contact" className="btn-primary">{TXT.hero_cta}</a>
            <a href="#services" className="btn-secondary">{TXT.hero_cta_2}</a>
          </div>
          <div className="hero-meta">
            <span className="hero-meta-item">{TXT.hero_meta_1}</span>
            <span className="hero-meta-item">{TXT.hero_meta_2}</span>
            <span className="hero-meta-item">{TXT.hero_meta_3}</span>
          </div>
        </div>
        <div className="hero-visual">
          <div className="float-card float-a">
            <strong>אפיון AI ›</strong><br/>
            זיהוי 3 צווארי בקבוק ב-60 דקות
          </div>
          <div className="hero-visual-inner">
            <div className="monument">
              <div className="monument-logo" />
            </div>
          </div>
          <div className="float-card float-b">
            <strong>מערכת חיה</strong><br/>
            עונה · מסננת · מתעדת · 24/7
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Hero v2 — Centered monumental with stat grid
const HeroV2 = ({ TXT }) => (
  <section className="hero v2" id="top">
    <div className="hero-bg" />
    <div className="pillars" />
    <div className="container">
      <div className="hero-inner">
        <div className="hero-badge"><span className="dot"/>{TXT.hero_badge}</div>
        <h1>
          <span data-edit="hero_title_1">{TXT.hero_title_1}</span>{" "}
          <span className="accent" data-edit="hero_title_accent">{TXT.hero_title_accent}</span>{" "}
          <span data-edit="hero_title_2">{TXT.hero_title_2}</span>
        </h1>
        <p className="hero-sub" data-edit="hero_sub">{TXT.hero_sub}</p>
        <div className="hero-actions">
          <a href="#contact" className="btn-primary">{TXT.hero_cta}</a>
          <a href="#services" className="btn-secondary">{TXT.hero_cta_2}</a>
        </div>
        <div className="hero-grid-preview">
          <div className="hpv-item">
            <div className="hpv-num">60′</div>
            <div className="hpv-label">אפיון</div>
            <div className="hpv-desc">שיחה ממוקדת שמחזירה לך תמונה ברורה</div>
          </div>
          <div className="hpv-item">
            <div className="hpv-num">24h</div>
            <div className="hpv-label">מסמך</div>
            <div className="hpv-desc">סיכום בכתב עם המלצות ממוקדות</div>
          </div>
          <div className="hpv-item">
            <div className="hpv-num">1:1</div>
            <div className="hpv-label">ליווי</div>
            <div className="hpv-desc">התהליך כולו מולי, בלי מתווכים</div>
          </div>
          <div className="hpv-item">
            <div className="hpv-num">∞</div>
            <div className="hpv-label">התאמה</div>
            <div className="hpv-desc">מערכת שנבנית סביב העסק שלך</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Services
const Services = ({ TXT, SERVICES, Icon }) => (
  <section className="block" id="services">
    <div className="container">
      <div className="section-head">
        <div className="eyebrow">{TXT.services_eyebrow}</div>
        <h2 className="section-title">{TXT.services_title}</h2>
        <div className="gold-line" />
        <p className="section-sub">{TXT.services_sub}</p>
      </div>
      <div className="services-grid">
        {SERVICES.map((s, i) => {
          const I = Icon[s.icon];
          return (
            <div className="service-card" key={i}>
              <div className="service-ico"><I /></div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              <span className="learn">קראי עוד</span>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

// Why
const Why = ({ TXT, WHY, STATS, Icon }) => (
  <section className="block alt" id="why">
    <div className="container">
      <div className="why-layout">
        <div>
          <div className="eyebrow">{TXT.why_eyebrow}</div>
          <h2 className="section-title">{TXT.why_title}</h2>
          <div className="gold-line" />
          <p className="section-sub">{TXT.why_sub}</p>
          <div className="why-stats">
            {STATS.map((s, i) => (
              <div className="why-stat" key={i}>
                <div className="num">{s.num}</div>
                <div className="label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="why-items">
          {WHY.map((w, i) => (
            <div className="why-item" key={i}>
              <div className="why-check"><Icon.Target /></div>
              <div>
                <h4>{w.title}</h4>
                <p>{w.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// About
const About = ({ TXT }) => (
  <section className="block" id="about">
    <div className="container">
      <div className="about-layout">
        <div className="about-portrait">
          <img src="assets/pnina-profile.png" alt="פנינה קרייוף" />
          <div className="frame-corner fc-tl" />
          <div className="frame-corner fc-br" />
        </div>
        <div className="about-text">
          <div className="eyebrow">{TXT.about_eyebrow}</div>
          <h2>{TXT.about_name}</h2>
          <div className="about-title-line">{TXT.about_role}</div>
          <p data-edit="about_p1">{TXT.about_p1}</p>
          <p data-edit="about_p2">{TXT.about_p2}</p>
          <div className="about-sig">
            <div className="about-chip">מערכות בהתאמה אישית</div>
            <div className="about-chip">מומחיות בנדל״ן</div>
            <div className="about-chip">ליווי אישי</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Testimonials
const Testimonials = ({ TXT, TESTIMONIALS, Icon }) => (
  <section className="block alt" id="testimonials">
    <div className="container">
      <div className="section-head center">
        <div className="eyebrow">{TXT.t_eyebrow}</div>
        <h2 className="section-title">{TXT.t_title}</h2>
        <div className="gold-line" />
      </div>
      <div className="t-grid">
        {TESTIMONIALS.map((t, i) => (
          <div className="t-card" key={i}>
            <div className="t-quote-mark">״</div>
            <div className="t-stars">
              {[...Array(5)].map((_, k) => <Icon.Star key={k} />)}
            </div>
            <p className="t-body">{t.quote}</p>
            <div className="t-foot">
              <div className="t-avatar">{t.name.split(" ")[0].charAt(0)}</div>
              <div>
                <div className="t-name">{t.name}</div>
                <div className="t-role">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// FAQ
const Faq = ({ TXT, FAQ }) => (
  <section className="block" id="faq">
    <div className="container">
      <div className="section-head center">
        <div className="eyebrow">{TXT.faq_eyebrow}</div>
        <h2 className="section-title">{TXT.faq_title}</h2>
        <div className="gold-line" />
      </div>
      <div className="faq-list">
        {FAQ.map((f, i) => (
          <details className="faq-item" key={i}>
            <summary className="faq-q">{f.q}</summary>
            <p className="faq-a">{f.a}</p>
          </details>
        ))}
      </div>
    </div>
  </section>
);

// Contact
const Contact = ({ TXT, Icon }) => {
  const [sent, setSent] = React.useState(false);
  return (
    <section className="block alt" id="contact">
      <div className="container">
        <div className="contact-layout">
          <div className="contact-info">
            <div className="eyebrow">{TXT.contact_eyebrow}</div>
            <h2 className="section-title">{TXT.contact_title}</h2>
            <div className="gold-line" />
            <p>{TXT.contact_sub}</p>
            <div className="contact-points">
              <div className="contact-point">
                <div className="cp-ico"><Icon.Whatsapp /></div>
                <div>
                  <div className="cp-label">וואטסאפ</div>
                  <div className="cp-value">054-838-3451</div>
                </div>
              </div>
              <div className="contact-point">
                <div className="cp-ico"><Icon.Mail /></div>
                <div>
                  <div className="cp-label">אימייל</div>
                  <div className="cp-value">hello@pninak.ai</div>
                </div>
              </div>
              <div className="contact-point">
                <div className="cp-ico"><Icon.Time /></div>
                <div>
                  <div className="cp-label">זמן תגובה</div>
                  <div className="cp-value" style={{direction:'rtl'}}>עד 24 שעות</div>
                </div>
              </div>
            </div>
          </div>
          <form className="form-card" onSubmit={(e) => { e.preventDefault(); setSent(true); setTimeout(() => setSent(false), 3000); e.target.reset(); }}>
            <div className="form-row-2">
              <div className="form-row">
                <label>שם מלא</label>
                <input type="text" placeholder="שם פרטי ושם משפחה" required />
              </div>
              <div className="form-row">
                <label>טלפון</label>
                <input type="tel" placeholder="05X-XXXXXXX" required />
              </div>
            </div>
            <div className="form-row">
              <label>סוג העסק</label>
              <select required defaultValue="">
                <option value="" disabled>בחרי את הסוג המתאים</option>
                <option>משרד תיווך</option>
                <option>מתווכת עצמאית</option>
                <option>חברת נדל״ן</option>
                <option>אחר</option>
              </select>
            </div>
            <div className="form-row">
              <label>מה מעניין אותך?</label>
              <textarea placeholder="ספרי בקצרה על העסק שלך ועל מה שאת רוצה לשפר..." required />
            </div>
            <button type="submit" className="form-submit">
              {sent ? "✓ הפרטים התקבלו" : "שליחת פרטים"}
            </button>
            <div className="form-note">תשובה אישית תגיע אלייך תוך 24 שעות</div>
          </form>
        </div>
      </div>
    </section>
  );
};

// Final CTA
const FinalCta = ({ TXT }) => (
  <section className="block deep">
    <div className="container">
      <div style={{ textAlign: "center", maxWidth: 740, margin: "0 auto" }}>
        <h2 className="section-title" style={{ fontSize: "clamp(32px, 4.5vw, 52px)" }}>
          {TXT.cta_final_title}
        </h2>
        <p className="section-sub" style={{ margin: "20px auto 36px" }}>{TXT.cta_final_sub}</p>
        <a href="#contact" className="btn-primary" style={{ padding: "20px 44px", fontSize: 16 }}>
          {TXT.hero_cta}
        </a>
      </div>
    </div>
  </section>
);

// Footer
const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-inner">
        <div className="footer-brand">
          <img src="assets/logo-pk.png" alt="" />
          <span>פנינה קרייוף · AI Systems Architect</span>
        </div>
        <div className="footer-copy">© 2026 · כל הזכויות שמורות</div>
      </div>
    </div>
  </footer>
);

Object.assign(window, { Nav, HeroV1, HeroV2, Services, Why, About, Testimonials, Faq, Contact, FinalCta, Footer });
