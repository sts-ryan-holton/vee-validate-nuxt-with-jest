import Vue from 'vue'
import { ValidationProvider, ValidationObserver, extend, configure, localize } from 'vee-validate'
import * as rules from 'vee-validate/dist/rules';
import en from 'vee-validate/dist/locale/en.json'

const config = {
  mode: 'lazy',
  classes: {
    valid: '',
    invalid: 'tw-border-red-500 dark:tw-border-white'
  }
}

Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});

configure(config)

// Register it globally
Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)

// activate the locales
localize({
  en
});
