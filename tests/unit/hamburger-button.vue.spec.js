import Vue from 'vue'
import { mount, done } from '@vue/test-utils'
import HamburgerButton from '@/hamburger-button.vue'


describe('HamburgerButton', () => {

  test('is a Vue instance', () => {
    const wrapper = mount(HamburgerButton)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  // test default values of props
  it('should have defined theme prop', () => {
    expect(HamburgerButton.props.theme).toBeDefined()
  })

  it('should have default value of theme prop', () => {
    expect(HamburgerButton.props.theme.default).toBe('default-theme')
  })

  it('should have defined isHamburger prop', () => {
    expect(HamburgerButton.props.isHamburger).toBeDefined()
  })

  it('should have default value of isHamburger prop', () => {
    expect(HamburgerButton.props.isHamburger.default).toBe(true)
  })

  it('should NOT have class "cross" if isInHamburgerState is true', () => {
    const wrapper = mount(HamburgerButton)
    expect(wrapper.classes('cross')).toBe(false)
  })

  it('should have class "cross" if isInHamburgerState is false', () => {
    const wrapper = mount(HamburgerButton, { 
      propsData: {
        isHamburger: false 
      }
    })
    expect(wrapper.classes('cross')).toBe(true)
  })

  it('should set class according to theme value', () => {
    const wrapper = mount(HamburgerButton, { 
      propsData: {
        theme: 'other-custom-theme'
      }
    })
    expect(wrapper.classes('other-custom-theme')).toBe(true)
  })



  it('has onClick() method', () => {
    expect(typeof HamburgerButton.methods.onClick).toBe('function')
  })

  it('onClick() exists and it is called on click', () => {
    const onClick = jest.fn()
    expect(typeof HamburgerButton.methods.onClick).toBe('function')
    const wrapper = mount(HamburgerButton, { 
      listeners: {
          click: onClick
      }
    })
    wrapper.trigger('click')
    expect(onClick).toHaveBeenCalled()
  })

  it('on click event .cross class is asigned', () => {
    expect(typeof HamburgerButton.methods.onClick).toBe('function')
    const wrapper = mount(HamburgerButton, {})
    wrapper.trigger('click')
    expect(wrapper.emitted().click[0]).toEqual([false])
    wrapper.vm.$nextTick(() => {
      expect(wrapper.classes('cross')).toBe(true)
    })
  })

})
