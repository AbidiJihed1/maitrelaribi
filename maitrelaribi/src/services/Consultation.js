import React from "react";
import './ConsultationComponent.css'; // Add a separate CSS file for styling

const ConsultationComponent = ({ selectedLanguage }) => {
  return (
    <div className="consultation-container" style={{ marginTop: "25px", direction: selectedLanguage === 'ar' ? 'rtl' : 'ltr' }}>
      <h2>
        {selectedLanguage === 'ar'
          ? 'هل ترغب في استشارة؟'
          : selectedLanguage === 'fr'
          ? 'Envisagez-vous une consultation ?'
          : 'Would you like a consultation?'}
      </h2>
      <p>
        {selectedLanguage === 'ar'
          ? 'هل لديك خطة لإنشاء شركة أو نقلها؟'
          : selectedLanguage === 'fr'
          ? 'Avez-vous un projet de création ou de transfert de société ?'
          : 'Do you have a plan to create or transfer a company?'}
      </p>
      <ul>
        <li>
          {selectedLanguage === 'ar'
            ? 'هل تحتاج إلى مساعدة قانونية فيما يتعلق بالتركات والميراث والوصايا؟'
            : selectedLanguage === 'fr'
            ? "Avez-vous besoin d'une assistance juridique concernant les successions, héritages et testaments ?"
            : 'Do you need legal assistance regarding estates, inheritances and wills?'}
        </li>
        <li>
          {selectedLanguage === 'ar'
            ? 'هل تبحث عن محامين متخصصين في التقاضي وتسوية المنازعات؟'
            : selectedLanguage === 'fr'
            ? 'Recherchez-vous des avocats spécialisés dans le contentieux et le règlement des différends ?'
            : 'Are you looking for lawyers specializing in litigation and dispute resolution?'}
        </li>
        <li>
          {selectedLanguage === 'ar'
            ? 'هل تحتاج إلى مساعدة في الاستئناف الإداري؟'
            : selectedLanguage === 'fr'
            ? "Avez-vous besoin d'aide pour un recours administratif ?"
            : 'Do you need help with an administrative appeal?'}
        </li>
        <li>
          {selectedLanguage === 'ar'
            ? 'هل تبحث عن مشورة قانونية بشأن القانون الجنائي أو المدني؟'
            : selectedLanguage === 'fr'
            ? 'Cherchez-vous des conseils juridiques en matière de droit pénal ou civil ?'
            : 'Are you looking for legal advice on criminal or civil law?'}
        </li>
        <li>
          {selectedLanguage === 'ar'
            ? 'هل تواجه مشاكل مع البنك الذي تتعامل معه فيما يتعلق بقرض أو حساب جاري؟'
            : selectedLanguage === 'fr'
            ? "Rencontrez-vous des problèmes avec votre banque concernant un prêt ou un compte courant ?"
            : 'Are you having problems with your bank regarding a loan or current account?'}
        </li>
        <li>
          {selectedLanguage === 'ar'
            ? 'هل ترغب في رأي محامٍ متخصص في قضايا الطلاق أو الزواج؟'
            : selectedLanguage === 'fr'
            ? "Souhaitez-vous l'avis d'un avocat spécialisé en divorce ou en mariage ?"
            : 'Do you want the opinion of a lawyer specializing in divorce or marriage?'}
        </li>
      
      </ul>
    </div>
   
  );
};

export default ConsultationComponent;
