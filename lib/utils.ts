import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

import { subjectsColors, voices } from "@/constants";
import { CreateAssistantDTO } from "@vapi-ai/web/dist/api";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getSubjectColor = (subject: string) => {
  return subjectsColors[subject as keyof typeof subjectsColors];
};



export const configureAssistant = (voice: string, style: string) => {
  const voiceId =
    voices[voice as keyof typeof voices]?.[
    style as keyof (typeof voices)[keyof typeof voices]
    ] || "sarah";

  const vapiAssistant: CreateAssistantDTO = {
    name: "Companion",
    firstMessage:
      "Hi {{userName}}! I'm excited to learn with you today. Let's dive into {{topic}} we will go step by step through it, so shall we start?",

    transcriber: {
      provider: "deepgram",
      model: "nova-2",
      language: "en", // or "en" for more accurate English detection
      smartFormat: false,
    },

    voice: {
      provider: "11labs",
      voiceId: voiceId,
      stability: 0.3,
      similarityBoost: 0.6,
      speed: 1.1,
      style: 0.4,
      useSpeakerBoost: false,
    },

    model: {
      provider: "openai",
      model: "gpt-3.5-turbo-1106",
      messages: [
        {
          role: "system",
          content: `
You are a knowledgeable tutor teaching a real-time voice session with a student named {{userName}}. 
Teach the topic - {{topic}} from the subject - {{subject}}.

Guidelines:
- Speak clearly in English. Use simple phrasing and natural tone.
- Break down the topic into smaller parts and teach step by step.
- Ask questions to confirm understanding.
- Keep responses short and clear.
- Keep your style of conversation {{style}}.
- Do not include special characters.
        `.trim(),
        },
      ],
      temperature: 0.7,
      maxTokens: 100,
    },

    clientMessages: [],
    serverMessages: [],
  };

  return vapiAssistant;
};

