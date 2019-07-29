import React from 'react'
import PropTypes from 'prop-types'
import { ResumePageTemplate } from '../../templates/resume'

const ResumePagePreview = ({ entry, widgetFor }) => (
  <ResumePageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

ResumePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ResumePagePreview
