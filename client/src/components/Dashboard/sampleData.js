const sampleEvents = [
  {
    _id: 1,
    eventName: 'Hoops on Maple',
    peopleAttending: [
      {
        _id: 1,
        name: 'Brian',
        photo: 'https://www.gannett-cdn.com/-mm-/3c6f8ca71259ce9673c6821b3cda4a42aa656298/c=0-224-5177-3149/local/-/media/2016/10/21/INGroup/Indianapolis/636126417114832165-112-IU.JPG?width=660&height=373&fit=crop&format=pjpg&auto=webp'
      },
      {
        _id: 2,
        name: 'James',
        photo: 'https://www.gannett-cdn.com/-mm-/3c6f8ca71259ce9673c6821b3cda4a42aa656298/c=0-224-5177-3149/local/-/media/2016/10/21/INGroup/Indianapolis/636126417114832165-112-IU.JPG?width=660&height=373&fit=crop&format=pjpg&auto=webp'
      },
      {
        _id: 3,
        name: 'Thomas',
        photo: 'https://www.gannett-cdn.com/-mm-/3c6f8ca71259ce9673c6821b3cda4a42aa656298/c=0-224-5177-3149/local/-/media/2016/10/21/INGroup/Indianapolis/636126417114832165-112-IU.JPG?width=660&height=373&fit=crop&format=pjpg&auto=webp'
      },
      {
        _id: 4,
        name: 'Adam',
        photo: 'https://www.gannett-cdn.com/-mm-/3c6f8ca71259ce9673c6821b3cda4a42aa656298/c=0-224-5177-3149/local/-/media/2016/10/21/INGroup/Indianapolis/636126417114832165-112-IU.JPG?width=660&height=373&fit=crop&format=pjpg&auto=webp'
      },
      {
        _id: 5,
        name: 'Nick',
        photo: 'https://www.gannett-cdn.com/-mm-/3c6f8ca71259ce9673c6821b3cda4a42aa656298/c=0-224-5177-3149/local/-/media/2016/10/21/INGroup/Indianapolis/636126417114832165-112-IU.JPG?width=660&height=373&fit=crop&format=pjpg&auto=webp'
      }
    ],
    location: '123 Maple St.',
    startTime: 'Sat Oct 01 2022 11:14:27 GMT-0700, (Pacific Daylight Time)',
    endTime: 'Sat Oct 01 2022 13:14:27 GMT-0700 (Pacific Daylight Time)',
  },
  {
  _id: 2,
  eventName: 'Hoops on Third',
  peopleAttending: [
    {
      _id: 1,
      name: 'Brian',
      photo: 'https://www.gannett-cdn.com/-mm-/3c6f8ca71259ce9673c6821b3cda4a42aa656298/c=0-224-5177-3149/local/-/media/2016/10/21/INGroup/Indianapolis/636126417114832165-112-IU.JPG?width=660&height=373&fit=crop&format=pjpg&auto=webp'
    },
    {
      _id: 2,
      name: 'James',
      photo: 'https://www.gannett-cdn.com/-mm-/3c6f8ca71259ce9673c6821b3cda4a42aa656298/c=0-224-5177-3149/local/-/media/2016/10/21/INGroup/Indianapolis/636126417114832165-112-IU.JPG?width=660&height=373&fit=crop&format=pjpg&auto=webp'
    },
    {
      _id: 3,
      name: 'Thomas',
      photo: 'https://www.gannett-cdn.com/-mm-/3c6f8ca71259ce9673c6821b3cda4a42aa656298/c=0-224-5177-3149/local/-/media/2016/10/21/INGroup/Indianapolis/636126417114832165-112-IU.JPG?width=660&height=373&fit=crop&format=pjpg&auto=webp'
    },
    {
      _id: 4,
      name: 'Adam',
      photo: 'https://www.gannett-cdn.com/-mm-/3c6f8ca71259ce9673c6821b3cda4a42aa656298/c=0-224-5177-3149/local/-/media/2016/10/21/INGroup/Indianapolis/636126417114832165-112-IU.JPG?width=660&height=373&fit=crop&format=pjpg&auto=webp'
    },
    {
      _id: 5,
      name: 'Nick',
      photo: 'https://www.gannett-cdn.com/-mm-/3c6f8ca71259ce9673c6821b3cda4a42aa656298/c=0-224-5177-3149/local/-/media/2016/10/21/INGroup/Indianapolis/636126417114832165-112-IU.JPG?width=660&height=373&fit=crop&format=pjpg&auto=webp'
    }
  ],
  location: '123 Third St.',
  startTime: 'Sat Oct 01 2022 11:14:27 GMT-0700, (Pacific Daylight Time)',
  endTime: 'Sat Oct 01 2022 13:14:27 GMT-0700 (Pacific Daylight Time)',
  },
  {
    _id: 3,
    eventName: 'Hoops on Fourth',
    peopleAttending: [
      {
        _id: 1,
        name: 'Brian',
        photo: 'https://www.gannett-cdn.com/-mm-/3c6f8ca71259ce9673c6821b3cda4a42aa656298/c=0-224-5177-3149/local/-/media/2016/10/21/INGroup/Indianapolis/636126417114832165-112-IU.JPG?width=660&height=373&fit=crop&format=pjpg&auto=webp'
      },
      {
        _id: 2,
        name: 'James',
        photo: 'https://www.gannett-cdn.com/-mm-/3c6f8ca71259ce9673c6821b3cda4a42aa656298/c=0-224-5177-3149/local/-/media/2016/10/21/INGroup/Indianapolis/636126417114832165-112-IU.JPG?width=660&height=373&fit=crop&format=pjpg&auto=webp'
      },
      {
        _id: 3,
        name: 'Thomas',
        photo: 'https://www.gannett-cdn.com/-mm-/3c6f8ca71259ce9673c6821b3cda4a42aa656298/c=0-224-5177-3149/local/-/media/2016/10/21/INGroup/Indianapolis/636126417114832165-112-IU.JPG?width=660&height=373&fit=crop&format=pjpg&auto=webp'
      },
      {
        _id: 4,
        name: 'Adam',
        photo: 'https://www.gannett-cdn.com/-mm-/3c6f8ca71259ce9673c6821b3cda4a42aa656298/c=0-224-5177-3149/local/-/media/2016/10/21/INGroup/Indianapolis/636126417114832165-112-IU.JPG?width=660&height=373&fit=crop&format=pjpg&auto=webp'
      },
      {
        _id: 5,
        name: 'Nick',
        photo: 'https://www.gannett-cdn.com/-mm-/3c6f8ca71259ce9673c6821b3cda4a42aa656298/c=0-224-5177-3149/local/-/media/2016/10/21/INGroup/Indianapolis/636126417114832165-112-IU.JPG?width=660&height=373&fit=crop&format=pjpg&auto=webp'
      }
    ],
    location: '123 Fourth St.',
    startTime: 'Sat Oct 01 2022 11:14:27 GMT-0700, (Pacific Daylight Time)',
    endTime: 'Sat Oct 01 2022 13:14:27 GMT-0700 (Pacific Daylight Time)',
    },
]

module.exports = sampleEvents;