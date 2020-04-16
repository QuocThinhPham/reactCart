import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer className="page-footer center-on-small-only">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-2 ml-auto">
              <h5 className="title social-section-title">Social Media</h5>
              <div className="social-section text-md-left">
                <ul className="text-center">
                  <li>
                    <button className="btn-floating  btn-fb waves-effect waves-light">
                      <i className="fa fa-facebook" />
                    </button>
                  </li>
                  <li>
                    <button className="btn-floating  btn-ins waves-effect waves-light">
                      <i className="fa fa-instagram" />
                    </button>
                  </li>
                  <li>
                    <button className="btn-floating  btn-tw waves-effect waves-light">
                      <i className="fa fa-twitter" />
                    </button>
                  </li>
                  <li>
                    <button className="btn-floating  btn-yt waves-effect waves-light">
                      <i className="fa fa-youtube" />
                    </button>
                  </li>
                  <li>
                    <button className="btn-floating  btn-li waves-effect waves-light">
                      <i className="fa fa-linkedin" />
                    </button>
                  </li>
                  <li>
                    <button className="btn-floating  btn-dribbble waves-effect waves-light">
                      <i className="fa fa-dribbble left" />
                    </button>
                  </li>
                  <li>
                    <button className="btn-floating  btn-pin waves-effect waves-light">
                      <i className="fa fa-pinterest" />
                    </button>
                  </li>
                  <li>
                    <button className="btn-floating  btn-gplus waves-effect waves-light">
                      <i className="fa fa-google-plus" />
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2">
              <h5 className="title">Delivery</h5>
              <ul>
                <li>
                  <p>Store Delivery</p>
                </li>
                <li>
                  <p>Online Delivery</p>
                </li>
                <li>
                  <p>Delivery Terms &amp; Conditions</p>
                </li>
                <li>
                  <p>Tracking</p>
                </li>
              </ul>
            </div>
            <div className="col-lg-2">
              <h5 className="title">Need help?</h5>
              <ul>
                <li>
                  <p>FAQ</p>
                </li>
                <li>
                  <p>Contact Us</p>
                </li>
                <li>
                  <p>Return Policy</p>
                </li>
                <li>
                  <p>Product Registration</p>
                </li>
              </ul>
            </div>
            <div className="col-lg-4">
              <h5 className="title">Instagram Photos</h5>
              <ul className="instagram-photos">
                <li>
                  <div className="view overlay hm-white-slight z-depth-1">
                    <img className="img-fluid" src="http://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg" alt="" />
                    <div>
                      <div className="mask waves-light waves-effect waves-light" />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="view overlay hm-white-slight z-depth-1">
                    <img className="img-fluid" src="http://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg" alt="" />
                    <div>
                      <div className="mask waves-light waves-effect waves-light" />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="view overlay hm-white-slight z-depth-1">
                    <img className="img-fluid" src="http://mdbootstrap.com/img/Photos/Avatars/img%20(19).jpg" alt="" />
                    <div>
                      <div className="mask waves-light waves-effect waves-light" />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="view overlay hm-white-slight z-depth-1">
                    <img className="img-fluid" src="http://mdbootstrap.com/img/Photos/Avatars/img%20(16).jpg" alt="" />
                    <div>
                      <div className="mask waves-light waves-effect waves-light" />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="view overlay hm-white-slight z-depth-1">
                    <img className="img-fluid" src="http://mdbootstrap.com/img/Photos/Avatars/img%20(5).jpg" alt="" />
                    <div>
                      <div className="mask waves-light waves-effect waves-light" />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="view overlay hm-white-slight z-depth-1">
                    <img className="img-fluid" src="http://mdbootstrap.com/img/Photos/Avatars/img%20(18).jpg" alt="" />
                    <div>
                      <div className="mask waves-light waves-effect waves-light" />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="view overlay hm-white-slight z-depth-1">
                    <img className="img-fluid" src="http://mdbootstrap.com/img/Photos/Avatars/img%20(15).jpg" alt="" />
                    <div>
                      <div className="mask waves-light waves-effect waves-light" />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="view overlay hm-white-slight z-depth-1">
                    <img className="img-fluid" src="http://mdbootstrap.com/img/Photos/Avatars/img%20(17).jpg" alt="" />
                    <div>
                      <div className="mask waves-light waves-effect waves-light" />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container-fluid">
            © 2016 Copyright:
            <a href="http://www.MDBootstrap.com"> MDBootstrap.com </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
