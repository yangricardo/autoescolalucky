import { PromoCard } from "./PromoCard";

export const Promotions = () => (
  <section id="promocoes" className="bg-blue-50 py-20">
    <div className="container mx-auto px-6 select-none">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Pagamento Facilitado!</h2>
      <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">Aqui na Lucky, você escolhe como pagar. Oferecemos diversas opções para que a sua CNH caiba no seu bolso.</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <PromoCard
          title="Habilitação A ou B"
          price={<p className="text-5xl font-extrabold text-yellow-300">R$999</p>}
          priceDetails="à vista"
          options={[
            { text: 'ou 12x de R$99,00', highlight: true },
            { text: 'no cartão de crédito' },
            { text: 'ou até 4x no boleto', highlight: true, marginTop: true },
          ]}
        />
        <PromoCard
          title="Entrada + Parcelas"
          price={<p className="text-5xl font-extrabold text-yellow-300">R$99<span className="text-3xl">,99</span></p>}
          priceDetails="de entrada"
          options={[
            { text: 'e parcele o restante!', highlight: true },
            { text: '*Promoção por tempo limitado', highlight: false, marginTop: true },
          ]}
        />
        <PromoCard
          title="Parcele Tudo!"
          price={<p className="text-6xl font-extrabold text-yellow-300">21x</p>}
          priceDetails="no cartão de crédito!"
          options={[
            { text: 'DUDA e Exame Médico', highlight: true },
            { text: 'A maior facilidade do mercado!', highlight: false, marginTop: true },
          ]}
        />
      </div>
    </div>
  </section>
);