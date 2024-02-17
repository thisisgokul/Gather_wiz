import EventForm from "@/components/shared/EventForm"
import { auth } from "@clerk/nextjs"


const UpdateEvent = () => {
  const {sessionClaims} =auth();

  const userId = sessionClaims?.userId as string;

  return (
    <>
    <section className="md:py-10 py-5 bg-primary-50 bg-cover bg-dotted-pattern bg-center">
      <h3 className="wrapper h3-bold text-center sm:text-left">Update Event</h3>
    </section>
    <div className="wrapper my-8">
      <EventForm userId={userId} type='Update'/>
    </div>
    </>
  )
}

export default UpdateEvent