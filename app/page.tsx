import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import Cta from "@/components/CTA";
import { recentSessions } from "@/constants";

const Page = async () => {
  return (
    <main>
      <h1 className="text-2xl underline">Welcome to Code Sage!</h1>
      <section className="home-section">
        <CompanionCard
          id="123"
          name="Trace the Math wizard"
          topic="Derivatives & Integrals"
          subject="Math"
          duration={60}
          color="#e5d0ff"
        />
        <CompanionCard
          id="456"
          name="Manny the Science Genius"
          topic="Gravitation"
          subject="Science"
          duration={45}
          color="#e4g6dd"
        />
        <CompanionCard
          id="789"
          name="Shroo the Botanist"
          topic="Types of Flora"
          subject="Botany"
          duration={90}
          color="#d83344"
        />
      </section>

      <section className="home-section">
        <CompanionsList
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full"
        />
        <Cta />
      </section>
    </main>
  );
};

export default Page;
