<template>
  <form action="" method="post" role="form" class="contactForm">
    <div class="row">
      <div class="col-md-6">
        <HomeInput
          label="Your Name"
          type="text"
          placeholder="John Doe"
          success="Looks good!"
          error="Please enter your name."
          :isValid="true"
          v-model="form.name"
        />
      </div>
      <div class="col-md-6">
        <HomeInput
          label="Email Address"
          type="email"
          placeholder="johndoe@example.com"
          success="Looks good!"
          error="Please enter a valid email address."
          :isValid="true"
          v-model="form.email"
        />
      </div>
    </div>
    <div class="col-12">
      <HomeInput
        label="Subject"
        type="text"
        placeholder="I have a question about ..."
        :isValid="true"
        v-model="form.subject"
      />
    </div>
    <div class="col-12">
      <HomeTextArea 
        label="Message"
        placeholder="Briefly describe your question..."
        :isValid="true"
        v-model="form.message"

      />
    </div>
    <div class="text-center">
      <button type="submit" class="btn btn-primary">Send Message</button>
    </div>
  </form>
</template>

<script>
const form = {
  name: "",
  email: "",
  subject: "",
  message: "",
};
export default {
  data() {
    return {
      form,
    };
  },
};
</script>

<style></style>
