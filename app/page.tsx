"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Snowflake,
  Thermometer,
  Wind,
  Wrench,
  ShoppingCart,
  Settings,
  PenTool,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  ArrowRight,
  Zap,
  Shield,
  Clock,
} from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [notification, setNotification] = useState<string | null>(null)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleCallNow = async () => {
    try {
      await navigator.clipboard.writeText("0918098465")
      setNotification("Telefónne číslo bolo skopírované do schránky!")
      setTimeout(() => setNotification(null), 3000)
    } catch (err) {
      console.error("Chyba pri kopírovaní:", err)
      setNotification("Chyba pri kopírovaní čísla")
      setTimeout(() => setNotification(null), 3000)
    }
  }

  const handleEmailContact = async () => {
    try {
      await navigator.clipboard.writeText("halko.lukas@gmail.com")
      setNotification("Email adresa bola skopírovaná do schránky!")
      setTimeout(() => setNotification(null), 3000)
    } catch (err) {
      console.error("Chyba pri kopírovaní:", err)
      setNotification("Chyba pri kopírovaní emailu")
      setTimeout(() => setNotification(null), 3000)
    }
  }

  const handleConsultation = () => {
    setIsContactModalOpen(true)
  }

  const services = [
    {
      icon: <Snowflake className="h-8 w-8 text-cyan-500" />,
      title: "Klimatizácie",
      description: "Profesionálna inštalácia a servis klimatizačných systémov pre domácnosti aj firmy",
    },
    {
      icon: <Thermometer className="h-8 w-8 text-red-500" />,
      title: "Tepelné čerpadlá",
      description: "Ekologické a úsporné riešenia pre vykurovanie a ohrev vody",
    },
    {
      icon: <Wind className="h-8 w-8 text-blue-500" />,
      title: "Rekuperácie",
      description: "Systémy pre zdravé vnútorné prostredie s úsporou energie",
    },
    {
      icon: <Wrench className="h-8 w-8 text-gray-600" />,
      title: "Montáž",
      description: "Odborná inštalácia všetkých typov klimatizačných zariadení",
    },
    {
      icon: <ShoppingCart className="h-8 w-8 text-green-500" />,
      title: "Predaj",
      description: "Široký sortiment kvalitných zariadení od renomovaných výrobcov",
    },
    {
      icon: <Settings className="h-8 w-8 text-purple-500" />,
      title: "Servis",
      description: "Pravidelná údržba a opravy pre dlhú životnosť vašich zariadení",
    },
    {
      icon: <PenTool className="h-8 w-8 text-orange-500" />,
      title: "Projekcia",
      description: "Návrh optimálnych riešení pre vaše konkrétne potreby",
    },
  ]

  const projects = [
    { id: 1, image: "/images/project-1.jpg", title: "Moderná klimatizácia v obývačke" },
    { id: 2, image: "/images/project-2.jpg", title: "Samsung klimatizácia - farebný interiér" },
    { id: 3, image: "/images/project-3.jpg", title: "Minimalistická inštalácia" },
    { id: 4, image: "/images/project-4.jpg", title: "Profesionálne vedenie rozvodov" },
    { id: 5, image: "/images/project-5.jpg", title: "Midea klimatizácia" },
    { id: 6, image: "/images/project-6.jpg", title: "Vonkajšia jednotka - Samsung" },
    { id: 7, image: "/images/project-7.jpg", title: "Moderná klimatizácia s displejom" },
    { id: 8, image: "/images/project-8.jpg", title: "Vonkajšia inštalácia na balkóne" },
    { id: 9, image: "/images/project-9.jpg", title: "Inštalácia na balkóne s výhľadom" },
    { id: 10, image: "/images/project-10.jpg", title: "Midea vonkajšia jednotka" },
    { id: 11, image: "/images/project-11.jpg", title: "Klimatizácia v detskej izbe" },
    { id: 12, image: "/images/project-12.jpg", title: "Elegantná inštalácia s tapetou" },
    { id: 13, image: "/images/project-13.jpg", title: "Inštalácia Midea z diaľky" },
    { id: 14, image: "/images/project-14.jpg", title: "Midea detajl" }
  ]

  const features = [
    {
      icon: <CheckCircle className="h-6 w-6 text-green-500" />,
      title: "Certifikovaní technici",
      description: "Všetky práce vykonávajú kvalifikovaní odborníci",
    },
    {
      icon: <Shield className="h-6 w-6 text-blue-500" />,
      title: "Záruka kvality",
      description: "Poskytujeme záruku na všetky naše služby a inštalácie",
    },
    {
      icon: <Clock className="h-6 w-6 text-purple-500" />,
      title: "Rýchly servis",
      description: "Operatívne riešenie porúch a pravidelná údržba",
    },
    {
      icon: <Zap className="h-6 w-6 text-yellow-500" />,
      title: "Energetická efektívnosť",
      description: "Moderné riešenia pre úsporu energie a nákladov",
    },
  ]

  // Notification Component
  const Notification = () =>
    notification && (
      <div className="fixed top-4 right-4 z-50 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg animate-in slide-in-from-right duration-300">
        <div className="flex items-center space-x-2">
          <CheckCircle className="h-5 w-5" />
          <span>{notification}</span>
        </div>
      </div>
    )

  // Contact Modal
  const ContactModal = () =>
    isContactModalOpen && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg p-8 max-w-md w-full">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900">Bezplatná konzultácia</h3>
            <button onClick={() => setIsContactModalOpen(false)} className="text-gray-400 hover:text-gray-600">
              ✕
            </button>
          </div>
          <div className="space-y-4">
            <p className="text-gray-600">Vyberte si spôsob kontaktu:</p>
            <div className="space-y-3">
              <Button
                onClick={handleCallNow}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
              >
                <Phone className="mr-2 h-4 w-4" />
                Kopírovať: 0918 098 465
              </Button>
              <Button onClick={handleEmailContact} variant="outline" className="w-full bg-transparent">
                <Mail className="mr-2 h-4 w-4" />
                Kopírovať: halko.lukas@gmail.com
              </Button>
            </div>
            <div className="mt-6 p-4 bg-cyan-50 rounded-lg">
              <h4 className="font-semibold text-cyan-800 mb-2">Čo zahŕňa konzultácia:</h4>
              <ul className="text-sm text-cyan-700 space-y-1">
                <li>• Posúdenie vašich potrieb</li>
                <li>• Odporúčanie vhodného riešenia</li>
                <li>• Cenová kalkulácia</li>
                <li>• Odpovede na všetky otázky</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center space-x-3">
            <Image src="/images/logo-new.png" alt="HLKlima Logo" width={50} height={40} className="h-10 w-auto" />
            <div>
              <h1 className="text-xl font-bold text-gray-900">HLKlima</h1>
              <p className="text-xs text-gray-600">Lukáš Haľko</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => scrollToSection("services")}
              className="text-sm font-medium text-gray-700 hover:text-cyan-600 transition-colors"
            >
              Služby
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-sm font-medium text-gray-700 hover:text-cyan-600 transition-colors"
            >
              Projekty
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium text-gray-700 hover:text-cyan-600 transition-colors"
            >
              O nás
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium text-gray-700 hover:text-cyan-600 transition-colors"
            >
              Kontakt
            </button>
          </nav>
          <Button
            onClick={handleCallNow}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
          >
            <Phone className="h-4 w-4 mr-2" />
            Zavolať
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-purple-500/10" />
        <div className="container relative px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
                  Profesionálne klimatizačné služby
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Dokonalá klíma
                  <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                    {" "}
                    pre váš domov
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Špecializujeme sa na klimatizácie, tepelné čerpadlá a rekuperácie. Poskytujeme komplexné služby od
                  projekcie až po servis.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={handleConsultation}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-lg px-8"
                >
                  Bezplatná konzultácia
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection("projects")}
                  className="text-lg px-8 border-2 bg-transparent"
                >
                  Naše projekty
                </Button>
              </div>
              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">10+</div>
                  <div className="text-sm text-gray-600">Rokov skúseností</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">100+</div>
                  <div className="text-sm text-gray-600">Namontovaných klimatizácií</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">100%</div>
                  <div className="text-sm text-gray-600">Záruka kvality</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white p-8">
                <Image
                  src="/images/hlklima-logo-large.png"
                  alt="HLKlima - Profesionálne klimatizačné služby"
                  width={800}
                  height={300}
                  className="w-full h-auto max-w-2xl mx-auto"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-20 animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-20 animate-pulse delay-1000" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white">Naše služby</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Komplexné riešenia pre váš komfort</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ponúkame široké spektrum služieb v oblasti klimatizácie, vykurovania a vetrania
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg"
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 rounded-full bg-gray-50 group-hover:bg-gradient-to-br group-hover:from-cyan-50 group-hover:to-blue-50 transition-all duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white">Prečo si vybrať nás</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Vaša spokojnosť je naša priorita</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section id="projects" className="py-20 bg-white">
        <div className="container px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white">Naše projekty</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Úspešne zrealizované inštalácie</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pozrite si ukážky našich profesionálnych inštalácií klimatizačných systémov
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 group-hover:text-cyan-600 transition-colors">
                    {project.title}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-6">
            <Badge className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white">O spoločnosti</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Lukáš Haľko - váš expert na klimatizácie</h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              <p>
                Som Lukáš Haľko a venujem sa klimatizačným systémom už viac ako 10 rokov. Moja spoločnosť HLKlima sa
                špecializuje na komplexné riešenia v oblasti klimatizácie, tepelných čerpadiel a rekuperačných systémov.
              </p>
              <p>
                Každý projekt pristupujem individuálne a snažím sa nájsť optimálne riešenie pre konkrétne potreby
                zákazníka. Kvalita a spokojnosť klientov sú pre mňa na prvom mieste.
              </p>
              <p>
                Ponúkam komplexné služby od prvotnej konzultácie a projekcie, cez dodávku a odbornú montáž, až po
                pravidelný servis a údržbu. Spolupracujem s renomovanými výrobcami ako Samsung, Midea a ďalšími.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Badge variant="secondary" className="text-base px-4 py-2">
                Certifikovaný technik
              </Badge>
              <Badge variant="secondary" className="text-base px-4 py-2">
                15+ rokov praxe
              </Badge>
              <Badge variant="secondary" className="text-base px-4 py-2">
                500+ projektov
              </Badge>
              <Badge variant="secondary" className="text-base px-4 py-2">
                Komplexné služby
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white">Kontakt</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Spojte sa s nami</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Máte otázky alebo potrebujete konzultáciu? Neváhajte nás kontaktovať
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center p-8 hover:shadow-xl transition-shadow">
              <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-6">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Telefón</h3>
              <button
                onClick={handleCallNow}
                className="text-cyan-600 hover:text-cyan-700 font-medium text-lg cursor-pointer"
              >
                0918 098 465
              </button>
            </Card>
            <Card className="text-center p-8 hover:shadow-xl transition-shadow">
              <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-6">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
              <button
                onClick={handleEmailContact}
                className="text-cyan-600 hover:text-cyan-700 font-medium cursor-pointer"
              >
                halko.lukas@gmail.com
              </button>
            </Card>
            <Card className="text-center p-8 hover:shadow-xl transition-shadow">
              <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-6">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Oblasť pôsobenia</h3>
              <p className="text-gray-600">Východné Slovensko</p>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Button
              size="lg"
              onClick={handleCallNow}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-lg px-8"
            >
              <Phone className="mr-2 h-5 w-5" />
              Zavolať teraz
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Image src="/images/logo-new.png" alt="HLKlima Logo" width={32} height={32} className="h-8 w-auto" />
                <div>
                  <h3 className="text-lg font-bold">HLKlima</h3>
                  <p className="text-sm text-gray-400">Lukáš Haľko</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Profesionálne služby v oblasti klimatizácie, tepelných čerpadiel a rekuperácie.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Služby</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Klimatizácie</li>
                <li>Tepelné čerpadlá</li>
                <li>Rekuperácie</li>
                <li>Montáž a servis</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Kontakt</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>📞 0918 098 465</p>
                <p>✉️ halko.lukas@gmail.com</p>
              </div>
            </div>
          </div>
          <Separator className="my-8 bg-gray-800" />
          <div className="text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} HLKlima - Lukáš Haľko. Všetky práva vyhradené.</p>
          </div>
        </div>
      </footer>
      {/* Notification */}
      <Notification />
      {/* Contact Modal */}
      <ContactModal />
    </div>
  )
}
