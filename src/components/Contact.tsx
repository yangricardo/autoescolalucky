import { FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { ContactInfoItem } from "./ContactInfoItem";

export const Contact = () => (
  <section id="contato" className="bg-blue-50 py-20">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Entre em Contato</h2>
      <div className="flex flex-wrap -mx-4">
        <div className="w-full lg:w-1/2 px-4 mb-10 lg:mb-0">
          <div className="bg-lucky-blue text-white p-8 rounded-xl shadow-lg h-full">
            <h3 className="text-2xl font-bold mb-6">Fale conosco agora mesmo!</h3>
            <p className="text-blue-200 mb-8">Tire suas dúvidas ou agende sua matrícula. Nossa equipe está pronta para te atender.</p>
            <div className="space-y-6">
              <ContactInfoItem href="https://wa.me/5521965404054" icon={<FaWhatsapp className="text-2xl" />} title="(21) 96540-4054">Clique para chamar no WhatsApp</ContactInfoItem>
              <ContactInfoItem href="tel:+5521964097010" icon={<FaPhoneAlt className="text-xl" />} title="(21) 96409-7010">Clique para ligar</ContactInfoItem>
              <ContactInfoItem icon={<FaMapMarkerAlt className="text-xl" />} title="Nosso Endereço">Rua Iguaçu, 35 - Centro de Bangu, Rio de Janeiro - RJ</ContactInfoItem>
              <ContactInfoItem href="https://instagram.com/autoescola_lucky" icon={<FaInstagram className="text-2xl" />} title="@autoescola_lucky">Siga-nos no Instagram</ContactInfoItem>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 px-4">
          <div className="rounded-xl shadow-lg overflow-hidden h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3676.326775618498!2d-43.46820068449514!3d-22.86438094254199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x995d1a5823236b%3A0x8e8c7f9da9089f9d!2sR.%20Igua%C3%A7u%2C%2035%20-%20Bangu%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2021810-130!5e0!3m2!1spt-BR!2sbr!4v1678895412345!5m2!1spt-BR!2sbr"
              title="Localização da Autoescola Lucky no Google Maps"
              className="w-full h-[450px] border-0"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);