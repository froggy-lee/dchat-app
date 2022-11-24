import {
  ChatIcon,
  VoiceIcon,
  MuteIcon,
  SendIcon,
  ActivityIcon
} from '/public/svgs'
import { faker } from '@faker-js/faker'

export const LIST_ACTIVITY = []

export const listSocial = [
  {
    id: 1,
    icon: '/images/social-icons/twitter.png',
    width: '11.92',
    height: '9.84'
  },
  {
    id: 2,
    icon: '/images/social-icons/tele.png',
    width: '11.84',
    height: '9.54'
  },
  {
    id: 3,
    icon: '/images/social-icons/fb.png',
    width: '6.65',
    height: '12.34'
  },
  {
    id: 4,
    icon: '/images/social-icons/reddit.png',
    width: '12.89',
    height: '11.4'
  }
]

export const listSettings = [
  {
    title: 'Notifications',
    icon: '/images/setting-icons/notifications.png'
  },
  {
    title: 'Data and Strorage',
    icon: '/images/setting-icons/data.png'
  },
  {
    title: 'Language',
    icon: '/images/setting-icons/language.png'
  },
  {
    title: 'Devices',
    icon: '/images/setting-icons/devices.png'
  },
  {
    title: 'Secure',
    icon: '/images/setting-icons/secure.png'
  },
  {
    title: 'Post',
    icon: '/images/setting-icons/post.png'
  },
  {
    title: 'Market Cap',
    icon: '/images/setting-icons/market.png'
  },
  {
    title: 'Games',
    icon: '/images/setting-icons/game.png'
  }
]

export const listActions = [
  {
    title: 'chat',
    icon: <ChatIcon />
  },
  {
    title: 'voice',
    icon: <VoiceIcon />
  },
  {
    title: 'mute',
    icon: <MuteIcon />
  },
  {
    title: 'send',
    icon: <SendIcon />
  },
  {
    title: 'activity',
    icon: <ActivityIcon />
  }
]

export const listNavAccount = [
  {
    name: 'Assets',
    id: 0
  },
  {
    name: 'Transactions',
    id: 1
  },
  {
    name: 'Links',
    id: 2
  },
  {
    name: 'Media',
    id: 3
  },
  {
    name: 'File',
    id: 4
  }
]

export const listActivity = [
  {
    name: 'All',
    id: 0
  },
  {
    name: 'Send',
    id: 1
  },
  {
    name: 'Receipt',
    id: 2
  }
]

export function createRandomActivity() {
  return {
    userId: faker.datatype.uuid(),
    status: faker.helpers.arrayElement(['send', 'receipt']),
    date: 'Feb 6',
    address: '0x8F...A2e3',
    amount: '0.10010299 ...',
    totalPrice: '$301.6 USD'
  }
}

Array.from({ length: 50 }).forEach(() => {
  LIST_ACTIVITY.push(createRandomActivity())
})
