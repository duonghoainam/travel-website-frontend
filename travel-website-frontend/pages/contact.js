import ContactForm from '@components/contact-form/contact-form';
import ContactInformation from '@components/contact-information/contact-information';
import MainLayout from '@components/layouts/main-layout';
import Head from 'next/head';
import React from 'react';

const Contact = () => {
   return (
      <>
         <Head>
            <title>YOURTOUR</title>
            <meta name="description" content="YOURTOUR" />
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <ContactInformation />
         <ContactForm />
      </>
   );
};
Contact.Layout = MainLayout;

export default Contact;