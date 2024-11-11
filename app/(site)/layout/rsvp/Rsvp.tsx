import Button from "../../components/Button";

export default function Rsvp() {
  return (
    <section className="bg-blue p-5 rounded-[40px] md:rounded-full mt-2">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p className="flex-wrap">
          WalletCon II is coming. Join us in Bangkok on November 11 for the
          industry&apos;s only onchain UX conference.
        </p>
        <div className="flex gap-1">
          <Button>RSVP</Button>
          <Button intent={"outline"}>X</Button>
        </div>
      </div>
    </section>
  );
}
