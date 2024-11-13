import Image from "next/image";

export default function AppKit() {
  return (
    <section className="flex">
      <div className="flex rounded-[40px] bg-[#F0573C] p-16">
        <Image
          className="w-full h-full"
          src={"/product_teaser/AppKit_Preview.png"}
          width={300}
          height={700}
          alt="AppKit Sign In Mobile View"
        />
      </div>
      <div>
        {/* Card */}
        <span>Product</span>
        <h3>The toolkit to build onchain app UX</h3>
        <p>
          Build world-class app experiences with multiple, cutting edge features
          designed to make web3 usable.
        </p>
      </div>
    </section>
  );
}
