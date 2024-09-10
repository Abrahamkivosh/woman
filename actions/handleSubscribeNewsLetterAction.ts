//actions/handleSubscribeNewsLetterAction.ts
"use server";

export default async function handleSubscribeNewsLetterAction(
  email: string
): Promise<{ status: number; message: string }> {
  // Implement your action here
  return { status: 200, message: "Success" };
}
