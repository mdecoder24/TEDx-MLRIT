import { Card, CardContent } from "@/components/ui/card"
import { CircleCheck } from "lucide-react"
import { Link } from "react-router"

export function SubmissionSuccess({ message }: { message: string }) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="flex flex-col items-center gap-4 p-8 md:p-12 text-center">
        <CircleCheck className="size-16 text-[#E50914]" />
        <h1 className="text-2xl font-bold">Sent Successfully!</h1>
        <p className="text-balance text-muted-foreground">{message}</p>
        <Link to="/"
          className="bg-[#E50914] text-white px-8 py-3 rounded-2xl text-center hover:bg-[#E50914]/90 transition-colors text-lg whitespace-nowrap mt-4">
          Back to Home
        </Link>
      </CardContent>
    </Card>
  )
}
