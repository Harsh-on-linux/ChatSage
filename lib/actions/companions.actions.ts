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

export const getAllCompanions = async ({ limit = 10, page = 1, subject, topic }: GetAllCompanions) => {
  const supabase = await createSupabaseClient();

  let query = supabase.from('companions').select();

  if (subject && topic) {
    query = query.ilike('subject', `%${subject}%`).or(`topic.ilike.%${topic}%,name.ilike.%${topic}%`);
  } else if (subject) {
    query = query.ilike('subject', `%${subject}%`);
  } else if (topic) {
    query = query.or(`topic.ilike.%${topic}%,name.ilike.%${topic}%`);
  }

  query = query.range((page - 1) * limit, page * limit - 1);

  const { data: companions, error } = await query;

  if (error) throw new Error(error.message);

  return companions;
}
