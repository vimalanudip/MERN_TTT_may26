export default function Footer()
{
  return (
    <>
       <div className="container-fluid bg-secondary text-white mt-5 pt-5 px-sm-3 px-md-5">
        <div className="row pt-5">
            <div className="col-lg-3 col-md-6 mb-5">
                <a href="index.html" className="navbar-brand">
                    <h1 className="m-0 mt-n2 text-white display-4"><span className="text-primary">D</span>ot<span className="text-primary">C</span>om</h1>
                </a>
                <p>Volup amet magna clita tempor. Tempor sea eos vero ipsum. Lorem lorem sit sed elitr sed kasd et</p>
                <div className="d-flex justify-content-start mt-4">
                    <a className="btn btn-outline-primary rounded-circle text-center mr-2 px-0" style= {{'width': '38px;', 'height': '38px;'}}><i className="fab fa-twitter"></i></a>
                    <a className="btn btn-outline-primary rounded-circle text-center mr-2 px-0" style={{'width': '38px;', 'height': '38px;'}}  href="#"><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-outline-primary rounded-circle text-center mr-2 px-0" style={{'width': '38px;', 'height': '38px;'}}  href="#"><i className="fab fa-linkedin-in"></i></a>
                    <a className="btn btn-outline-primary rounded-circle text-center mr-2 px-0" style={{'width': '38px;', 'height': '38px;'}}  href="#"><i className="fab fa-instagram"></i></a>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
                <h5 className="font-weight-bold text-primary mb-4">Quick Links</h5>
                <div className="d-flex flex-column justify-content-start">
                    <a className="text-white mb-2" href="#"><i className="fa fa-angle-right text-primary mr-2"></i>Home</a>
                    <a className="text-white mb-2" href="#"><i className="fa fa-angle-right text-primary mr-2"></i>About Us</a>
                    <a className="text-white mb-2" href="#"><i className="fa fa-angle-right text-primary mr-2"></i>Services</a>
                    <a className="text-white mb-2" href="#"><i className="fa fa-angle-right text-primary mr-2"></i>Pricing</a>
                    <a className="text-white" href="#"><i className="fa fa-angle-right text-primary mr-2"></i>Contact Us</a>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
                <h5 className="font-weight-bold text-primary mb-4">Popular Links</h5>
                <div className="d-flex flex-column justify-content-start">
                    <a className="text-white mb-2" href="#"><i className="fa fa-angle-right text-primary mr-2"></i>Home</a>
                    <a className="text-white mb-2" href="#"><i className="fa fa-angle-right text-primary mr-2"></i>About Us</a>
                    <a className="text-white mb-2" href="#"><i className="fa fa-angle-right text-primary mr-2"></i>Services</a>
                    <a className="text-white mb-2" href="#"><i className="fa fa-angle-right text-primary mr-2"></i>Pricing</a>
                    <a className="text-white" href="#"><i className="fa fa-angle-right text-primary mr-2"></i>Contact Us</a>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
                <h5 className="font-weight-bold text-primary mb-4">Get In Touch</h5>
                <p>Dolor clita stet nonumy clita diam vero, et et ipsum diam labore</p>
                <p><i className="fa fa-map-marker-alt text-primary mr-2"></i>123 Street, New York, USA</p>
                <p><i className="fa fa-phone-alt text-primary mr-2"></i>+012 345 67890</p>
                <p><i className="fa fa-envelope text-primary mr-2"></i>info@example.com</p>
            </div>
        </div>
    </div>
    <div className="container-fluid py-4 px-sm-3 px-md-5">
        <p className="m-0 text-center">
            &copy; <a className="font-weight-semi-bold" href="#">Your Site Name</a>. All Rights Reserved. Designed by
            <a className="font-weight-semi-bold" href="https://htmlcodex.com">HTML Codex</a>
        </p>
    </div>
   
</>
  )


}