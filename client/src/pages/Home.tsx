/**
 * Design system: Ustalık Atölyesi — çağdaş Anadolu zanaatçılığı + Swiss service design.
 * Palette: deep navy, lime cream, copper spark #E8753A. Typography: Space Grotesk + Manrope.
 * Layout: asymmetrical service route with technical labels, restrained motion, and immediate contact CTAs.
 */
import { useState } from "react";
import {
  ArrowUpRight,
  Check,
  ChevronRight,
  Clock3,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Wrench,
  X,
  Zap,
} from "lucide-react";

const heroImage = "/manus-storage/diyarbakir-elektrik-hero_9b398c69.jpg";
const serviceImage = "/manus-storage/diyarbakir-elektrik-service_b6a8c872.jpg";
const fieldImage = "/manus-storage/diyarbakir-elektrik-field_ab9e9e23.jpg";
const markImage = "/manus-storage/diyarbakir-elektrik-mark_21c44dc2.png";

const services = [
  { number: "01", title: "Arıza tespiti", text: "Sigorta, kaçak akım, priz ve aydınlatma arızalarını yerinde tespit ederiz.", icon: Zap },
  { number: "02", title: "Tesisat yenileme", text: "Ev ve iş yerleri için güvenli, düzenli ve uzun ömürlü elektrik tesisatı.", icon: Wrench },
  { number: "03", title: "Acil müdahale", text: "Elektrik kesintisini ve tehlikeli durumları hızlıca kontrol altına alırız.", icon: Clock3 },
];

