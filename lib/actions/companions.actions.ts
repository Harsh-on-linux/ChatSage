"use server";

import { auth } from "@clerk/nextjs/server";
import { createSupabaseClient } from "@/lib/supabase";

export const createCompanion = async (formData: CreateCompanion) => {
  const { userId: author } = await auth();
  console.log("Author:", author);
  console.log("FormData:", formData);

  const supabase = await createSupabaseClient();

  const { data, error } = await supabase
    .from("companions")
    .insert({ ...formData, author })
    .select();

  console.log("Supabase response:", { data, error });

  if (error || !data) {
    console.error("Database error:", error);
    throw new Error(error?.message || "Failed to create a companion");
  }

  return data[0];
};
