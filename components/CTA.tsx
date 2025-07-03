import Image from "next/image";
import Link from "next/link";

const Cta = () => {
  return (
    <section className="cta-section">
      <div className="cta-badge">Start Learning your way</div>
      <h2 className="text-3xl font-bold">Build and Personalize Your Learning Companion</h2>
      <p>Pick a name, subject, voice, & personaity - and start learning through voice conversations that feel natural and fun.</p>
      <Image src="images/cta.svg" alt="cta" width={362} height="232"></Image>
      <button className="relative overflow-hidden px-4 py-2 rounded-md border border-white group flex items-center gap-2">
        {/* Animated background from right to left */}
        <span className="absolute inset-0 bg-white translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-0" />

        {/* Icon with color inversion on hover */}
        <Image
          src="/icons/plus.svg"
          alt="plus"
          width={12}
          height={12}
          className="relative z-10 group-hover:invert transition duration-300"
        />

        {/* Text with color change */}
        <Link href="/companions/new">
          <p className="relative z-10 text-white group-hover:text-black transition-colors duration-300">
            Build a new Companion
          </p>
        </Link>
      </button>

    </section>
  );
};

export default Cta;
