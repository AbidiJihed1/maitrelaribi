import React from "react";
import "./Presentation.css"; // Import the corresponding CSS file
import image from "./fouzi.jpg";

const PhotoSection = ({ selectedLanguage }) => {
  return (
    <section className="photo-section" style={{direction: selectedLanguage === 'ar' ? 'rtl' : 'ltr'}}>
      <div className="content-container">
        <div className="photo-container">
          <img
            src={image} // Replace with the URL of your photo
            alt="Professional Presentation"
            className="presentation-photo"
          />
        </div>
        <div className="presentation-container">
          {/* <h2 className="presentation-title">
            {selectedLanguage === "ar"
              ? "تقديم"
              : selectedLanguage === "fr"
              ? "Présentation"
              : "Presentation"}
          </h2> */}
          <p
            className="presentation-text"
            style={{ fontSize: "18px", lineHeight: "1.6", color: "#555" }}
          >
            {selectedLanguage === "fr" ? (
  <>
  LAARIBI LAW FIRM évoque une structure stable et en perpétuelle évolution, qui réagit et propose à chaque client une perspective différente et une prise de hauteur favorable à son succès.<br /> <br />
    <h3> Nous sommes juristes et nous aimons le droit</h3>
    Nous sommes passionnés par notre métier, il associe la connaissance à la rigueur, il ne tolère aucune complaisance. Nos connaissances sont solides et mises à jour constamment.<br /> <br />
    <h3>Notre équipe prête à vous accompagner :</h3>
    <ul>
      <li>appliquer les meilleures tactiques et apporter des solutions optimales. </li>
      <li>Disponibles et à l’écoute, nous accompagnons votre développement, en Tunisie comme à l’étranger, pour répondre à vos besoins juridiques et relever vos défis d’entreprise.</li>
    </ul>
  </>
) : selectedLanguage === "ar" ? (
  <>
    مكتب العريبي للمحاماة يتمثل في هيكل ثابت وفي تطور دائم، يتفاعل ويقترح لكل عميل منظورًا مختلفًا ورؤية تساهم في نجاحه. <br /><br />
    <h3> نحن محامون ونحب القانون</h3>
    نحن متحمسون لمهنتنا، فهي تجمع بين المعرفة والدقة، ولا تسمح بأي تدليل. معرفتنا قوية وتُحدَّث باستمرار. <br /><br />
     <h3>فريقنا جاهز لمرافقتك:</h3>
     <ul>
      <li>تطبيق أفضل التكتيكات وتقديم الحلول المثلى.</li>
      <li>نحن في خدمكتكم ونستمع إليكم، نرافق تطويركم في تونس وفي الخارج، لتلبية احتياجاتكم القانونية ومواجهة تحديات شركاتكم.</li>
     </ul>
    
  </>
) : (
  <>
   LAARIBI LAW FIRM represents a stable structure in perpetual evolution, which reacts and offers each client a different perspective and a favorable outlook for success.<br /> <br /> 
    <h3>We are lawyers and we love the law</h3>
    We are passionate about our profession, it combines knowledge with rigor, it tolerates no indulgence. Our knowledge is solid and constantly updated.<br /><br />
    <h3> Our team is ready to accompany you:</h3>
    <ul>
      <li>Apply the best tactics and provide optimal solutions.</li>
      <li>Available and attentive, we accompany your development, in Tunisia as well as abroad, to meet your legal needs and tackle your business challenges.</li>
    </ul>
     
  </>
)}

          </p>
        </div>
      </div>
<div className="row">
      <div className="col-4">
        <h2>
          {selectedLanguage === "ar"
            ? "من نحن ؟"
            : selectedLanguage === "fr"
            ? "Qui sommes-nous ?"
            : "Who Are We?"}
        </h2>
        <ul>
          <li>
            {selectedLanguage === "fr"
              ? "LAARIBI LAW FIRM agrège des profils issus de formations différentes, chacun a vécu un parcours qui a forgé son expérience, ayant permis la maturation d’une approche spécifique, la pratique au sein destructures variées et l’intégration des meilleures tactiques pour vous apporter une solution optimale."
              : selectedLanguage === "ar"
              ? "يضمّ مكتب العريبي للمحاماة مجموعة من ذوي الكفاءات الذين تخرجوا من تخصصات مختلفة، حيث مرّ كل منهم بمسار شكّل تجربته، مما سمح لهم باكتساب النضج المهني وفق نهج محدد، وممارسة العمل في هياكل متنوعة واستيعاب أفضل الاستراتيجيات لتقديم الحل الأمثل لك."
              : "LAARIBI LAW FIRM brings together profiles from different backgrounds, each having gone through a journey that has shaped their experience, allowing for the development of a specific approach, the practice within various structures, and the integration of the best tactics to provide you with an optimal solution."}           
          </li>
        </ul>
      </div>

      <div className="col-4">
        <h2>
          {selectedLanguage === "ar"
            ? "قيمنا"
            : selectedLanguage === "fr"
            ? "Nos Valeurs"
            : "Our Values"}
        </h2>
        <ul>
          <li>
            {selectedLanguage === "fr"
              ? "Travail d'équipe."
              : selectedLanguage === "ar"
              ? "العمل الجماعي."
              : "Teamwork."}
          </li>
          <li>
            {selectedLanguage === "fr"
              ? "Focus sur les objectifs futurs."
              : selectedLanguage === "ar"
              ? "التركيز على الأهداف المستقبلية."
              : "Focus on future goals."}
          </li>
          <li>
            {selectedLanguage === "fr"
              ? "Prenez challenge à toutes les difficultés."
              : selectedLanguage === "ar"
              ? "تحديد جميع التحديات."
              : "Take on challenges and overcome difficulties."}
          </li>
          <li>
            {selectedLanguage === "fr"
              ? "Guidé par une longue expérience."
              : selectedLanguage === "ar"
              ? "موجه من خلال خبرة طويلة."
              : "Guided by extensive experience."}
          </li>
          <li>
            {selectedLanguage === "fr"
              ? "Qualité & Excellence."
              : selectedLanguage === "ar"
              ? "الجودة والتميز."
              : "Quality & Excellence."}
          </li>
          <li>
            {selectedLanguage === "fr"
              ? "La Satisfaction du client est Prioritaire."
              : selectedLanguage === "ar"
              ? "رضا العميل هو الأولوية."
              : "Customer satisfaction is a priority."}
          </li>
        </ul>
      </div>

      <div className="col-4">
        <h2>
          {selectedLanguage === "ar"
            ? "روؤيتنا العالمية"
            : selectedLanguage === "fr"
            ? "Perspective Globale"
            : "Global Perspective"}
        </h2>
        <p>
          {selectedLanguage === "fr"
            ? "À ce jour, LAARIBI LAW FIRM s’appuie sur un réseau d’alliances stratégiques soigneusement sélectionnées, garantissant des conseils d’experts et des solutions juridiques aux clients privés et aux  de toutes tailles et nationalités."
            : selectedLanguage === "ar"
            ? "اليوم يعتمد مكتب العريبي للمحاماة  على شبكة من التحالفات الاستراتيجية المختارة بعناية ، مما يضمن تقديم خدمات استشارية وحلول قانونية للعملاء الخواص والمؤسسات من جميع الأحجام والجنسيات."
            : "To date, LAARIBI LAW FIRM relies on a network of carefully selected strategic alliances, ensuring expert advice and legal solutions for private clients and individuals of all sizes and nationalities."}
        </p>
      </div>
      </div>
    </section>
  );
};

export default PhotoSection;
