import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import 'font-awesome/css/font-awesome.css'
import './all.sass'

import { Hero, HeroBody } from 'bloomer'
import AppFooter from '../components/Footer'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Digital Bear Necessities Ltd" />
    {children()}
    <AppFooter />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