const trustPoints = [
  "Yerinde ve anlaşılır arıza tespiti",
  "Temiz işçilik, güvenli uygulama",
  "Ev ve işletmelere uygun çözümler",
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <a href="#top" className="brand" aria-label="Diyarbakır Elektrik Ustası ana sayfa">
          <img src={markImage} alt="" className="brand-mark" />
          <span className="brand-wordmark">DİYARBAKIR<br /><b>ELEKTRİK USTASI</b></span>
        </a>
        <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Ana menü">
          <a href="#hizmetler" onClick={() => setMenuOpen(false)}>Hizmetler</a>
          <a href="#neden-biz" onClick={() => setMenuOpen(false)}>Neden biz?</a>
          <a href="#iletisim" onClick={() => setMenuOpen(false)}>İletişim</a>
          <a className="nav-call" href="#iletisim" onClick={() => setMenuOpen(false)}><Phone size={16} /> Hızlı ulaşın</a>
        </nav>
        <button className="menu-toggle" aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-image-wrap">
            <img src={heroImage} alt="Elektrik panosunu kontrol eden uzman elektrik ustası" className="hero-image" />
            <div className="hero-image-shade" />
            <div className="hero-image-note"><span className="pulse-dot" /> SAHADA · DİYARBAKIR</div>
          </div>
          <div className="hero-copy">
            <div className="eyebrow"><span>01</span> GÜVENLİ ELEKTRİK ÇÖZÜMLERİ</div>
            <h1>Elektrik işini<br /><em>şansa</em> bırakmayın.</h1>
            <p className="hero-intro">Arızayı doğru tespit eden, işini temiz yapan ve çözümü açıkça anlatan yerel elektrik ustası.</p>
            <div className="hero-actions">
              <a href="#iletisim" className="button button-primary">Ustaya ulaşın <ArrowUpRight size={18} /></a>
              <a href="#hizmetler" className="text-link">Hizmetleri incele <ChevronRight size={17} /></a>
            </div>
            <div className="hero-footnote"><MapPin size={15} /> Diyarbakır merkez ve çevre ilçeler</div>
          </div>
          <div className="hero-index">01 <span>/</span> 04</div>
        </section>

        <section className="marquee-strip" aria-label="Hizmet özeti">
          <span>ARIZA TESPİTİ</span><i>✦</i><span>TESİSAT YENİLEME</span><i>✦</i><span>ACİL MÜDAHALE</span><i>✦</i><span>AYDINLATMA</span><i>✦</i><span>GÜVENLİ İŞÇİLİK</span>
        </section>

        <section className="intro-section section-pad">
          <div className="section-kicker"><span>02</span> İŞİN ÖZÜ</div>
          <div className="intro-content">
            <h2>İyi elektrikçilik,<br /><span>görünmeyen</span> detaylarda saklıdır.</h2>
            <div className="intro-aside">
              <p>Bir arızayı sadece gidermeyiz. Sebebini bulur, güvenliğini kontrol eder ve size ne yaptığımızı anlatırız. Çünkü iyi iş, kapı kapandıktan sonra da kendini belli eder.</p>
              <a href="#neden-biz" className="text-link dark-link">Nasıl çalışıyoruz <ChevronRight size={17} /></a>
            </div>
          </div>
        </section>

        <section id="hizmetler" className="services-section section-pad">
          <div className="services-heading">
            <div className="section-kicker light-kicker"><span>03</span> HİZMETLER</div>
            <div className="tech-route"><span>ROUTE / 03</span><i /></div>
            <h2>İhtiyacınız neyse,<br /><em>çözümümüz</em> hazır.</h2>
            <p>Ev, ofis ve işletmeler için pratik ve güvenli elektrik hizmetleri.</p>
          </div>
          <div className="service-list">
            {services.map(({ number, title, text, icon: Icon }) => (
              <a href="#iletisim" className="service-row" key={number}>
                <span className="service-number">{number}</span>
                <span className="service-icon"><Icon size={22} /></span>
                <span className="service-copy"><strong>{title}</strong><small>{text}</small></span>
                <ArrowUpRight className="service-arrow" size={22} />
              </a>
            ))}
          </div>
        </section>

        <section id="neden-biz" className="proof-section section-pad">
          <div className="proof-image-wrap"><img src={serviceImage} alt="Elektrik panosunda düzenli ve güvenli işçilik" /><span className="image-caption">DETAY / 01</span><span className="image-coordinate">D 37°55′ · E 40°14′</span></div>
          <div className="proof-copy">
            <div className="section-kicker"><span>04</span> NEDEN BİZ?</div>
            <h2>Usta işi,<br /><span>net</span> iletişim.</h2>
            <p>Elektrik işinde güven; zamanında gelmek, doğru malzeme kullanmak ve işi arkasında bırakmamakla başlar.</p>
            <div className="trust-list">{trustPoints.map(point => <div className="trust-item" key={point}><Check size={16} /> {point}</div>)}</div>
            <div className="proof-stat"><strong>24/7</strong><span>Acil durumlar için<br />ulaşılabilir destek</span></div>
          </div>
        </section>

        <section className="field-section">
          <div className="field-copy section-pad">
            <div className="section-kicker"><span>05</span> SAHADA</div>
            <div className="tech-route dark-route"><span>FIELD LOG / 05</span><i /></div>
            <h2>Arızayı tarif edin,<br /><em>çözüm için</em> yola çıkalım.</h2>
            <p>Diyarbakır merkez başta olmak üzere yakın çevrede ev ve işletmelerin elektrik ihtiyaçlarına cevap veriyoruz.</p>
            <div className="location-row"><MapPin size={18} /><span>Kayapınar · Yenişehir · Bağlar · Sur</span></div>
          </div>
          <div className="field-image-wrap"><img src={fieldImage} alt="Diyarbakır'da sahada çalışan elektrik ustası" /><div className="field-stamp"><ShieldCheck size={22} /><span>GÜVENLİ<br />İŞÇİLİK</span></div></div>
        </section>

        <section id="iletisim" className="contact-section section-pad">
          <div className="contact-grid" aria-hidden="true" />
          <div className="contact-mark"><img src={markImage} alt="" /></div>
          <div className="section-kicker light-kicker"><span>06</span> İLETİŞİM</div>
          <h2>Elektrik işiniz<br /><em>beklemesin.</em></h2>
          <p>İhtiyacınızı kısaca anlatın. Size en hızlı şekilde dönüş yapalım.</p>
          <div className="contact-actions"><a href="#top" className="button button-copper"><Phone size={18} /> Telefonla ulaşın</a><a href="#top" className="button button-outline"><MessageCircle size={18} /> WhatsApp’tan yazın</a></div>
          <small className="contact-note">Telefon ve WhatsApp bilgisi yayın öncesinde işletme numaranızla güncellenecektir.</small>
        </section>
      </main>

      <footer className="site-footer"><div className="footer-brand">DİYARBAKIR <b>ELEKTRİK USTASI</b></div><span>© 2026 · Güvenli iş, net çözüm.</span><a href="#top">Yukarı çık ↑</a></footer>
    </div>
  );
}
