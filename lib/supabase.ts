import { createClient } from "@supabase/supabase-js";
import { auth } from "@clerk/nextjs/server";

export const createSupabaseClient = async () => {
  const { getToken } = await auth();
  const jwt = await getToken();

  // Debug environment variables
  console.log(
    "Supabase URL:",
    process.env.NEXT_PUBLIC_SUPABASE_URL ? "✓ Set" : "✗ Missing",
  );
  console.log(
    "Supabase Anon Key:",
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? "✓ Set" : "✗ Missing",
  );
  console.log("JWT Token:", jwt ? "✓ Available" : "✗ Missing");

  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      global: {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      },
    },
  );
};
