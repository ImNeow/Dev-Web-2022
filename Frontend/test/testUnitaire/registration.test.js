import React from "react";

const R = require("../../src/Pages/Registration")
test("checkNameValidity with two valid strings", () =>{
  expect(R.checkNameValidity("Kevin", "Keurvels")).toBe(true)
});
test("checkNameValidity with one number on the first string", () =>{
  expect(R.checkNameValidity("Kevin4", "Keurvels")).toBe(false)
});
test("checkNameValidity with one number on the second string", () =>{
  expect(R.checkNameValidity("Kevin", "Keurvels4")).toBe(false)
});
test("checkNameValidity with a number for the first parameter", () =>{
  expect(R.checkNameValidity(5, "Keurvels")).toBe(false)
});
test("checkNameValidity with a number for the second parameter", () =>{
  expect(R.checkNameValidity("Kevin", 4)).toBe(false)
});
test("checkNameValidity with a boolean for the first parameter", () =>{
  expect(R.checkNameValidity(true, "Kevin")).toBe(false)
});
test("checkNameValidity with a boolean for the second parameter", () =>{
  expect(R.checkNameValidity("Kevin", true)).toBe(false)
});

test("isNameCharactersEnough with two valid strings", () =>{
  expect(R.isNameCharactersEnough("Kevin", "Keurvels")).toBe(true)
});
test("isNameCharactersEnough with the first string too short", () =>{
  expect(R.isNameCharactersEnough("K", "Keurvels")).toBe(false)
});
test("isNameCharactersEnough with the second string too short", () =>{
  expect(R.isNameCharactersEnough("Kevin", "K")).toBe(false)
});
test("isNameCharactersEnough with the first string is a empty string", () =>{
  expect(R.isNameCharactersEnough("", "Keurvels")).toBe(false)
});
test("isNameCharactersEnough with the second string is a empty string", () =>{
  expect(R.isNameCharactersEnough("Kevin", "")).toBe(false)
});

test("isEmailCharactersEnough with a valid string", () =>{
  expect(R.isEmailCharactersEnough("k.keurvels@students.ephec.be")).toBe(true)
});
test("isEmailCharactersEnough with a too short string", () =>{
  expect(R.isEmailCharactersEnough("k@st")).toBe(false)
});
test("isEmailCharactersEnough with a empty string", () =>{
  expect(R.isEmailCharactersEnough("")).toBe(false)
});


test("checkEmailValidity with a valid string", () =>{
  expect(R.checkEmailValidity("k.keurvels@students.ephec.be")).toBe(true)
});
test("checkEmailValidity with a string without a @", () =>{
  expect(R.checkEmailValidity("k.keurvels.students.ephec.be")).toBe(false)
});
test("checkEmailValidity with a string without the first part of the email", () =>{
  expect(R.checkEmailValidity("@students.ephec.be")).toBe(false)
});
test("checkEmailValidity with a string without the second part of the email", () =>{
  expect(R.checkEmailValidity("k.keurvels@")).toBe(false)
});

test("checkPasswordValidity with two same strings", () =>{
  expect(R.checkPasswordValidity("password", "password")).toBe(true)
});
test("checkPasswordValidity with different strings", () =>{
  expect(R.checkPasswordValidity("password", "passworr")).toBe(false)
});
test("checkPasswordValidity with two same numbers", () =>{
  expect(R.checkPasswordValidity(4, 4)).toBe(true)
});
test("checkPasswordValidity with different numbers", () =>{
  expect(R.checkPasswordValidity(4, 7)).toBe(false)
});
test("checkPasswordValidity with two same boolean", () =>{
  expect(R.checkPasswordValidity(false, false)).toBe(true)
});
test("checkPasswordValidity with different boolean", () =>{
  expect(R.checkPasswordValidity(true, false)).toBe(false)
});
test("checkPasswordValidity with two empty strings", () =>{
  expect(R.checkPasswordValidity("", "")).toBe(true)
});
test("checkPasswordValidity with one string empty", () =>{
  expect(R.checkPasswordValidity("password", "")).toBe(false)
});

test("isNewsletterBoolean a good boolean", () =>{
  expect(R.isNewsletterBoolean(true)).toBe(true)
});
test("isNewsletterBoolean a string", () =>{
  expect(R.isNewsletterBoolean("true")).toBe(false)
});
test("isNewsletterBoolean a number", () =>{
  expect(R.isNewsletterBoolean(4)).toBe(false)
});
