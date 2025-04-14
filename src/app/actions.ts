"use server";
// export async function createAction() {
//   return "create action";
// }

//  export async function createAction(formData: FormData) {
//   const username = formData.get('username')
//   console.log(username)
// } 

// ------ 对应 07.tsx
//  export async function createAction(previousState: string, formData: FormData) {
//   const message = formData.get('message')
//   console.log(message)
//   await new Promise(resolve => setTimeout(resolve, 2000))
//   return 'success'
// } 
//  export async function createAction(message: string) {
//   await new Promise(resolve => setTimeout(resolve, 2000))
//   return Math.random() > 0.5 ? message : 'error'
// } 

import { z } from 'zod'

export type CreateActionState = {
    errors: {
        email?: string[] | undefined;
        password?: string[] | undefined;
    };
} | undefined

const schema = z.object({
  email: z.string().email({ message: 'Please enter a valid email.' }),
  password: z.string().min(8, { message: 'Be at least 8 characters long' })
})

export async function createAction(previousState: CreateActionState, formData: FormData): Promise<CreateActionState> {
  const validatedFields = schema.safeParse({
    email: formData.get('email'),
    password: formData.get('password')
  })
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  } 
}

