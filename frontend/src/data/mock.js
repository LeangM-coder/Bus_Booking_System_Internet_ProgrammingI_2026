// STATIC SAMPLE DATA ONLY. Nothing here comes from a database.
// Each export will be replaced by an API call when the Spring Boot backend exists.

export const cities = ['Phnom Penh', 'Siem Reap', 'Sihanoukville', 'Battambang', 'Kampot', 'Kep', 'Kratie', 'Mondulkiri']

export const popularRoutes = [
  { to: 'Siem Reap', hours: 6, price: 12 },
  { to: 'Sihanoukville', hours: 4.5, price: 8 },
  { to: 'Battambang', hours: 5, price: 9 },
]

export const trips = [
  { id: 1, dep: '07:00 AM', arr: '01:00 PM', type: 'VIP Sleeper', price: 12, free: 12 },
  { id: 2, dep: '09:30 AM', arr: '03:30 PM', type: 'Standard', price: 10, free: 21 },
  { id: 3, dep: '01:00 PM', arr: '07:00 PM', type: 'Minivan', price: 11, free: 5 },
  { id: 4, dep: '08:00 PM', arr: '02:00 AM', type: 'VIP Sleeper', price: 12, free: 0 },
]

export const seatMap = {
  rows: 9, // 9 rows x 4 seats (2+2) = 36 seats
  taken: ['1A', '2B', '2C', '4D', '5A', '5B', '7C', '8D', '9A'],
  maxSeats: 5,
}

export const tripSummary = {
  from: 'Phnom Penh',
  to: 'Siem Reap',
  date: 'Mon, 16 Nov 2026',
  dep: '07:00 AM',
  type: 'VIP Sleeper',
  price: 12,
}

export const paymentMethods = ['ABA Pay', 'Wing', 'Credit / Debit Card']

export const ticket = {
  name: 'Sokha Chan',
  from: 'Phnom Penh',
  to: 'Siem Reap',
  date: 'Mon, 16 Nov 2026',
  dep: '07:00 AM',
  seats: ['3A', '3B'],
  ref: 'BK-261116-0042',
}

export const myBookings = [
  { ref: 'BK-261116-0042', route: 'Phnom Penh → Siem Reap', when: 'Mon 16 Nov, 07:00 AM', seats: '3A, 3B', status: 'Confirmed', canCancel: true },
  { ref: 'BK-261125-0077', route: 'Phnom Penh → Battambang', when: 'Wed 25 Nov, 09:30 AM', seats: '8C', status: 'Confirmed', canCancel: true },
  { ref: 'BK-261101-0011', route: 'Phnom Penh → Kampot', when: 'Sun 1 Nov, 01:00 PM', seats: '2D', status: 'Cancelled', canCancel: false },
  { ref: 'BK-261030-0009', route: 'Siem Reap → Phnom Penh', when: 'Fri 30 Oct, 07:00 AM', seats: '5A', status: 'Confirmed', canCancel: false },
]

export const buses = [
  { plate: '2AB-1234', type: 'VIP Sleeper', seats: 36, status: 'Active' },
  { plate: '2AB-5678', type: 'Standard', seats: 40, status: 'Active' },
  { plate: '3CD-1111', type: 'Minivan', seats: 16, status: 'Active' },
  { plate: '3CD-2222', type: 'Standard', seats: 40, status: 'Inactive' },
  { plate: '1EF-9090', type: 'VIP Sleeper', seats: 36, status: 'Active' },
]

export const busTypes = ['VIP Sleeper', 'Standard', 'Minivan']

export const schedules = [
  { route: 'Phnom Penh → Siem Reap', time: '07:00 AM', price: 12, bus: '2AB-1234' },
  { route: 'Phnom Penh → Siem Reap', time: '09:30 AM', price: 10, bus: '2AB-5678' },
  { route: 'Phnom Penh → Battambang', time: '08:00 AM', price: 9, bus: '3CD-1111' },
  { route: 'Phnom Penh → Sihanoukville', time: '10:00 AM', price: 8, bus: '1EF-9090' },
]

export const adminBookings = [
  { ref: 'BK-0042', name: 'Sokha Chan', route: 'PP → Siem Reap', date: '16 Nov', seats: '3A, 3B', amount: 24, status: 'Confirmed' },
  { ref: 'BK-0041', name: 'Dara Kim', route: 'PP → Kampot', date: '16 Nov', seats: '5C', amount: 8, status: 'Confirmed' },
  { ref: 'BK-0040', name: 'Srey Pich', route: 'PP → Battambang', date: '15 Nov', seats: '6A', amount: 9, status: 'Cancelled' },
  { ref: 'BK-0039', name: 'Vanna Ly', route: 'PP → Siem Reap', date: '15 Nov', seats: '8D', amount: 12, status: 'Confirmed' },
  { ref: 'BK-0038', name: 'Rith Sok', route: 'PP → Sihanoukville', date: '14 Nov', seats: '2A, 2B', amount: 16, status: 'Confirmed' },
]

export const overviewStats = { totalBookings: 1248, revenue: 15420, activeBuses: 24 }

export const revenueByDay = [
  { day: '06 Nov', amount: 90 }, { day: '07 Nov', amount: 120 }, { day: '08 Nov', amount: 70 }, { day: '09 Nov', amount: 140 },
  { day: '10 Nov', amount: 110 }, { day: '11 Nov', amount: 160 }, { day: '12 Nov', amount: 95 }, { day: '13 Nov', amount: 130 },
]

export const staffTrips = [
  { id: 1, dep: '07:00 AM', route: 'Phnom Penh → Siem Reap', bus: '2AB-1234' },
  { id: 2, dep: '01:00 PM', route: 'Siem Reap → Phnom Penh', bus: '2AB-1234' },
  { id: 3, dep: '08:00 PM', route: 'Phnom Penh → Kampot', bus: '1EF-9090' },
]

export const passengers = [
  { seat: '3A', name: 'Sokha Chan', status: 'Not checked' },
  { seat: '3B', name: 'Sokha Chan', status: 'Not checked' },
  { seat: '5C', name: 'Dara Kim', status: 'Checked in' },
  { seat: '6A', name: 'Srey Pich', status: 'Not checked' },
  { seat: '8D', name: 'Vanna Ly', status: 'Not checked' },
]

// Booking references the staff "Check Ticket" box treats as valid (demo only).
export const validRefs = ['BK-261116-0042', 'BK-0042', 'BK-0041']
