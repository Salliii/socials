"use client";

import { AlertSuccessIcon } from "@/components/icons/alert-success";
import {
	Alert,
	AlertAction,
	AlertDescription,
	AlertTitle,
} from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardForm,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactAction } from "@/lib/actions/contact";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderCircleIcon, RefreshCwIcon, SendIcon } from "lucide-react";
import React, { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const contactFormSchema = z.object({
	name: z.string().nonempty(),
	email: z.string().nonempty().email(),
	message: z.string().nonempty(),
});

function ContactCard({
	...props
}: Omit<React.ComponentProps<"form">, "onSubmit">) {
	const [isPending, startTransition] = useTransition();
	const [formSubmitState, setFormSubmitState] = useState<undefined | boolean>(
		undefined
	);

	const form = useForm<z.infer<typeof contactFormSchema>>({
		resolver: zodResolver(contactFormSchema),
		defaultValues: {
			name: "",
			email: "",
			message: "",
		},
	});

	const onSubmitHandler = ({
		name,
		email,
		message,
	}: z.infer<typeof contactFormSchema>) => {
		startTransition(async () => {
			const { success } = await contactAction(name, email, message);

			if (success) {
				form.resetField("message");
			}

			setFormSubmitState(success);
		});
	};

	return (
		<Card>
			<CardHeader>
				<CardTitle>Send me a message</CardTitle>
			</CardHeader>
			{formSubmitState === true && (
				<CardContent>
					<Alert variant={"success"}>
						<AlertSuccessIcon />
						<AlertTitle>Message sent successfully!</AlertTitle>
						<AlertDescription>
							Thank you for reaching out. I&apos;ll get back to
							you as soon as possible.
						</AlertDescription>
						<AlertAction
							className={"group/alert-action-refresh"}
							onClick={() => setFormSubmitState(undefined)}>
							<RefreshCwIcon
								className={
									"group-hover/alert-action-refresh:rotate-180 transition-transform"
								}
							/>
							Send another message
						</AlertAction>
					</Alert>
				</CardContent>
			)}
			{formSubmitState === false && (
				<CardContent>
					<Alert variant={"error"}>
						<AlertSuccessIcon />
						<AlertTitle>
							There was an error sending your message
						</AlertTitle>
						<AlertDescription>
							Please try again later or contact me directly via
							email.
						</AlertDescription>
						<AlertAction
							className={"group/alert-action-refresh"}
							onClick={() => setFormSubmitState(undefined)}>
							<RefreshCwIcon
								className={
									"group-hover/alert-action-refresh:rotate-180 transition-transform"
								}
							/>
							Try again
						</AlertAction>
					</Alert>
				</CardContent>
			)}
			{formSubmitState === undefined && (
				<Form {...form}>
					<CardForm
						onSubmit={form.handleSubmit(onSubmitHandler)}
						{...props}>
						<FormField
							name={"name"}
							control={form.control}
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<Input
											placeholder={"Your name"}
											{...field}
										/>
									</FormControl>
								</FormItem>
							)}
						/>
						<FormField
							name={"email"}
							control={form.control}
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<Input
											placeholder={"Your email"}
											type={"email"}
											{...field}
										/>
									</FormControl>
								</FormItem>
							)}
						/>
						<FormField
							name={"message"}
							control={form.control}
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<Textarea
											placeholder={"Your message"}
											{...field}
										/>
									</FormControl>
								</FormItem>
							)}
						/>
						<Button
							className={"w-fit self-end"}
							size={"lg"}
							type={"submit"}
							disabled={isPending}>
							{isPending ? (
								<LoaderCircleIcon className={"animate-spin"} />
							) : (
								<>
									Send Message
									<SendIcon />
								</>
							)}
						</Button>
					</CardForm>
				</Form>
			)}
		</Card>
	);
}

export { ContactCard };
