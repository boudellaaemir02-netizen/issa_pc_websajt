import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-3">
            KONTAKT
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-foreground">Pošaljite upit</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Vaše ime"
                className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="email"
                placeholder="Email adresa"
                className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <textarea
                rows={4}
                placeholder="Vaša poruka..."
                className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              />
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground font-bold py-3 rounded-lg hover:opacity-90 transition-opacity text-sm"
              >
                Pošaljite poruku
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold text-foreground">Informacije</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Adresa</p>
                  <p className="text-sm text-muted-foreground">Zmaja od Bosne 1, 72000 Zenica</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Telefon</p>
                  <p className="text-sm text-muted-foreground">032 221-654</p>
                  <p className="text-sm text-muted-foreground">061 202-061</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Email</p>
                  <p className="text-sm text-muted-foreground">info@pcbuilder.ba</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
