import React from "react";
import "./Services.css";
import { BsHouseDoor } from 'react-icons/bs';
import { PiHandshakeFill } from "react-icons/pi";
import { TbCarGarage } from "react-icons/tb";
import { GiHandcuffed, GiDiploma } from "react-icons/gi";
import { GoLaw } from "react-icons/go";
import { FaBriefcase } from "react-icons/fa"; // New icon

import { useNavigate } from "react-router-dom";

const Services = ({ selectedLanguage }) => {
  const navigate = useNavigate();

  return (
    <div>
      <h1 style={{ display: "flex", justifyContent: "center" }}>
        {selectedLanguage === 'ar'
          ? 'الخدمات'
          : selectedLanguage === 'fr'
          ? 'Services'
          : 'Services'}
      </h1>
      <div className='row' style={{ display: "flex", justifyContent: "center" }}>
        <div className="col-sm-3" onClick={() => navigate('/DroitDesAffaires')}>
          <div className="practice-item" style={{ backgroundImage: "url('https://honors.fiu.edu/wp-content/uploads/2024/04/law1.jpg')" }}>
            <div className='test'>
              <div className="practice_inner">
                <div className="practice-icon">
                  <PiHandshakeFill size={50} />
                </div>
                <div className="title">
                  {selectedLanguage === 'ar' ? 'قانون الأعمال' : selectedLanguage === 'fr' ? 'Droit des affaires' : 'Business Law'}
                </div>
                <div className="descr">
                  {selectedLanguage === 'ar'
                    ? 'يقدم قسم القانون التجاري...'
                    : selectedLanguage === 'fr'
                    ? 'Le Département du droit des affaires...'
                    : 'The Business Law Department...'}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-3" onClick={() => navigate('/DroitCivil')}>
          <div className="practice-item" style={{ backgroundImage: "url('https://honors.fiu.edu/wp-content/uploads/2024/04/law1.jpg')" }}>
            <div className='test'>
              <div className="practice_inner">
                <div className="practice-icon">
                  <GoLaw size={50} />
                </div>
                <div className="title">
                  {selectedLanguage === 'ar' ? 'القانون المدني' : selectedLanguage === 'fr' ? 'Droit civil' : 'Civil Law'}
                </div>
                <div className="descr">
                  {selectedLanguage === 'ar'
                    ? 'تمتلك فريقنا من المحامين...'
                    : selectedLanguage === 'fr'
                    ? 'Notre équipe d\'avocats possède...'
                    : 'Our team of lawyers...'}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-3" onClick={() => navigate('/DroitImmobilier')}>
          <div className="practice-item" style={{ backgroundImage: "url('https://honors.fiu.edu/wp-content/uploads/2024/04/law1.jpg')" }}>
            <div className='test'>
              <div className="practice_inner">
                <div className="practice-icon">
                  <BsHouseDoor size={50} />
                </div>
                <div className="title">
                  {selectedLanguage === 'ar' ? 'قانون العقارات والضرائب' : selectedLanguage === 'fr' ? 'Droit Immobilier et Fiscal' : 'Real Estate and Tax Law'}
                </div>
                <div className="descr">
                  {selectedLanguage === 'ar'
                    ? 'يتوفر المكتب على فريق من المحامين...'
                    : selectedLanguage === 'fr'
                    ? 'Le cabinet dispose d\'une équipe...'
                    : 'The office has a team of specialized lawyers...'}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-3" onClick={() => navigate('/DroitDesAssurances')}>
          <div className="practice-item" style={{ backgroundImage: "url('https://honors.fiu.edu/wp-content/uploads/2024/04/law1.jpg')" }}>
            <div className='test'>
              <div className="practice_inner">
                <div className="practice-icon">
                  <TbCarGarage size={50} />
                </div>
                <div className="title">
                  {selectedLanguage === 'ar' ? 'قانون التأمين وتعويض الأضرار' : selectedLanguage === 'fr' ? 'Droit des assurances et indemnisation des dommages' : 'Insurance Law and Compensation of Damages'}
                </div>
                <div className="descr">
                  {selectedLanguage === 'ar'
                    ? 'يمتلك قسم قانون التأمين...'
                    : selectedLanguage === 'fr'
                    ? 'Le Département du droit des assurances...'
                    : 'The Insurance Law Department...'}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-3" onClick={() => navigate('/DroitPénal')}>
          <div className="practice-item" style={{ backgroundImage: "url('https://honors.fiu.edu/wp-content/uploads/2024/04/law1.jpg')" }}>
            <div className='test'>
              <div className="practice_inner">
                <div className="practice-icon">
                  <GiHandcuffed size={50} />
                </div>
                <div className="title">
                  {selectedLanguage === 'ar' ? 'القانون الجنائي' : selectedLanguage === 'fr' ? 'Droit Pénal' : 'Criminal Law'}
                </div>
                <div className="descr">
                  {selectedLanguage === 'ar'
                    ? 'يتمثل دورنا في مساعدة عميلنا...'
                    : selectedLanguage === 'fr'
                    ? 'Notre rôle est d’aider notre client...'
                    : 'Our role is to assist our client...'}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* New Service Section */}
        <div className="col-sm-3" onClick={() => navigate('/CorporateLaw')}>
          <div className="practice-item" style={{ backgroundImage: "url('https://honors.fiu.edu/wp-content/uploads/2024/04/law1.jpg')" }}>
            <div className='test'>
              <div className="practice_inner">
                <div className="practice-icon">
                  <FaBriefcase size={50} /> {/* New icon for Corporate Law */}
                </div>
                <div className="title">
                  {selectedLanguage === 'ar' ? 'قانون الشركات' : selectedLanguage === 'fr' ? 'Droit des Sociétés' : 'Corporate Law'}
                </div>
                <div className="descr">
                  {selectedLanguage === 'ar'
                    ? 'يقدم قسم قانون الشركات استشارات قانونية متخصصة في جميع جوانب تنظيم الشركات وإدارتها...'
                    : selectedLanguage === 'fr'
                    ? 'Le Département de droit des sociétés propose des consultations juridiques spécialisées sur tous les aspects de la gestion des entreprises...'
                    : 'The Corporate Law Department provides specialized legal consultations on all aspects of corporate governance and management...'}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-3" onClick={() => navigate('/Formation')}>
          <div className="practice-item" style={{ backgroundImage: "url('https://honors.fiu.edu/wp-content/uploads/2024/04/law1.jpg')" }}>
            <div className='test'>
              <div className="practice_inner">
                <div className="practice-icon">
                  <GiDiploma size={50} />
                </div>
                <div className="title">
                  {selectedLanguage === 'ar' ? 'التدريب' : selectedLanguage === 'fr' ? 'Formation' : 'Training'}
                </div>
                <div className="descr">
                  {selectedLanguage === 'ar'
                    ? 'تقدم LAARIBI LAW FIRM جلسات تدريب مخصصة ومتكاملة...'
                    : selectedLanguage === 'fr'
                    ? 'LAARIBI LAW FIRM propose des sessions de formation sur mesure...'
                    : 'LAARIBI LAW FIRM offers customized, comprehensive, and tailored training sessions...'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
