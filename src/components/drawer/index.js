import { E,icon,closeDrawer, priorityFilter, statusFilter, deadLineFilter } from "@/library"

export const drawer = () => {
  const drawer = E({
    tag: 'div',
    id: 'drawer',
    className:'absolute p-4 flex flex-col gap-3 bg-white h-screen top-0 -right-96 w-96 transition-all duration-1000',
    child: [E({
      tag: 'div',
      className: 'flex justify-between items-center',
      child: [E({
        tag: 'h3',
        className:'text-lg font-semibold',
        child:'filters'
      }),icon("close-outline","text-black cursor-pointer close-drawer text-2xl") ]
    }),
      E({
        tag: 'label',
        for: 'priority',
        child:'Priority:'
      }),
      E({
        tag: 'select',
        className:'rounded-md ',
        id: 'priority',
        child: [E({
          tag: 'option',
          selected:true,
          child:'All'
        }),
          E({
            tag: 'option',
            child:'Low'
          }),E({
            tag: 'option',
            child:'Medium'
          }),E({
            tag: 'option',
            child:'High'
          })
        ]
      }),
      E({
        tag: 'label',
        for: 'status',
        child:'status:'
      }),
      E({
        tag: 'select',
        className:'rounded-md ',
        id: 'status',
        child: [E({
          tag: 'option',
          selected:true,
          child:'All'
        }),
          E({
            tag: 'option',
            child:'Done'
          }),E({
            tag: 'option',
            child:'Doing'
          }),E({
            tag: 'option',
            child:'Todo'
          })
        ]
      }),
      E({
        tag: 'label',
        for: 'Deadline',
        child:'Deadline:'
      }),
      E({
        tag: 'input',
        type:'date',
        className:'rounded-md',
        id: 'Deadline',

      })
    ]
  })

  drawer.querySelector('#Deadline').addEventListener('change',deadLineFilter)
  drawer.querySelector('#status').addEventListener('change',statusFilter)
  drawer.querySelector('#priority').addEventListener('change',priorityFilter)
  drawer.querySelector('.close-drawer').addEventListener('click',closeDrawer)
  return drawer
}
