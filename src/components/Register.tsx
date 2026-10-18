import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { useState } from "react"
import { SubmissionSuccess } from "./SubmissionSuccess"

export function RegisterForm({
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
        <SubmissionSuccess message="Thank you for registering for TEDxMLRIT. We'll be in touch with your ticket details soon." />
      </div>
    )
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden">
        <CardContent className="grid p-0 grid-cols-1 md:grid-cols-2">
          <div className="p-6 md:p-8">
            <form onSubmit={onSubmit} className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold">Register Now</h1>
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
                <Label htmlFor="name">College</Label>
                <Select onValueChange={(value) => setCollege(value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select College" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="MLRIT">MLRIT</SelectItem>
                    <SelectItem value="OTHERS">Others</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {college === "MLRIT" && <>
                <div className="grid gap-2">
                  <Label htmlFor="name">Year</Label>
                  <Input
                    name="year"
                    type="text"
                    placeholder="1"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="name">Department</Label>
                  <Input
                    name="department"
                    type="text"
                    placeholder="Computer Science"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="name">Section</Label>
                  <Input
                    name="section"
                    type="text"
                    placeholder="A"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="name">Roll Number</Label>
                  <Input
                    name="rollNumber"
                    type="text"
                    placeholder=""
                    required
                  />
                </div>
              </>}
              {college === "OTHERS" && <>
                <div className="grid gap-2">
                  <Label htmlFor="name">College Name</Label>
                  <Input
                    id="college"
                    type="text"
                    placeholder="JNTU Hyderabad"
                    required
                  />
                </div>
              </>}
              <div className="grid gap-2">
                <Label htmlFor="phone">Payment Screenshot</Label>
                <Input
                  name="screenshot"
                  type="file"
                  required
                />
              </div>
              <a href="/QR.jpeg" download={true}
                className="bg-amber-100 md:hidden text-black px-8 py-3 rounded-2xl text-center  hover:bg-[#E50914]/90 transition-colors text-lg whitespace-nowrap mt-4">
                Click here to download QR
              </a>
              <button type="submit"
                className="bg-[#E50914] text-white px-8 py-3 rounded-2xl text-center  hover:bg-[#E50914]/90 transition-colors text-lg whitespace-nowrap mt-4">
                Register Now
              </button>

            </form>
          </div>
          <div className="relative hidden md:block">
            <img
              src="/QR.jpeg"
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
