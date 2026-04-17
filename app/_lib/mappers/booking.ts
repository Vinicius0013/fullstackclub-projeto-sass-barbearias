import { Prisma } from "@prisma/client"

// tipo original vindo do Prisma
export type BookingWithRelations = Prisma.BookingGetPayload<{
  include: {
    service: {
      include: {
        barbershop: true
      }
    }
  }
}>

// tipo seguro (sem Decimal)
export type SafeBooking = Omit<BookingWithRelations, "service"> & {
  service: Omit<BookingWithRelations["service"], "price"> & {
    price: number
  }
}

// função de normalização tipada (Mapper)
const normalizeBooking = (booking: BookingWithRelations): SafeBooking => ({
  ...booking,
  service: {
    ...booking.service,
    price: Number(booking.service.price),
  },
})

// Helper para listas
export const normalizeBookings = (
  bookings: BookingWithRelations[],
): SafeBooking[] => bookings.map(normalizeBooking)
