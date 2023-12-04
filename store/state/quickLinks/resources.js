import { innerResourcesIcon } from '@/assets/images'
import randomNumber from './functions/randomNumber.js'
import { pattern1, pattern2, pattern3 } from './panelPatterns.js'
export default [
  {
    id: 61,
    label: 'Useful Tools',
    iconUrxl: innerResourcesIcon,
    links: [
      {
        id: 611,
        links: [
          {
            id: 6111,
            label: 'Book - Fundamentals UI/UX',
            tag: '',
            content: {
              title: 'Book - Fundamentals UI/UX Resource',
              description: `Download the best Book - Fundamentals UI/UX developed by Creative Pulse. Join over ${randomNumber()} creatives that already love our bootstrap resources!`,
              panel: pattern1
            },
            url: '/'
          },
          {
            id: 6112,
            label: 'Drag & Drop Builders',
            content: {
              title: 'Drag & Drop Builders Resource',
              description: `Download the best Drag & Drop Builders developed by Creative Pulse. Join over ${randomNumber()} creatives that already love our bootstrap resources!`,
              panel: pattern3
            },
            url: '/'
          },
          {
            id: 6113,
            label: 'AI Code Mentor',
            content: {
              title: 'AI Code Mentor Resource',
              description: `Download the best AI Code Mentor developed by Creative Pulse. Join over ${randomNumber()} creatives that already love our bootstrap resources!`,
              panel: pattern2
            },
            url: '/'
          },
          {
            id: 6114,
            label: 'Courses',
            content: {
              title: 'Courses Resource',
              description: `Download the best Courses developed by Creative Pulse. Join over ${randomNumber()} creatives that already love our bootstrap resources!`,
              panel: pattern1
            },
            url: '/'
          },
          {
            id: 6115,
            label: 'Bits - Code Snippets',
            content: {
              title: 'Bits - Code Snippets Resource',
              description: `Download the best Bits - Code Snippets developed by Creative Pulse. Join over ${randomNumber()} creatives that already love our bootstrap resources!`,
              panel: pattern3
            },
            url: '/'
          },
          {
            id: 6116,
            label: 'Shapehost - Hosting',
            content: {
              title: 'Shapehost - Hosting Resource',
              description: `Download the best Shapehost - Hosting developed by Creative Pulse. Join over ${randomNumber()} creatives that already love our bootstrap resources!`,
              panel: pattern3
            },
            url: '/'
          },
          {
            id: 6117,
            label: 'Discord Server',
            content: {
              title: 'Discord Server Resource',
              description: `Download the best Discord Server developed by Creative Pulse. Join over ${randomNumber()} creatives that already love our bootstrap resources!`,
              panel: pattern2
            },
            url: '/'
          },
          {
            id: 6118,
            label: 'Custom Development',
            content: {
              title: 'Custom Development Resource',
              description: `Download the best Custom Development developed by Creative Pulse. Join over ${randomNumber()} creatives that already love our bootstrap resources!`,
              panel: pattern2
            },
            url: '/'
          },
          {
            id: 6119,
            label: 'Mints - Expert Design',
            content: {
              title: 'Mints - Expert Design Resource',
              description: `Download the best Mints - Expert Design developed by Creative Pulse. Join over ${randomNumber()} creatives that already love our bootstrap resources!`,
              panel: pattern2
            },
            url: '/'
          },
          {
            id: 61110,
            label: 'Free Illustrations',
            content: {
              title: 'Free Illustrations Resource',
              description: `Download the best Free Illustrations developed by Creative Pulse. Join over ${randomNumber()} creatives that already love our bootstrap resources!`,
              panel: pattern3
            },
            url: '/'
          },
          {
            id: 61111,
            label: 'Material Tailwind',
            content: {
              title: 'Material Tailwind Resource',
              description: `Download the best Material Tailwind developed by Creative Pulse. Join over ${randomNumber()} creatives that already love our bootstrap resources!`,
              panel: pattern1
            },
            url: '/'
          },
          {
            id: 61112,
            label: 'Third-Party Tools',
            content: {
              title: 'Third-Party Tools Resource',
              description: `Download the best Third-Party Tools developed by Creative Pulse. Join over ${randomNumber()} creatives that already love our bootstrap resources!`,
              panel: pattern2
            },
            url: '/'
          }
        ]
      }
    ]
  }
]
