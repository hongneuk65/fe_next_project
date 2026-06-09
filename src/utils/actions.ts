import { InvalidEmailPasswordError } from './errors';
'use server'

import { signIn } from "@/auth";

export async function authenticate(username: string, password: string) {
    
    try {
        const r = await signIn("credentials", {
            username: username,
            password: password,
            // callbackUrl: "/",
            redirect: false,
        })
        return r;
    } catch (error) {
        
        if ((error as any).name === "InvalidEmailPasswordError") {
            return {
                error: (error as any).type,
                code: 1
            }
        } else if ((error as any).name === "InActiveAccountError") {
            return {
                error: (error as any).type,
                code: 2
            }
        } else {
            return {
                error: "internal server error",
                code: 0
            }
        }
        console.log('check er', JSON.stringify(error))
        return { "error": "Incorrect username or password" }
        // if (error.cause.err instanceof InvalidLoginError) {
        //     return {"error": "Incorrect username or password"}
        // } else {
        //     throw new Error("Failed to authenticate")
        // }
    }
}