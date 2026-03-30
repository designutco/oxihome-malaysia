import { redirect } from 'next/navigation'
import { getPhoneNumber, waLink } from '@/lib/getPhoneNumber'

export const revalidate = 60

export default async function RedirectWhatsapp1() {
  const phone = await getPhoneNumber('all')
  const url = waLink(phone, 'Hi Oxihome, I am interested in renting an oxygen machine.')
  redirect(url)
}
