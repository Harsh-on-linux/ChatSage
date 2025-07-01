import Image from "next/image";
import Link from "next/link";

const Cta = () => {
  return (
    <section className="cta-section">
      <div className="cta-badge">Start Learning your way</div>
      <h2 className="text-3xl font-bold">Build and Personalize Your Learning Companion</h2>
      <p>Pick a name, subject, voice, & personaity - and start learning through voice conversations that feel natural and fun.</p>
      <Image src="images/cta.svg" alt="cta" width={362} height="232"></Image>
      <button className="btn-primary">
        <Image src="/icons/plus.svg" alt="plus" width={12} height={12}></Image>
        <Link href="/companions/new"><p>Build a new Companion</p></Link>
      </button>
    </section>
  );
};

export default Cta;
