import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useNavigate } from "react-router"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { useState } from "react"
import { supabase } from "@/data/supabase"
import { toast } from "sonner"

export function SponsorForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [data, setData] = useState({
    name:"",
    email:"",
    phone:"",
    company:"",
    link:"",
    sponsorship:"",
    support:"",
    brand:"",
    follow_up:""
  })
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [sponsorship, setSponsorship] = useState("");
  const [support, setSupport] = useState("");
  const [follow_up, setFollow] = useState("");
  const navigate = useNavigate();

  const onSubmit = async () => {
    try {
      let formData = {...data};
      if(a === "OTHERS")
        formData.sponsorship = sponsorship;
      else
        formData.sponsorship = a;
      if(b === "OTHERS")
        formData.support = support;
      else
        formData.support = b;
      formData.follow_up = follow_up;
      const { error } = await supabase
      .from('sponsors')
      .insert(formData)
      .select();
      if(error === null){
        toast("Registered Successfully!");
        navigate("/");
        return;
      }
      console.error(error);
    } catch (error) {
      console.error(error);
    }
    toast("Something Went Wrong!")
  }

  const onChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    setData({...data,[e.target.name]:e.target.value});
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden">
        <CardContent className="grid p-0 md:grid-cols-2">
          <div className="p-6 md:p-8">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold">Become a Sponsor</h1>
                <p className="text-balance text-muted-foreground">
                TEDxMLRIT is more than just an event—it's a platform for transformative ideas, groundbreaking discussions, and visionary thinking. As a sponsor, you have the opportunity to amplify your brand’s impact, engage with a dynamic audience, and be part of an exclusive global movement that fuels innovation and progress.

                </p>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  required
                  onChange={onChange}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  name="email"
                  type="email"
                  placeholder="john.doe@example.com"
                  required
                  onChange={onChange}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  name="phone"
                  type="tel"
                  placeholder="9876543210"
                  required
                  onChange={onChange}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">Company / Organization Name</Label>
                <Input
                  name="company"
                  type="text"
                  required
                  onChange={onChange}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">Website / Social Media Link</Label>
                <Input
                  name="link"
                  type="text"
                  required
                  onChange={onChange}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="name">Which Sponsorship Category are you interested in?</Label>
                <Select onValueChange={(value) => setA(value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Category" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="TITLE">Title Sponsor</SelectItem>
                    <SelectItem value="GOLD">Gold Sponsor</SelectItem>
                    <SelectItem value="SILVER">Silver Sponsor</SelectItem>
                    <SelectItem value="KIND">In-Kind Sponsor (providing services/products instead of monetary support)</SelectItem>
                    <SelectItem value="OTHERS">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>              
              {a === "OTHERS" && <>
                <div className="grid gap-2">
                  <Label htmlFor="name">Other</Label>
                  <Input
                    type="text"
                    required
                    onChange={(e) => setSponsorship(e.target.value)}
                  />
                </div>
              </>}
              <div className="grid gap-2">
                <Label htmlFor="name">What type of Support would you like to offer?</Label>
                <Select onValueChange={(value) => setB(value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Support" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="MONETARY">Monetary Sponsorship</SelectItem>
                    <SelectItem value="LOGISTICS">Venue / Logistics Support</SelectItem>
                    <SelectItem value="MEDIA">Media / Promotional Partnership</SelectItem>
                    <SelectItem value="TECHNOLOGY">Technology / Equipment Support</SelectItem>
                    <SelectItem value="OTHERS">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {b === "OTHERS" && <>
                <div className="grid gap-2">
                  <Label htmlFor="name">Other</Label>
                  <Input
                    type="text"
                    required
                    onChange={(e) => setSupport(e.target.value)}
                  />
                </div>
              </>}
              <div className="grid gap-2">
                <Label htmlFor="phone">Would you like to showcase your brand through any specific activations (e.g., booths, stage mentions, giveaways)?</Label>
                <Input
                  name="brand"
                  type="text"
                  required
                  onChange={onChange}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="name">Would you like to schedule a follow-up discussion with the TEDxMLRIT team?</Label>
                <Select onValueChange={(value) => setFollow(value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Option" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="YES">Yes</SelectItem>
                    <SelectItem value="NO">No</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <button onClick={() => onSubmit()} type="button"
                className="bg-[#E50914] text-white px-8 py-3 rounded-2xl text-center  hover:bg-[#E50914]/90 transition-colors text-lg whitespace-nowrap mt-4">
                Register Now
              </button>

            </div>
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
