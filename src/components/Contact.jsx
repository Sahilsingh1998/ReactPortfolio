import React from 'react'

function Contact() {
  return (
    <>
      <div className="container contact" id='contact'>
        <h1>CONTACT ME</h1>
        <section class="contact_us mt-5">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="contact_inner">
                  <div class="row">
                    <div class="col-md-10">
                      <div class="contact_form_inner">
                        <div class="contact_field">
                          <h3>Contact Me</h3>
                          <p>Feel Free to contact me any time. I will get back to you as soon as I can!.</p>
                          <form action="https://formspree.io/f/mbjnazvj"
                            method="POST">
                            <input type="text" name='Name' class="form-control form-group py-2" placeholder="Name" required />
                            <input type="text" name='Email' class="form-control form-group py-2" placeholder="Email" required />
                            <input type="text" name='phone' class="form-control form-group py-2" placeholder="Phone no" required />
                            <textarea class="form-control form-group py-2" placeholder="Message" required></textarea>
                            <button class="contact_form_submit">Send</button>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-2">
                      <div class="right_conatct_social_icon d-flex align-items-end">
                        <div class="socil_item_inner d-flex">
                          <li><a href='https://www.facebook.com/share/q2cd6v3zzMU3bDs9/?mibextid=qi2Omg' target='blank'><i class="fab fa-facebook-square"></i></a></li>
                          <li><a href='https://www.instagram.com/it_sahil_rajput?igsh=MWNoM2ZhY3UwYWJhMw==' target='blank'><i class="fab fa-instagram"></i></a></li>
                          <li><a href='https://x.com/sahilsingh7782?t=GYekHIEViuZyDbat-Ml4kw&s=08' target='blank'><i class="fab fa-twitter"></i></a></li>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="contact_info_sec">
                    <h4>Contact Info</h4>
                    <div class="d-flex info_single align-items-center">
                      <i class="fas fa-headset"></i>
                      <span>+91 7782864311</span>
                    </div>
                    <div class="d-flex info_single align-items-center">
                      <i class="fas fa-envelope-open-text"></i>
                      <span>singhsahil.8340@gmail.com</span>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container-fluid mt-5">
          <div class="responsive-map">
            <iframe title="Address" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7205.258830412314!2d87.24579554199615!3d25.45065026019435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f0182634c26067%3A0x26b88ea67dd3e779!2sKursela%2C%20Bihar!5e0!3m2!1sen!2sin!4v1710963292649!5m2!1sen!2sin" allowfullscreen></iframe>
          </div>
        </div>

      </div>
    </>
  )
}

export default Contact