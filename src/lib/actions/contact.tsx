"use server";

import { Resend } from "resend";
import { v4 as uuidV4 } from "uuid";

const resend = new Resend(process.env.RESEND_API_KEY);

function Template(name: string, email: string, message: string) {
	return (
		<div>
			<a href={`mailto:${email}`}>
				{name} &lt;{email}&gt;
			</a>
			<p>{message}</p>
		</div>
	);
}

async function contactAction(name: string, email: string, message: string) {
	try {
		const { error } = await resend.emails.send({
			from: process.env.RESEND_CONTACT_FROM as string,
			to: process.env.RESEND_CONTACT_TO as string,
			subject: "New contact message",
			react: Template(name, email, message),
			headers: {
				"X-Entity-Ref-ID": uuidV4(),
			},
		});

		return { success: !error };
	} catch {
		return { success: false };
	}
}

export { contactAction };
