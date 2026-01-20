import { EmailTemplate } from "../components/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend("re_fBQXwZR8_GetfeAiE7zT4N2enpZJTQccU");

export async function POST() {
  try {
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["francoberlochi@gmail.com"],
      subject: "Contacto",
      react: EmailTemplate({ firstName: "John" }),
      text:""
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
