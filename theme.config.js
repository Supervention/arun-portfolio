/** *************************************************************
 * Please refer to the Theme Options section in documentation   *
 ****************************************************************/

/**
 * Icons from react-icons: https://react-icons.github.io/react-icons
 */

import { IoMailOutline, IoGlobeOutline } from 'react-icons/io5'
import { SiUpwork } from 'react-icons/si'
import { TfiHome, TfiPencilAlt } from 'react-icons/tfi'
import { SlUser, SlBriefcase, SlEnvolope, SlTrophy } from 'react-icons/sl'
import { IoMdContacts } from 'react-icons/io'

/**
 * Main Menu Items
 */

export const menu = [
  {
    name: 'Home',
    slug: '/',
    Icon: TfiHome,
    number: 1,
  },
  {
    name: 'About',
    slug: '/about',
    Icon: SlUser,
  },
  {
    name: 'Services',
    slug: '/services',
    Icon: SlBriefcase,
  },
  {
    name: 'Projects',
    slug: '/projects',
    Icon: SlTrophy,
  },
  // {
  //   name: 'Articles',
  //   slug: '/blog',
  //   Icon: TfiPencilAlt,
  // },
  {
    name: 'Contact',
    slug: '/contact',
    Icon: IoMdContacts,
  },
]

/**
 * Social Links under the Main Menu
 */

export const social = [
  {
    name: 'Email',
    url: 'mailto:arun@supervention.in',
    Icon: IoMailOutline,
  },
  {
    name: 'Upwork',
    url: 'https://www.upwork.com/freelancers/arunvermadev',
    Icon: SiUpwork,
  },
  {
    name: 'Supervention',
    url: 'https://supervention.in',
    Icon: IoGlobeOutline,
  },
]

/**
 * General configurations
 */

export const config = {
  dateLocale: 'en-US',
  dateOptions: {
    // dateOptions is passed to JavaScript's toLocaleDateString()
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  },
  convertKit: {
    tipUrl: 'https://arunverma.in/products/blog',
  },
  contactForm: {
    inputs: require('./content/contact-form.json'),
    recipient: 'RECIPIENT@EXAMPLE.com',
    sender: 'SENDER@EXAMPLE.com',
    subject: 'EMAIL NOTIFICATION SUBJECT',
  },
}

/**
 * MDX/Markdown configurations
 */

export const mdxConfig = {
  publicDir: 'public',
  pagesDir: 'content',
  fileExt: '.md',
  collections: ['/blog', '/projects'],
  remarkPlugins: [],
  rehypePlugins: [],
}

/**
 * Global SEO configuration for next-seo plugin
 * https://github.com/garmeeh/next-seo
 */

export const siteMetaData = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_URL || 'http://localhost:3000',
  authorName: 'Arun Verma',
  siteName: 'Arun Verma',
  defaultTitle: 'Arun Verma | Senior Full Stack Developer',
  titleTemplate: 'Arun Verma | %s',
  description:
    'Senior full stack developer and founder of Supervention, building web, mobile and AI products with Next.js, React, Python, Django, Node.js and AWS.',
  email: 'arun@supervention.in',
  locale: 'en_US',
  twitter: {
    cardType: 'summary_large_image',
  },
}
