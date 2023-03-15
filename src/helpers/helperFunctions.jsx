import React from "react";

const helpers = {}

helpers.getRules = new Promise((res, reject) => {
  fetch('/api/getRules', {
    method: 'GET',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'Application/JSON'
    },
  })
  .then(response => response.json())
  .then(data => {
    return res(data);
  })
  .catch(err => reject(console.log('Failed to get rules from database:', err)))
})

helpers.getGameName = (state) => {
  state.rules.forEach(rule => {
    if (rule._id == state.game) {
      console.log(rule.game_name)
      return rule.game_name;
    }
  })
}

export default helpers;