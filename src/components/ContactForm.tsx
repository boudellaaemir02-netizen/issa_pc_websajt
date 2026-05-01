import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

const ContactForm = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    if (!name || name.length > 100) {
      toast({ title: "Neispravno ime", description: "Unesite ime (max 100 znakova).", variant: "destructive" });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast({ title: "Neispravan email", description: "Unesite važeću email adresu.", variant: "destructive" });
      return;
    }
    if (!message || message.length > 2000) {
      toast({ title: "Neispravna poruka", description: "Poruka je obavezna (max 2000 znakova).", variant: "destructive" });
      return;
    }

    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke("send-contact", {
        body: { name, email, message },
      });
      if (error) throw error;
      if (!data?.success) throw new Error(data?.error || "Greška pri slanju");

      toast({ title: "Poruka poslana!", description: "Javit ćemo vam se u najkraćem mogućem roku." });
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Pokušajte ponovo.";
      toast({ title: "Greška", description: msg, variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto mt-12 p-6 md:p-8 rounded-xl bg-card border border-border space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Ime</Label>
        <Input
          id="name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="Vaše ime"
          maxLength={100}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="vas@email.com"
          maxLength={255}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Poruka</Label>
        <Textarea
          id="message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Opišite šta vas zanima..."
          rows={5}
          maxLength={2000}
          required
        />
      </div>
      <Button type="submit" disabled={loading} className="w-full">
        {loading ? (
          <>
            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
            Šaljem...
          </>
        ) : (
          "Pošalji poruku"
        )}
      </Button>
    </form>
  );
};

export default ContactForm;
