import { test } from 'node:test'
import assert from 'node:assert/strict'
import { status, fmtTime } from './hours.js'
import { addAge, dueDates } from './vaccines.js'
import { clinic } from '../data/clinic.js'

const at = (s) => status(clinic.hours, new Date(s))

test('open/closed in IST', () => {
  assert.deepEqual(at('2026-10-12T10:00:00+05:30'), { open: true, closes: 1200 }) // Mon 10:00 AM
  assert.deepEqual(at('2026-10-12T08:59:00+05:30'), { open: false, opens: 540, day: 1, inDays: 0 }) // Mon before 9
  assert.deepEqual(at('2026-10-10T13:59:00+05:30'), { open: true, closes: 840 }) // Sat 1:59 PM
  assert.deepEqual(at('2026-10-10T14:00:00+05:30'), { open: false, opens: 540, day: 1, inDays: 2 }) // Sat 2 PM -> Mon
  assert.deepEqual(at('2026-10-11T11:00:00+05:30'), { open: false, opens: 540, day: 1, inDays: 1 }) // Sunday
  assert.deepEqual(at('2026-10-16T20:00:00+05:30'), { open: false, opens: 540, day: 6, inDays: 1 }) // Fri 8 PM -> Sat
  assert.equal(at('2026-10-12T18:45:00Z').open, false) // 00:15 Tue IST, still Mon in UTC
  assert.equal(at('2026-10-12T18:45:00Z').day, 2)
  assert.equal(fmtTime(540), '9 AM')
  assert.equal(fmtTime(1200), '8 PM')
  assert.equal(fmtTime(750), '12:30 PM')
})

test('vaccine due dates', () => {
  assert.equal(addAge('2024-01-31', { w: 6 }), '2024-03-13')
  assert.equal(addAge('2024-01-31', { m: 1 }), '2024-02-29') // leap year month end
  assert.equal(addAge('2023-01-31', { m: 1 }), '2023-02-28')
  assert.equal(addAge('2024-02-29', { y: 1 }), '2025-02-28')
  assert.equal(addAge('2024-01-31', { m: 9 }), '2024-10-31')

  const rows = dueDates('2025-06-15', '2026-09-20') // child is 15 months old
  const by = (label) => rows.find((r) => r.label.en === label)
  assert.equal(by('9 months').status, 'past')
  assert.equal(by('15 months').date, '2026-09-15')
  assert.equal(by('15 months').status, 'past')
  assert.equal(by('12 to 15 months').status, 'past')
  assert.equal(by('16 to 18 months').status, 'upcoming')
  assert.equal(by('16 to 18 months').date, '2026-10-15')
  assert.equal(dueDates('2025-06-15', '2026-11-01').find((r) => r.label.en === '16 to 18 months').status, 'now')
})
