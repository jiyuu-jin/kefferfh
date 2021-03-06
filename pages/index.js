import Link from 'next/link'
import Layout from '../components/Layout'
import {useEffect} from 'react'
import $ from 'jquery';

if (typeof window !== 'undefined') {
    window.$ = $;
    window.jQuery = $;
    require('materialize-css');
}

export default function Home() {
  
  useEffect(() => {
    $('.parallax').parallax();
  });

  return (
    <div>
      <Layout title={"Keffer Funeral Home"}>
      <div>
      <div>
        <div className="container">
          <div className="section">

            <div className="row">
              <div className="search-contain">
                <a style={{ backgroundColor: '#005497', margin: '20px auto 0 auto', paddingBottom: "4em" }} className="waves-effect waves-light btn-large" href="https://www.legacy.com/search?cityId=297134&cityUrl=york&countryId=366899&countryUrl=united-states-of-america&dateRange=Last30Days&firstName=&stateAbbrev=PA&stateId=366890&stateUrl=pennsylvania" target="_blank"> <h5 style={{fontSize: '25px', fontWeight: '300' }}>Click to Search Obituaries</h5></a>
              </div>
              <h6 style={{ textAlign: 'center', display: 'block', color: 'black', fontWeight: 'bold' }}>* By clicking the search you will be redirected to legacy.com</h6>
            </div>
          </div>

        </div>
      </div>

      <div className="container">
        <div className="section">

          <div className="row hover-contain">

            <div className="col s12 m4 hover-thing">
              <div className="card z-depth-5">
                <a className="black-text" href="https://www.google.com/maps/dir//John+W+Keffer+Funeral+Home+Inc,+902+Mt+Rose+Ave,+York,+PA+17403/@39.9609965,-76.7092943,17z/data=!4m15!1m6!3m5!1s0x89c88ec6f9dd0131:0xce3ff1ada7892b06!2sJohn+W+Keffer+Funeral+Home+Inc!8m2!3d39.9609965!4d-76.7071056!4m7!1m0!1m5!1m1!1s0x89c88ec6f9dd0131:0xce3ff1ada7892b06!2m2!1d-76.7071056!2d39.9609965">
                  <div className="card-image">
                    <img alt=" " src="/images/east_york.jpg" />
                  </div>
                  <h5 className="card-title center">Keffer Funeral Home</h5>
                  <div className="card-content center">
                    <h6>902 Mt. Rose Ave</h6>
                    <p>York, PA 17403</p>
                    <a href="tel:717-854-9211">(717) 854-9211</a>
                    <p>Fax: (717) 846-5229</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="col s12 m4 hover-thing">
              <div className="card z-depth-5">
                <a className="black-text" href="https://www.google.com/maps/dir/''/371+Kings+Mill+Rd,+York,+PA+17401/data=!4m5!4m4!1m0!1m2!1m1!1s0x89c88eaa91b286f7:0xe8c44fa381f4efc6?sa=X&ved=0ahUKEwjao7CZwcTVAhVLMSYKHdUFAOUQwwUIKTAA">
                  <div className="card-image">
                    <img alt=" " src="/images/crematory.jpg" />
                  </div>
                  <h5 className="card-title center">Cremation Direct Service of York Crematory</h5>
                  <div className="card-content center">
                    <h6>371 Kings Mill Rd</h6>
                    <p>York, PA  17401</p>
                    <a href="tel:717-845-2399">(717) 845-2399</a>
                  </div>
                </a>
              </div>
            </div>

            <div className="col s12 m4 hover-thing">
              <div className="card z-depth-5">
                <a className="black-text" href="https://www.google.com/maps/dir//2114+W+Market+St,+York,+PA+17404/@39.9518766,-76.7752103,17z/data=!4m16!1m7!3m6!1s0x89c88b86be60ea29:0x91b62406d9c1360a!2s2114+W+Market+St,+York,+PA+17404!3b1!8m2!3d39.9518766!4d-76.7730216!4m7!1m0!1m5!1m1!1s0x89c88b86be60ea29:0x91b62406d9c1360a!2m2!1d-76.7730216!2d39.9518766">
                  <div className="card-image">
                    <img alt=" " src="/images/west_york.jpg" />
                  </div>
                  <h5 className="card-title center">Keffer Funeral Home</h5>
                  <div className="card-content center">
                    <h6>2114 W. Market St.</h6>
                    <p>York, PA  17404</p>
                    <a href="tel:717-792-3239">(717) 792-3239</a>
                    <p>Fax: (717) 792-3764</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section light-blue darken-4 center">
        <h4 className="white-text">Our Staff</h4>
        <div className="the-staff">
          <div className="staff-mem">
            <img alt=" " height="200px" src="/images/john_keffer.jpg" />
            <div className="staff-title">
              <span>John W. Keffer</span> <br />
              <span>Supervisor</span>
            </div>
          </div>
          <div className="staff-mem">
            <img alt=" " height="200px" src="/images/joseph_keffer.jpg" />
            <div className="staff-title">
              <span>Joseph V. Keffer</span> <br />
              <span>Supervisor</span>
            </div>
          </div>
          <div className="staff-mem">
            <img alt=" " height="200px" src="/images/george_curilla.jpg" />
            <div className="staff-title">
              <span>George J. Curilla</span> <br />
              <span>Funeral Director</span>
            </div>
          </div>
          <div className="staff-mem">
            <img alt=" " height="200px" src="/images/sean_pelkey.jpg" />
            <div className="staff-title">
              <span>Sean S. Pelkey</span> <br />
              <span>Funeral Director</span>
            </div>
          </div>
          <div className="staff-mem">
            <img alt=" " height="200px" src="/images/Patrick_O_Brien.jpg" />
            <div className="staff-title">
              <span>Patrick F. O'Brien</span> <br />
              <span>Funeral Director</span>
            </div>
          </div>
          <div className="staff-mem">
            <img alt=" " height="200px" src="/images/kevin_sandmeyer.jpg" />
            <div className="staff-title">
              <span>Kevin C. Sandmeyer</span> <br />
              <span>Office Manager</span>
            </div>
          </div>
          <div className="staff-mem">
            <img alt=" " height="200px" src="/images/john_keffer_2.jpg" />
            <div className="staff-title">
              <span>John W. Keffer, III</span> <br />
              <span>Admin. Associate</span>
            </div>
          </div>
          <div className="staff-mem">
            <img alt=" " height="200px" src="/images/Grace_Keffer_Ireland.jpg" />
            <div className="staff-title">
              <span>Grace Keffer Ireland</span><br />
              <span>Admin. Assistant</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="section">
          <div className="row">
            <div className="col s12 m3">
              <Link href="/caskets">
                <a style={{color: "black"}}>
                  <div className="icon-block">
                    <h5>Caskets</h5>
                    <img alt=" " src="/images/casket.jpg" />
                  </div>
                </a>
              </Link>
            </div>
            <div className="col s12 m3">
              <Link href="/containers">
              <a style={{color: "black"}}>
                <div className="icon-block">
                    <h5>Burial Containers</h5>
                    <img alt=" " src="/images/burial_container.jpg" />
                  </div>
                </a>
              </Link>
            </div>
            <div className="col s12 m3">
              <a className="black-text" href="http://www.pageturnpro.com/Crescent-Memorial/47278-Crescent-Memorial/puredefault.html">
                <div className="icon-block">
                  <h5>Urns</h5>
                  <img alt=" " height="170px" src="/images/urn.png" />
                </div>
              </a>
            </div>
            <div className="col s12 m3">
              <Link href="/cards">
              <a style={{color: "black"}}>
                <div className="icon-block">
                  <h5>Prayer Cards</h5>
                  <img alt=" " height="170px" src="/images/prayer_card.jpg" />
                </div>
              </a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div id="contact" className="parallax-container valign-wrapper">
        <div className="section no-pad-bot">
          <div className="container">
            <div className="card card-up">
              <div className="card-content">
                <div className="row">
                  <form method="POST" className="col s12" action="https://formspree.io/kefferfh@aol.com">
                    <div className="row">
                      <div className="input-field col s6">
                        <input name="first_name" id="first_name" type="text" className="validate" required />
                        <label htmlFor="first_name">First Name</label>
                      </div>
                      <div className="input-field col s6">
                        <input name="last_name" id="last_name" type="text" className="validate" required />
                        <label htmlFor="last_name">Last Name</label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <input name="_replyto" id="email" type="email" className="validate" required />
                        <label htmlFor="email">Email</label>
                      </div>
                    </div>
                    <div className="input-field col s12">
                      <input name="message" id="message" type="text" className="validate" required />
                      <label htmlFor="message">Brief Message</label>
                    </div>
                    <center>
                      <button className="btn waves-effect waves-light" value="send" type="submit" name="action">
                        <i className="material-icons right">send</i>
                      </button>
                    </center>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="parallax"><img src="/images/background2.jpg" alt="Unsplashed background img 2" /></div>
      </div>


      <div className="container center">
        <div className="section">
          <h4 className="black-text">Why choose us?</h4>
          <div className="row">
            <div className="col s12 m4">
              <div className="icon-block">
                <img alt=" " src="/images/cremation.png" />
              </div>
            </div>
            <div className="col s12 m4">
              <div className="icon-block">
                <img className="best" alt=" " src="/images/2018.jpg" />
              </div>
            </div>
            <div className="col s12 m4">
              <div className="icon-block">
                <img className="best" alt=" " src="/images/secure_choice.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      </Layout>
    </div>
  )
}
