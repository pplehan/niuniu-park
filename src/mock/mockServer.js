import Mock from "mockjs";
import login from "./login.json"
import cows from "./cows.json"
import milks from "./milks.json"

Mock.mock('/mock/login', {
  code: 200,
  data: login
})

Mock.mock('/mock/cows', {
  code: 200,
  data: cows
})

Mock.mock('/mock/milks', {
  code: 200,
  data: milks
})