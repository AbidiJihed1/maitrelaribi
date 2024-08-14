import React from "react";
import './ConsultationComponent.css'; // Add a separate CSS file for styling

const ConsultationComponent = ({ selectedLanguage }) => {
  return (
    <div className="consultation-container" style={{ marginTop: "25px", direction: selectedLanguage === 'ar' ? 'rtl' : 'ltr' }}>
      <h2>
        {selectedLanguage === 'ar'
          ? "هل ترغب في استشارة؟"
          : selectedLanguage === 'fr'
          ? '	Envisagez-vous une consultation ?'
          : 'Would you like a consultation?'}
      </h2>
      <ul>
      <li>
      {selectedLanguage === 'ar'
          ? "	هل لديك خطة لتكوين شركة أو إحالتها أو تسوية وضعيتها؟"
          : selectedLanguage === 'fr'
          ? '	Avez-vous un projet de création ou de transfert ou de régularisation de société ?'
          : '	Do you have a plan to create or transfer or regularize a company?'}
        </li>
      <li>
        {selectedLanguage === 'ar'
          ? "	هل تحتاج إلى مساعدة قانونية فيما يتعلق بالتركات والميراث والوصايا؟"
          : selectedLanguage === 'fr'
          ? "	Avez-vous besoin d'une assistance juridique concernant les successions, héritages et testaments ?"
          : '	Do you need legal assistance regarding estates, inheritances and wills?'}
      </li>
      
        <li>
          {selectedLanguage === 'ar'
            ? "	هل تبحث عن محامين متخصصين في التقاضي وتسوية المنازعات؟"
            : selectedLanguage === 'fr'
            ? "	Recherchez-vous des avocats spécialisés dans le contentieux et le règlement des différends ?"
            : '	Are you looking for lawyers specializing in litigation and dispute resolution?'}
        </li>
        <li>
          {selectedLanguage === 'ar'
            ? "	هل تحتاج إلى مساعدة في النزاع الإداري؟"
            : selectedLanguage === 'fr'
            ? "	Avez-vous besoin d'aide pour un recours administratif ?"
            : '	Do you need help with an administrative dispute?'}
        </li>
        <li>
          {selectedLanguage === 'ar'
            ? "	هل تبحث عن استشارة قانونية بشأن القانون المدني أو الجزائي؟"
            : selectedLanguage === 'fr'
            ?"	Cherchez-vous des conseils juridiques en matière de droit civil ou pénal?"
            : '	Are you looking for legal advice on civil or criminal law?'}
        </li>
        <li>
          {selectedLanguage === 'ar'
            ? "	هل تواجه مشاكل مع البنك الذي تتعامل معه فيما يتعلق بقرض بنكي  أو حساب جاري؟"
            : selectedLanguage === 'fr'
            ? "	Rencontrez-vous des problèmes avec votre banque concernant un prêt bancaire ou un compte courant ?"
            : '	Are you having problems with your bank regarding a loan or current account?'}
        </li>
        <li>
          {selectedLanguage === 'ar'
            ? "	هل ترغب في رأي محامٍ متخصص في قضايا الطلاق؟"
            : selectedLanguage === 'fr'
            ? "	Souhaitez-vous l'avis d'un avocat spécialisé en divorce?"
            : '	Do you want the opinion of a lawyer specializing in divorce?'}
        </li>
       
      
      </ul>
    </div>
   
  );
};

export default ConsultationComponent;
