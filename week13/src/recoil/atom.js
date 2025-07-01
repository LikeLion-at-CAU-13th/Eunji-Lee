import { atom } from "recoil";

export const userNameAtom = atom({
    key: "userName",
    default: "아기사자",
});

export const emailAtom = atom({
    key: "email",
    default: "likelion@cau.ac.kr",
});

export const birthAtom = atom({
    key: "birth",
    default: " ",
});

export const isSubmittedAtom = atom({
    key: "isSubmitted",
    default: false,
});