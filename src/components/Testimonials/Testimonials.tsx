import { Stack } from '@mui/material'
import React from 'react'
import CommonHeader from '../CommonHeader'
import TestimonialsSection from './TestimonialsSection'

const Testimonials = () => {
  return (
    <Stack>
      <CommonHeader subTitle='What Our Readers Say' title='Real Words from Real Readers' button='Testimonials' />
      <TestimonialsSection />
    </Stack>
  )
}

export default Testimonials
