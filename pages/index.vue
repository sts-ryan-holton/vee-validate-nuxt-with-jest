<template>
  <div>
    <validation-observer ref="applicationForm" v-slot="{ handleSubmit }" tag="section" class="md:tw-min-h-155">
      <form @submit.prevent="handleSubmit(submitApplication)">

        <!-- Step 1: Loan Amount -->
        <validation-observer v-if="getCurrentStep == 1" :key="1" tag="section">
          <LoanAmount :fields="application" />
        </validation-observer>

      </form>
    </validation-observer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      application: {
        loan: {
          amount: 500
        }
      }
    }
  },
  methods: {

    /*
    ** Submit application
    */
    submitApplication () {
      // ... do something
    }

  },
  computed: {
    /*
    ** Get the current step
    */
    getCurrentStep: function () {
      return this.$store.state.application.steps.current
    }
  }
}
</script>
