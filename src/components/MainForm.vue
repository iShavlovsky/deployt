<template>
  <section class="section">
    <div class="container">
      <div class='form-content'>
        <h2>Contact us</h2>
        <div class="heading-section_description-content">
          <p>You got a design drawn and you're still looking for developers? Or you don't know where to start? Stop
            fucking the ox! Let's go do great things
            for the good of mankind and in the name of Allah</p>
        </div>

        <div></div>

        <form action="/"
              method="post"
              class="form-container">
          <div class="form-field">
            <label for="name"
                   class="form-label">Name</label>
            <input type="text"
                   class="input-field"
                   placeholder="David Jones"
                   id="name"
                   name="name"
                   required>
          </div>

          <div class="form-field">
            <label for="email"
                   class="form-label">Email</label>
            <input type="email"
                   class="input-field"
                   placeholder="lets-go@grind.money"
                   id="email"
                   name="email"
                   required>
          </div>

          <div class="form-field">
            <label for="country"
                   class="form-label">Country</label>
            <input type="text"
                   class="input-field"
                   placeholder="Russian Federation"
                   id="country"
                   name="country"
                   required>
          </div>

          <div class="form-field">
            <label for="budget"
                   class="form-label">Budget</label>
            <input type="number"
                   class="input-field"
                   placeholder="$300k"
                   id="budget"
                   name="budget"
                   required>
          </div>

          <div class="note-form-field">
            <label for="note"
                   class="form-label">Note</label>
            <textarea placeholder="Example Text"
                      class="input-field"
                      id="note"
                      name="note"
                      rows="8"
                      cols="20"
                      required></textarea>
          </div>

          <label for="checkbox"
                 class="form-checkbox">
            <input type="checkbox"
                   class="checkbox-input"
                   id="checkbox"
                   name="checkbox"
                   data-name="Checkbox">
            <span class="p12px">
              Consent to the privacy policy and the processing of personal data
            </span>
          </label>

          <button type="submit"
                  class="form-btn">Deus vult</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>


</script>

<style scoped lang="scss">

  .form-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    padding: em(16) em(110) em(16) em(110);
    @include border-white();
    color: $primary-black;
    @include txt-button();
    text-transform: uppercase;
  }

  .p12px {
    @include txt-button();
    margin-left: em(16);
  }

  .form-label {
    @include custom-heading(em(16));
    line-height: 160%;
  }

  .checkbox-input {
    margin-left: em(-2);
    width: em(16);
    height: em(16);
  }

  .input-field {
    min-height: em(32);
    margin-bottom: 0;
    padding-top: 1.375em;
    padding-bottom: 1.375em;
    padding-left: em(32);
    border: em(1) solid $primary-white;
    background-color: $primary-black;
    transition: all 200ms cubic-bezier(.39, .575, .565, 1);
    color: #f9feff;
    font-size: em(16);
  }

  .form-content {
    @include col-3-grid(em(0))
  }

  .form-field {
    display: grid;
    grid-auto-columns: 1fr;
    grid-row-gap: em(8);
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
  }

  .note-form-field {
    display: grid;
    grid-auto-columns: 1fr;
    grid-row-gap: em(8);
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    grid-row-start: span 1;
    grid-row-end: span 1;
    grid-column-start: span 2;
    grid-column-end: span 2;
  }

  .form-container {
    display: grid;
    grid-auto-columns: 1fr;
    grid-column-gap: em(89);
    grid-row-gap: em(32);
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    grid-column-start: span 2;
    grid-column-end: span 2;
    grid-row-start: span 1;
    grid-row-end: span 1;
  }

  .form-checkbox {
    display: flex;
    align-items: center;
    color: #858585;
    grid-column: 1 / span 2;
  }

  h2 {
    @include h2();
  }

  .heading-section_description-content {
    max-width: em(870);
    grid-column-start: span 2;
    grid-column-end: span 3;

    p {
      @include description-hide();
    }
  }
</style>
