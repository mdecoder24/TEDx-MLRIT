import { RegisterForm } from "@/components/Register"

export default function Ticket() {
  return (
    <div className="flex min-h-svh flex-col pt-28 items-center justify-center text-white">
      <div className="w-full max-w-sm md:max-w-3xl">
        <RegisterForm />
      </div>
    </div>
  )
}
