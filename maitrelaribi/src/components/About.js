import React from "react";
import "./Presentation.css"; // Import the corresponding CSS file

const PhotoSection = ({ selectedLanguage }) => {
  const textDirection = selectedLanguage === 'ar' ? 'rtl' : 'ltr';

  return (
    <section className="photo-section">
      <div className="content-container">
        <div className="presentation-container" style={{ textAlign: 'justify', direction: textDirection }}>
          <h2 className="presentation-title" style={{ color: '#333', fontSize: '36px', marginBottom: '20px' }}>
            {selectedLanguage === 'fr' ? 'Présentation' : (selectedLanguage === 'en' ? 'Presentation' : 'تقديم')}
          </h2>
          <p className="presentation-text" style={{ fontSize: '18px', lineHeight: '1.6', color: '#555' }}>
            {selectedLanguage === 'fr' ? (
              <>
                Le Cabinet d’Avocat LAARIBI LAW FIRM se distingue en tant que leader dans le domaine du <a href="/">droit des affaires en Tunisie</a>. Avec de nombreuses années d’expérience à notre actif, notre cabinet s’est spécialisé dans divers domaines: notre engagement envers nos clients va au-delà du simple conseil juridique, nous nous efforçons également de leur fournir un service juridique exceptionnel, offrant des solutions sur mesure et adaptées à chaque situation, les représenter de manière vigoureuse devant les tribunaux. Chez LAARIBI LAW FIRM, nous mettons tout en œuvre pour accompagner nos clients tout au long de leur parcours juridique. Que vous soyez tunisien  ou étranger ayant besoin d’assistance en Tunisie ou un investisseur envisageant des opportunités dans le pays, notre cabinet est là pour vous offrir un soutien professionnel et compétent pour naviguer dans le monde complexe du droit des affaires en Tunisie.

              </>
            ) : (selectedLanguage === 'en' ? (
              <>
              LAARIBI LAW FIRM distinguishes itself as a leader in the field of <a href="/">business law in Tunisia</a>. With numerous years of experience, our firm has specialized in various areas: our commitment to clients goes beyond simple legal advice, we are committed to providing exceptional legal services, offering tailored solutions adapted to each situation, we also strive to vigorously represent them in courts. At LAARIBI LAW FIRM, we make every effort to accompany our clients throughout their legal journey. Whether you are  Tunisian or Foreign in need of assistance in Tunisia, or an investor considering opportunities in the country, our firm is here to provide professional and competent support to navigate the complex world of business law in Tunisia.
                
              </>
            ) : (
              <>
                يتميز مكتب العريبي للمحاماة  كرائد في مجال قانون الأعمال في تونس. بفضل عدّة سنوات من الخبرة أمكن لمكتبنا الاختصاص في مجالات متنوعة: إذ يشمل التزامنا تجاه عملائنا الاستشارة القانونية ويمتدّ أيضًا لتقديم خدمات قانونية استثنائية ومتميّزة، وتقديم أنسب الحلول وأفضلها لكل حالة وتمثيلهم أمام المحاكم بحرص وعناية شديدين. في مكتب العريبي للمحاماة، نبذل قصارى جهودنا لمرافقة عملائنا طوال مسيرتهم القانونية. وسواء كنت تونسيًا أو أجنبيا  بحاجة إلى مساعدة في تونس، أو مستثمرًا ينوي استغلال الفرص في البلاد، فإن مكتبنا متواجد لتقديم الدعم المهني والكفء في مجال قانون الأعمال في تونس.
              </>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PhotoSection;
