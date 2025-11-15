'use server'

import {addDoc, collection, Timestamp} from '@firebase/firestore'
import {fbAuth, firestoreDb} from '@/app/fb/init'
import {redirect} from 'next/navigation'

export async function onSubmit(prevState: any, formData: FormData) {

    const collectionRef = collection(firestoreDb, 'posts')

    let email = "patm0606"

    if (fbAuth.currentUser && fbAuth.currentUser.email) {
        email = fbAuth.currentUser.email

        try {
            email = email.slice(0, email.indexOf("@"))
        } catch (e) {
            email = "patm0606"
        }
    }

    const currentDate = new Date()

    try {
        // @ts-ignore
        await addDoc(collectionRef, {
            author: email,
            title: formData.get('title'),
            datePosted: Timestamp.fromDate(currentDate),
            body: formData.get('body')
        }).catch(e => console.error(e))

    } catch (e) {
        console.error(e)
    }

    redirect("/screens/blog-landing")
}