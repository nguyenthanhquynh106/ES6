const shallowMenu = [{
    title: 'Dashboard',
    link: '/dashboard',
    children: [{
        title: 'Tool',
        link: '/dashboard/tool'
      },
      {
        title: 'Reports',
        link: '/dashboard/reports'
      },
      {
        title: 'Analytics',
        link: '/dashboard/analytics'
      },
      {
        title: 'Code Blocks',
        link: '/dashboard/code-blocks'
      },
    ]
  },
  {
    title: 'Sales',
    link: '/sales',
    children: [{
        title: 'New Sales',
        link: '/sales/new-sales'
      },
      {
        title: 'Expired Sales',
        link: '/sales/expired-sales'
      },
      {
        title: 'Sales Reports',
        link: '/sales/sales-reports'
      },
      {
        title: 'Deliveries',
        link: '/sales/deliveries'
      },
    ]
  },
  {
    title: 'Messages',
    link: '/messages',
    children: [{
        title: 'Inbox',
        link: '/messages/inbox'
      },
      {
        title: 'Outbox',
        link: '/messages/outbox'
      },
      {
        title: 'Sent',
        link: '/messages/sent'
      },
      {
        title: 'Archived',
        link: '/messages/archived'
      },
    ]
  },
  {
    title: 'Users',
    link: '/users',
    children: [{
        title: 'New User',
        link: '/users/new-user'
      },
      {
        title: 'User Groups',
        link: '/users/user-groups'
      },
      {
        title: 'Permissions',
        link: '/users/permissions'
      },
      {
        title: 'passwords',
        link: '/users/passwords'
      },
    ]
  },
  {
    title: 'Settings',
    link: '/settings',
    children: [{
        title: 'Databases',
        link: '/settings/databases'
      },
      {
        title: 'Design',
        link: '/settings/design'
      },
      {
        title: 'Change User',
        link: '/settings/change-user'
      },
      {
        title: 'Log Out',
        link: '/settings/log-out'
      },
    ]
  },
]

const listIconShallow = {
  Dashboard: '<i class="fal fa-tachometer-alt"></i>',
  Sales: '<i class="fas fa-truck-moving"></i>',
  Messages: '<i class="fas fa-envelope"></i>',
  Users: '<i class="fas fa-user-friends"></i>',
  Settings: '<i class="fas fa-cog"></i>'
}

const createMenuShallow = (tagUl, shallowMenu, listIconShallow = {}) => {
  for (let i = 0; i < shallowMenu.length; i++) {
    const tagLi = document.createElement('li')
    tagLi.appendChild(
      createTagAMenuShallow(listIconShallow, shallowMenu[i])
    )
    tagLi.classList.add('shallow-item')
    if (shallowMenu[i].children) {
      const ul = document.createElement('ul')
      createMenuShallow(ul, shallowMenu[i].children)
      tagLi.appendChild(ul)
      ul.classList.add('shallow_dropdown-list')
    }
    tagUl.appendChild(tagLi)
    tagUl.classList.add('shallow-list')
  }
}

const renderMenuShallow = () => {
  const tagUl = document.createElement('ul')
  createMenuShallow(tagUl, shallowMenu, listIconShallow)
  const boxShallow = document.querySelector('.shallow')
  boxShallow.appendChild(tagUl)
}

const createTagAMenuShallow = (listIconShallow = {}, shallowMenu) => {
  const iconArrow = '<i class="fas fa-angle-right"></i>'
  const tagA = document.createElement('a')
  const spanText = document.createElement('span')
  const spanIcon = document.createElement('span')
  const spanIconArrow = document.createElement('span')

  tagA.setAttribute('href', shallowMenu.link)
  tagA.classList.add('shallow-link')
  spanText.innerText = shallowMenu.title
  spanText.classList.add('shallow-text')

  for (let key in listIconShallow) {
    if (key === shallowMenu.title) {
      spanIcon.insertAdjacentHTML('afterbegin', listIconShallow[key])
      spanIcon.classList.add('shallow-icon')
      tagA.appendChild(spanIcon)
      tagA.appendChild(spanText)
      spanIconArrow.classList.add('shallow-icon--arrow')
      spanIconArrow.insertAdjacentHTML('afterbegin', iconArrow)
      tagA.appendChild(spanIconArrow)
    }
  }
  if (Object.keys(listIconShallow).length === 0) {
    tagA.appendChild(spanText)
  }
  return tagA
}

renderMenuShallow()

const eventClickShallow = e => {
  const borderItem = e.currentTarget
  const clickNodeText = borderItem.querySelectorAll('.shallow_dropdown-list')
  e.preventDefault()
  borderItem.style.border = 'none'
  const iconArrow = borderItem.querySelector('.shallow-icon--arrow')
  iconArrow.classList.toggle('shallow-icon--reotate')
  clickNodeText.forEach(item => {
    item.classList.toggle('display-block')
  })
}

const listLi = document.querySelectorAll('.shallow-list .shallow-item')
listLi.forEach(li => {
  li.addEventListener('click', eventClickShallow)
})