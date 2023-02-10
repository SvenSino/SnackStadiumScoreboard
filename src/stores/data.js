import { defineStore } from 'pinia'

export const dataStore = defineStore('data', {
  state: () => ({
    score1: '12',
    score2: '12',
    currentMinute: '12',
    currentPeriod: '0'
  }),

  actions: {
  },
})