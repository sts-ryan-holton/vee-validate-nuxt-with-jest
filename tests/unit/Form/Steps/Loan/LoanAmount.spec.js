import { mount } from '@vue/test-utils'
import flushPromises from 'flush-promises';
import LoanAmount from '@/components/Form/Steps/Loan/LoanAmount'

describe('LoanAmount', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(LoanAmount)
    expect(wrapper.vm).toBeTruthy()
  })

  test('amount is available for value', async () => {
    const wrapper = mount(LoanAmount)
    await flushPromises()

    const amount = wrapper.findAll('.jest__amount-input')
    expect(amount.exists()).toBe(true)
  })
})
