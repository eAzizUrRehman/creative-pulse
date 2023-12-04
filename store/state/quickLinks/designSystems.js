import { bigBundleIcon, innerDesignSystemsIcon } from '@/assets/images'
import randomNumber from './functions/randomNumber.js'
import { pattern5, pattern6, pattern8 } from './panelPatterns.js'

export default [
  {
    id: 31,
    label: 'Design Systems',
    iconUrl: innerDesignSystemsIcon,
    links: [
      {
        id: 311,
        iconUrl: bigBundleIcon,
        links: [
          {
            id: 3111,
            label: 'Soft Design',
            content: {
              title: 'Soft UI Design System',
              description: `Download the best Soft UI Design System developed by Creative Pulse. Join over ${randomNumber()} creatives that already love our bootstrap resources!`,
              panel: pattern5
            },
            url: '/'
          },
          {
            id: 3112,
            label: 'Argon Design',
            content: {
              title: 'Argon Design System',
              description: `Download the best Argon Design System developed by Creative Pulse. Join over ${randomNumber()} creatives that already love our bootstrap resources!`,
              panel: pattern8
            },
            url: '/'
          },
          {
            id: 3113,
            label: 'Black Design',
            content: {
              title: 'Black Design System',
              description: `Download the best Black Design System developed by Creative Pulse. Join over ${randomNumber()} creatives that already love our bootstrap resources!`,
              panel: pattern6
            },
            url: '/'
          },
          {
            id: 3114,
            label: 'Light Design',
            content: {
              title: 'Light Design System',
              description: `Download the best Light Design System developed by Creative Pulse. Join over ${randomNumber()} creatives that already love our bootstrap resources!`,
              panel: pattern8
            },
            url: '/'
          },
          {
            id: 3115,
            label: 'Material Design',
            content: {
              title: 'Material Design System',
              description: `Download the best Material Design System developed by Creative Pulse. Join over ${randomNumber()} creatives that already love our bootstrap resources!`,
              panel: pattern8
            },
            url: '/'
          },
          {
            id: 3116,
            label: 'Now UI Design',
            content: {
              title: 'Now UI Design System',
              description: `Download the best Now UI Design System developed by Creative Pulse. Join over ${randomNumber()} creatives that already love our bootstrap resources!`,
              panel: pattern5
            },
            url: '/'
          },
          {
            id: 3117,
            label: 'Paper Design',
            content: {
              title: 'Paper Design System',
              description: `Download the best Paper Design System developed by Creative Pulse. Join over ${randomNumber()} creatives that already love our bootstrap resources!`,
              panel: pattern8
            },
            url: '/'
          }
        ]
      }
    ]
  }
]
