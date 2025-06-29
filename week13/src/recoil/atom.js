import { atom } from "recoil";

export const userNameAtom = atom({
    key: "userName",
    default: "아기사자",
});

export const emailAtom = atom({
    key: "email",
    default: "likelion@cau.ac.kr",
});

//1. recoil로 관리할 상태 데이터(atom) 하나 추가해보기
export const birthAtom = atom({
    key: "birth",
    default: " ",
});

export const isSubmittedAtom = atom({
    key: "isSubmitted",
    default: false,
});