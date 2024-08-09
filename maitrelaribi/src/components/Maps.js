import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Maps = () => {
  const navigate = useNavigate();

  return (
    <div className="row">

    <div className='col-1' style={{backgroundColor:'#e6cba1',height:"200px",display:"flex",justifyContent:"center"}}>
    <a href='https://www.google.com/maps/@36.8009544,10.1660099,3a,75y,19.13h,90t/data=!3m7!1e1!3m5!1sRqvz3Uh07v8ynuDLTfpHkA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DRqvz3Uh07v8ynuDLTfpHkA%26cb_client%3Dsearch.gws-prod.gps%26w%3D86%26h%3D86%26yaw%3D19.126188%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656?hl=fr&entry=ttu'><FaLocationDot size={50} style={{marginTop:"76px",alignItems:"center"}} color='blue'/></a>
    </div> 
    <div className="col-4">
            <h4 className="media-heading">Tunisie</h4>
            <p style={{ paddingTop: '10px' }}>
            Complexe Carthage Center 2ème étage A27<br />
            aveneu de carthage Tunis 1049, Tunisie<br />
              Tél. : +216 98 351 049<br />
              Fax. : +216 70 256 595<br />
              contact@maitrelaaribi.com
            </p><br />
          </div>
    <div className='col-7'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1316.6771650450926!2d10.181933999999991!3d36.7952653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd35001508983f%3A0x23d1c0bf07e45964!2sCarthage%20Center!5e1!3m2!1sfr!2stn!4v1723196973096!5m2!1sfr!2stn" width="100%" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
};

export default Maps;