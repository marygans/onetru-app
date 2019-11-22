import {LANDLORD} from './resources';
import React from 'react';

export const CONTEXT = {
	LANDLORD: {
	    title: 'Are you a Landlord?',
      icons: [
          {
              typeIcons: 'LANDLORD',
              type: 'SEARCH',
              title: 'Search property managers',
              context: 'Within seconds using the address or zip code of your property.',
          },
          {
              typeIcons: 'LANDLORD',
              type: 'MANAGERS',
              title: 'Compare property managers',
              context: 'in your local area based on their fees, services, and more!',
          },
          {
              typeIcons: 'LANDLORD',
              type: 'CHAT',
              title: 'Chat with property managers',
              context: 'to see if they are a good fit for your needs.',
          }
      ]
  },
	PROPERTY_MANAGER: {
      title: 'Are you a property manager?',
      icons: [
          {
              typeIcons: 'PROPERTY_MANAGER',
              type: 'LIGHT',
              title: 'Work smarter, not harder',
              context: 'OneTru finds landlords for you by advertising your services on a larger scale.',
          },
          {
              typeIcons: 'PROPERTY_MANAGER',
              type: 'REFERRAL',
              title: 'Earn referral fees',
              context: 'Get money for referring other property managers',
          },
          {
              typeIcons: 'PROPERTY_MANAGER',
              type: 'RATING',
              title: 'Protect your reputation ',
              context: 'Avoid negative reviews from bad clients.',
          }
      ]
  },
  FOOTER: {
	    links: [
          {
              name: 'How it Works',
              href: '/how_it_works',
          },
          {
              name: 'FAQs',
              href: '/faqs',
          },
          {
              name: 'Contact us',
              href: '/contact_us',
          },
          {
              name: 'Blog',
              href: '/blog',
          }
      ],
      licence: '2019 OneTru. All Rights Reserved',
  }

};
