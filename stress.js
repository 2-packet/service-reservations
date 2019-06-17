import http from "k6/http";
import { check, sleep } from "k6";

export let options = {
  vus: 500,
  duration: "60s"
};

// GET Route
export default function() {
  let max = 9999999;
  let min = 8999999;
  let id = Math.floor(Math.random()*(max - min) + min);
  let res = http.get('http://localhost/api/'+id+'/reservations');
  check(res, {
    "status was 200": (r) => r.status == 200,
    "transaction time OK": (r) => r.timings.duration < 200
  });
  sleep(1);
};


// // POST Route
// let random = () => Math.floor(Math.random()*10);

// let id = 1e7;
// export default function() {
//   let data = {
//     name: Math.random().toString(16).replace(/[^a-z]+/g, ''),
//     booked: random(),
//     '6:00 PM': random(),
//     '6:15 PM': random(),
//     '6:30 PM': random(),
//     '6:45 PM': random(),
//     '7:00 PM': random(),
//     '7:15 PM': random(),
//     '7:30 PM': random(),
//     '7:45 PM': random(),
//     '8:00 PM': random(),
//     '8:15 PM': random(),
//     '8:30 PM': random(),
//   };

//   let res = http.post(`http://localhost/api/reservations`, data);
//   check(res, {
//     "status was 201": (r) => r.status == 201,
//     "transaction time OK": (r) => r.timings.duration < 200
//   });
//   sleep(1);
// };