import { atom } from "jotai";
import { User } from "@firebase/auth/dist/auth-public";

export const firebaseReady = atom<boolean>(false);
export const firebaseUserAtom = atom<User | null>(null);
export const firebaseToken = atom<string | null>(null);
