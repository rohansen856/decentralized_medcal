import Link from "next/link"
import { redirect } from "next/navigation"

import { getCurrentUser } from "@/lib/session"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { DoctorForm } from "@/components/doctor-form"
import { Icons } from "@/components/icons"

import { DoctorFeaturesSection } from "./benifit"

export default async function DoctorRegister() {
  const user = await getCurrentUser()
  if (!user || !user.id) redirect("/login")

  return (
    <section className="flex h-screen justify-center">
      <div className="hidden flex-1 lg:block">
        <DoctorFeaturesSection />
      </div>
      <section aria-label="registration-form">
        <div className="flex items-center gap-4 p-4">
          <Link
            href={"/verification"}
            className={cn(buttonVariants({ variant: "secondary", size: "lg" }))}
          >
            <Icons.chevronLeft />
            Back
          </Link>
          <h2 className="text-3xl">Register as docotor</h2>
        </div>
        <DoctorForm userId={user.id} />
      </section>
    </section>
  )
}
