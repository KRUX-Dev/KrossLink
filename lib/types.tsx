import { RelativePathString } from "expo-router"

export type CustomInput = {
    value: string
    type: 'text' | 'email' | 'password'
    onChange(e): void
    label?: string
    placeholder?: string
}

export type InputFieldAltPath = {
    linkText: string
    link: string
    linkLabel?: string
}