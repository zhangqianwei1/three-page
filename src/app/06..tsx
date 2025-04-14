//  export default async function Page() {
//   // server actions
//   async function createAction(formData: FormData) {
//     'use server'
//     const username = formData.get('username')
//     console.log(username)
//   }
//   return (
//     <div>
//       hello page 06
//       <form action={createAction}>
//         <input className="border" type="text" name="username" />
//         <button type="submit">submit</button>
//       </form>
//     </div>
//   )
// } 

//  'use client'

// import { createAction } from "./actions"

// export default function Page() {
//   return (
//     <div>
//       hello page 06
//       <form action={createAction}>
//         <input className="border" type="text" name="username" />
//         <button type="submit">submit</button>
//       </form>
//     </div>
//   )
// } 

// // 携带更多的参数
//  export default async function Page() {
//   const userId = 123
//   // server actions
//   async function createAction(formData: FormData) {
//     'use server'
//     const username = formData.get('username')
//     const userId = formData.get('userId')
//     console.log(username, userId)
//   }
//   return (
//     <div>
//       hello page 06
//       <form action={createAction}>
//         <input className="border" type="text" name="username" />
//         <input type="hidden" name="userId" value={userId} />
//         <button type="submit">submit</button>
//       </form>
//     </div>
//   )
// } 

// export default async function Page() {
//   const userId = 123
//   // server actions
//   async function createAction(userId: number, formData: FormData) {
//     'use server'
//     const username = formData.get('username')
//     console.log(username, userId)
//   }
//   const createActionWithId = createAction.bind(null, userId)
//   return (
//     <div>
//       hello page 06
//       <form action={createActionWithId}>
//         <input className="border" type="text" name="username" />
//         <button type="submit">submit</button>
//       </form>
//     </div>
//   )
// } 

// 'use client'
// import { createAction } from "./actions"
// export default function Page() {

//   const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
//     if (e.key === 'Enter') {
//       e.preventDefault()
//       e.currentTarget.form?.requestSubmit()
//     }
//   }

//   return (
//     <div>
//       hello page 06
//       <form action={createAction}>
//         <input className="border" type="text" name="username" onKeyDown={handleKeyDown} />
//         <button type="submit">submit</button>
//       </form>
//     </div>
//   )
// } 