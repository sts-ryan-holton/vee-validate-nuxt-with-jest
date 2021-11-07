<template>
  <article>

    <article class="tw-px-7 tw-pb-7">
      <StepHeader
        title="About your loan"
        subtitle="Tell us how much you'd like to borrow" />
    </article>
    <hr class="tw-mt-7" />
    <article class="tw-p-7 tw-space-y-7">

      <section>
        <ValidationProvider
          vvid="loan.amount"
          name="Loan amount"
          rules="required|numeric|min_value:50|max_value:5000"
          v-slot="{ errors, classes }"
        >
          <label for="amount" class="tw-text-lg tw-font-medium tw-text-gray-400 tw-block tw-mb-2">How much would you like to borrow?</label>
          <div class="tw-relative tw-rounded-xl">
            <div class="tw-absolute tw-inset-y-0 tw-left-0 tw-pl-4 tw-flex tw-items-center tw-pointer-events-none">
              <span class="tw-text-gray-500 sm:tw-text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" class="tw-w-5 tw-w-5 tw-text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 9a2 2 0 10-4 0v5a2 2 0 01-2 2h6m-6-4h4m8 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
            </div>
            <input type="number" name="amount" id="amount" v-model="fields.loan.amount" :class="classes" class="tw-block tw-w-full tw-py-5 tw-pl-12 tw-pr-5 tw-rounded-xl tw-text-gray-800 tw-border tw-border-gray-300 tw-font-bold focus:tw-outline-none tw-placeholder-gray-300 focus:tw-ring-2 focus:tw-ring-offset-2 focus:tw-ring-offset-gray-200 focus:tw-ring-white jest__amount-input" placeholder="e.g: 100">
          </div>
          <ValidationMessage :message="errors[0]" />
        </ValidationProvider>
      </section>

      <section>
        <div class="md:tw-shadow-lg">
          <button type="submit" class="tw-py-5 tw-px-5 tw-rounded-xl tw-bg-green-500 md:hover:tw-bg-green-600 tw-block tw-w-full tw-text-white tw-border tw-border-gray-300 tw-font-medium focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-offset-2 focus:tw-ring-offset-gray-200 focus:tw-ring-white">
            Continue
          </button>
        </div>
      </section>

    </article>

  </article>
</template>

<script>
export default {
  props: {
    fields: {
      type: Object,
      default: () => ({ })
    }
  }
}
</script>
