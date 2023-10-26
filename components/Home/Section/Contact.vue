<template>
  <section id="contact" class="section-bg wow fadeInUp">
    <div class="container">
      <div class="section-header">
        <h3>Contact Us</h3>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque
        </p>
      </div>

      <div class="row contact-info">
        <div class="col-md-4">
          <div class="contact-address">
            <i class="ion-ios-location-outline"></i>
            <h3>Address</h3>
            <address>693/3, Gonawala Road, Kelaniya, Sri Lanka.</address>
          </div>
        </div>

        <div class="col-md-4">
          <div class="contact-phone">
            <i class="ion-ios-telephone-outline"></i>
            <h3>Phone Number</h3>
            <p><a href="tel:+94705321516">+94 70 532 1516</a></p>
          </div>
        </div>

        <div class="col-md-4">
          <div class="contact-email">
            <i class="ion-ios-email-outline"></i>
            <h3>Email</h3>
            <p><a href="mailto:contact@eversoft.cf">contact@eversoft.cf</a></p>
          </div>
        </div>
      </div>
      <form action="" method="post" role="form" class="contactForm">
        <div class="row">
          <div class="col-md-6 form-group">
            <div class="mb-3">
              <label for="name" class="form-label">Your Name</label>
              <input
                type="text"
                name="name"
                class="form-control"
                id="name"
                placeholder="Your Name"
                required
              />
            </div>
          </div>
          <div class="col-md-6 form-group">
            <div class="mb-3">
              <label for="email" class="form-label">Your Email</label>
              <input
                type="email"
                class="form-control"
                name="email"
                id="email"
                placeholder="Your Email"
                required
              />
            </div>
          </div>
        </div>
        <div class="form-group">
          <div class="mb-3">
            <label for="subject" class="form-label">Subject</label>
            <input
              type="text"
              class="form-control"
              name="subject"
              id="subject"
              placeholder="Subject"
              required
            />
          </div>
        </div>
        <div class="form-group">
          <div class="mb-3">
            <label for="message" class="form-label">Message</label>
            <textarea
              class="form-control"
              name="message"
              rows="5"
              placeholder="Message"
              required
            ></textarea>
          </div>
        </div>
        <div class="text-center">
          <button type="submit" class="btn btn-primary">Send Message</button>
        </div>
      </form>
    </div>
  </section>
</template>