import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { useState } from "react"
import { SubmissionSuccess } from "./SubmissionSuccess"
import { Textarea } from "./ui/textarea"

export function SpeakerForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [college, setCollege] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className={cn("flex flex-col gap-6", className)} {...props}>
        <SubmissionSuccess message="Thank you for your speaker nomination. Our team will review it and get back to you." />
      </div>
    )
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden">
        <CardContent className="grid p-0 md:grid-cols-2">
          <div className="p-6 md:p-8">
            <form onSubmit={onSubmit} className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold">Become a Speaker</h1>
                <p className="text-balance text-muted-foreground">
                  Get your tickets now!
                </p>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  name="email"
                  type="email"
                  placeholder="john.doe@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  name="phone"
                  type="tel"
                  placeholder="9876543210"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="name">Are you nominating yourself / someone else?</Label>
                <Select onValueChange={(value) => setCollege(value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Option" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="MYSELF">Myself</SelectItem>
                    <SelectItem value="OTHERS">Others</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {college === "OTHERS" && <>
                <div className="grid gap-2">
                  <Label htmlFor="name">Other</Label>
                  <Input
                    id="college"
                    type="text"
                    placeholder="JNTU Hyderabad"
                    required
                  />
                </div>
              </>}
              <div className="grid gap-2">
                <Label htmlFor="name">Proposed Talk Title</Label>
                <Input
                  type="text"
                  required
                  name="talk_title"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="name">Brief description of the idea</Label>
                <Textarea // Textarea
                  required
                  name="idea_brief"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="name">Why is this idea worth spreading?</Label>
                <Textarea // Textarea
                  name="idea_worth"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="name">Brief Bio (Background, Expertise, Achievements, etc.)</Label>
                <Textarea // Textarea
                  name="bio"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="name">Link to previous talks / videos</Label>
                <Input
                  type="text"
                  name="link"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="consent">Do you agree to follow TEDx content guidelines?</Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Option" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="YES">Yes</SelectItem>
                    <SelectItem value="NO">No</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <button type="submit"
                className="bg-[#E50914] text-white px-8 py-3 rounded-2xl text-center  hover:bg-[#E50914]/90 transition-colors text-lg whitespace-nowrap mt-4">
                Register Now
              </button>

            </form>
          </div>
          <div className="relative hidden md:block">
            <img
              src="https://public.readdy.ai/ai/img_res/845b6a06d103e787ab65037b0342dc95.jpg"
              alt="Image"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </CardContent>
      </Card>
      <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary">
        By continuing, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  )
}
