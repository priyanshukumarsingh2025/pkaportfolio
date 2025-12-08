import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Invalid email"),
  message: z.string().min(10, "Message is too short"),
});

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "MESSAGE_SENT",
      description: "I'll get back to you shortly.",
      className: "bg-black border-primary text-primary font-mono",
    });
    form.reset();
  }

  return (
    <div className="min-h-screen pt-32 px-6 md:px-20 pb-20 flex flex-col md:flex-row gap-20">
      <div className="flex-1">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-6xl md:text-8xl font-display font-bold mb-8 text-white">
            PING_<span className="text-primary">ME</span>
          </h1>
          <p className="font-mono text-lg text-muted-foreground mb-12 max-w-md">
            Interested in working together? Have a project in mind? Or just want to say hi? 
            Drop a message into the void.
          </p>

          <div className="space-y-4 font-mono text-lg">
            <a href="mailto:hello@example.com" className="block text-white hover:text-primary transition-colors">
              hello@example.com
            </a>
            <a href="#" className="block text-white hover:text-primary transition-colors">
              @social_handle
            </a>
          </div>
        </motion.div>
      </div>

      <div className="flex-1 max-w-xl">
        <motion.div
           initial={{ opacity: 0, x: 50 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-mono text-primary">NAME</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} className="rounded-none border-x-0 border-t-0 border-b-2 border-white/20 bg-transparent px-0 focus-visible:ring-0 focus-visible:border-primary placeholder:text-muted-foreground/50 font-mono text-lg h-12" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-mono text-primary">EMAIL</FormLabel>
                    <FormControl>
                      <Input placeholder="john@example.com" {...field} className="rounded-none border-x-0 border-t-0 border-b-2 border-white/20 bg-transparent px-0 focus-visible:ring-0 focus-visible:border-primary placeholder:text-muted-foreground/50 font-mono text-lg h-12" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-mono text-primary">MESSAGE</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Tell me about your project..." {...field} className="rounded-none border-x-0 border-t-0 border-b-2 border-white/20 bg-transparent px-0 focus-visible:ring-0 focus-visible:border-primary placeholder:text-muted-foreground/50 font-mono text-lg min-h-[150px] resize-none" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" size="lg" className="w-full rounded-none bg-primary text-black hover:bg-white hover:text-black font-mono font-bold tracking-widest text-lg h-14">
                SEND_TRANSMISSION
              </Button>
            </form>
          </Form>
        </motion.div>
      </div>
    </div>
  );
}
