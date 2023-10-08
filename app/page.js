"use client"
import React, { useState } from 'react';
import OurServices from './Components/landingPage/ourServices';
import RequestForm from './Components/landingPage/requestForm';

export default function Home() {
  return (
    <main>
      <OurServices />
      <RequestForm />
    </main>
  )
}
