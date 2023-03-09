import { E, rppHandle } from "@/library"

export const footer = () => {
  const footer = E({
    tag: 'div',
    className:'w-full h-14 text-right p-4 flex justify-end',
    child: [E({
      tag: 'div',
      className: '',
      child: [E({ tag: 'label', child: 'Rows per page' }), E({
        tag: 'select',
        id:'rpp',
        className:'border-0 bg-transparent outline-0 focus:ring-0',
        child: [
          E({
            tag: 'option',
            selected: true,
            child: 'All'
          }), E({
            tag: 'option',
            child: 3
          }), E({
            tag: 'option',
            child: 6
          }), E({
            tag: 'option',
            child: 10
          })
      ]})]
    })
    ],
  })
footer.querySelector('#rpp').addEventListener('change',rppHandle)
  return footer
}
 
