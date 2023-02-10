import { defineStore } from 'pinia'

export const dataStore = defineStore('data', {
  state: () => ({
    score1: '0',
    score2: '0',
    currentMinute: '0',
    currentPeriod: '0'
  }),

  actions: {
  },
})