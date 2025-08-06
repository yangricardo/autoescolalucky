import { FaClock, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { ContactInfoItem } from "./ContactInfoItem";

export const Contact = () => (
  <section id="contato" className="bg-blue-50 py-20">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Entre em Contato</h2>
      <div className="flex flex-wrap -mx-4">
        <div className="w-full lg:w-1/2 px-4 mb-10 lg:mb-0">
          <div className="bg-blue-800 text-white p-8 rounded-xl shadow-lg h-full">
            <h3 className="text-2xl font-bold mb-6">Fale conosco agora mesmo!</h3>
            <p className="text-blue-100 mb-8">Tire suas dúvidas ou agende sua matrícula. Nossa equipe está pronta para te atender.</p>
            <div className="flex flex-col space-y-6">
              <ContactInfoItem href="https://wa.me/5521965404054" icon={<FaWhatsapp className="text-2xl" />} title="(21) 96540-4054">Clique para chamar no WhatsApp</ContactInfoItem>
              <ContactInfoItem href="https://wa.me/5521964097010" icon={<FaWhatsapp className="text-2xl" />} title="(21) 96409-7010">Clique para chamar no WhatsApp</ContactInfoItem>
              <ContactInfoItem
                href="mailto:contato@autoescolalucky.com.br"
                icon={<FaMapMarkerAlt className="text-2xl" />}
                title="contato@autoescolalucky.com.br"
              >
                Envie um e-mail
              </ContactInfoItem>
              <ContactInfoItem icon={<FaClock className="text-xl" />} title="Horário de Funcionamento">
                <div className="space-y-1">
                  <div>Segunda a Sexta: 8h às 18h</div>
                  <div>Sábado: 8h às 12h</div>
                </div>
              </ContactInfoItem>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 px-4">
          <div className="rounded-xl shadow-lg overflow-hidden h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3676.0904757766475!2d-43.46839203804269!3d-22.873115936584185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bdf92c7152b55%3A0xbc908783ba0548e2!2sAUTO%20ESCOLA%20LUCKY!5e0!3m2!1spt-BR!2sbr!4v1752721467121!5m2!1spt-BR!2sbr"
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