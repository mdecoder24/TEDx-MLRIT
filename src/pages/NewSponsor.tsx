import { SponsorForm } from "@/components/SponsorForm"

export default function NewSponsor() {
  return (
    <div className="flex min-h-svh flex-col pt-28 items-center justify-center text-white">
      <div className="w-full max-w-sm md:max-w-3xl">
        <SponsorForm />
      </div>
    </div>
  )
}
