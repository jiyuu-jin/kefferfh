/* eslint-disable max-len */
import React from 'react';
import Layout from '../components/Layout';

const ImmediateBurial = () => ({
  render() {
    return (
      <Layout title={"Immediate Burial Services"} >
        <div className="container">

          <h3 className="inTheBlue">Effective: January 1, 2021</h3>

          <h4 className="blue-text">Immediate Burial Service</h4>
          <p>Direct Burial does not preclude family viewing or choice of casket.  The following services can include a 1/2 hour private family viewing at the funeral home, including embalming and additional care of the body for viewing. (additional charge) <span className="bold"> 775.00</span> </p>


          <h5 className="blue-text">1. Immediate Burial followed by Memorial Service at Funeral Home or Church:</h5>
          <p>Full professional service and limited care of the body, removal from place of death, visitation, staff for memorial service, transportation to cemetery, register book, memorial folders or prayer cards, acknowledgment folders, office work, flannel covered casket, use of Funeral Home and equipment and service of assistants.</p>
          <p> Service at Funeral Home or Church *¹ (includes flannel covered casket): <span className="bold">$3,590.00</span></p>
          <p>Funeral Home charges without casket (caskets $465 & up): <span className="bold">$3,080.00</span></p>


          <h5 className="blue-text">2. Immediate Burial followed by Memorial Service (One Funeral Director):</h5>
          <p>As above with limited family requirements for funeral home staff and no cemetery procession.  Service other than funeral home (No flower or service car)*¹ including flannel covered casket.: <span className="bold">$2,715.00</span>
                Funeral Home charges without casket (caskets $465 & up): - <span className="bold">$2,205.00</span></p>


          <h5 className="blue-text">3. Immediate Burial with Graveside Service:</h5>
          <p>Same as above with service at local cemetery (No register book or memorial cards) flannel casket: - <span className="bold">$2,345.00</span>
              Funeral Home charges without casket (caskets $465 & up): - <span className="bold">$1,835.00</span>
          </p>

          <p>* Without register book, acknowledgment cards, memorial folders deduct ($190.00)</p>
          <p>¹ Includes minimum charge for flannel covered casket ($415.00) / (caskets $415 & up)</p>


          <h5 className="blue-text">4. Immediate Burial Service:</h5>
          <p>Limited professional service and care of the body, removal from place of death, office  and transportation expense and flannel (Without any attendant rites or ceremonies)
              Immediate Burial including flannel covered casket. (must be paid at or prior to time of need): - <span className="bold">$2,085.00</span>
              Funeral Home charges without casket (caskets $415 & up): - <span className="bold">$1,575.00</span>
          </p>

          <h6>*Additional charges for the following services:</h6>
          <ul className="disc-list">
            <li>Any cemetery burial charges</li>
            <li>Vault at the cemetery. ($799.00 & up).</li>
            <li>Certified copies of the death certificate.</li>
            <li>$20.00 each</li>
            <li>Honorarium for clergy.</li>
            <li>Newspapers at cost.</li>
          </ul>

          <p>Flannel covered casket is suitable for a person of average height and weight.</p>
        </div>
      </Layout>
    );
  },
});


export default ImmediateBurial;
