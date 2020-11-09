// Bài 4
// Cho array sau
const menu = [{
    name: 'Home',
    children: [{
        name: 'Home 1',
        children: [{
            name: 'Home 1.1',
            children: [{
              name: 'Home 1.1.1'
            }]
          },
          {
            name: 'Home 1.2',
            children: [{
              name: 'Home 1.2.1'
            }]
          }
        ]
      },
      {
        name: 'Home 2',
        children: [{
          name: 'Home 2.1'
        }]
      },
      {
        name: 'Home 3',
        children: [{
          name: 'Home 3.1'
        }]
      }
    ]
  },
  {
    name: 'About',
    children: [{
        name: 'About 1',
        children: [{
            name: 'About 1.1',
            children: [{
              name: 'About 1.1.1'
            }]
          },
          {
            name: 'About 1.2',
            children: [{
              name: 'About 1.2.1',
              children: [{
                  name: 'About 1.2.1.1'
                },
                {
                  name: 'About 1.2.1.2'
                },
                {
                  name: 'About 1.2.1.3'
                }
              ]
            }]
          }
        ]
      },
      {
        name: 'Home 2',
        children: [{
          name: 'Home 2.1'
        }]
      }
    ]
  }
]
// Hãy tạo ra 1 menu bằng array bên trên bằng ul li hoặc ol li, di chuột vào item cha (menu cha) sẽ show menu con
  