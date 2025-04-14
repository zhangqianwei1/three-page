//  export default async function Page() {
//   // server actions
//   async function createAction() {
//     'use server'
//     return 'create action'
//   }
//   const res = await createAction()
//   return (
//     <div>
//       hello page 05, { res }
//     </div>
//   )
// } 

//  'use client'
// import { useEffect, useState } from "react"
// import { createAction } from "./actions"


// export default function Page() {
//   const [res, setRes] = useState('')
//   useEffect(() => {
//     createAction().then(res => setRes(res))
//   }, [])
 
//   return (
//     <div>
//       hello page 05, { res }
//     </div>
//   )
// } 

 import Counter from "@/components/Counter"
export default async function Page() {
  // server actions
  async function createAction() {
    'use server'
    return 'create action'
  }
  return (
    <div>
      hello page 05
      <Counter createAction={createAction} />
    </div>
  )
} 