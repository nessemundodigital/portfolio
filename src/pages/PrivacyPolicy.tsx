import React, { useEffect } from 'react';

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = 'Política de Privacidade - Alex Design';
  }, []);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Política de Privacidade</h1>
      
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-sm text-muted-foreground mb-6">Última atualização: [Data da Última Atualização]</p>

        <h2>Introdução</h2>
        <p>
          Bem-vindo à Política de Privacidade de [Nome do Seu Site/Empresa] ("nós", "nosso"). Nós respeitamos sua privacidade e estamos comprometidos em proteger seus dados pessoais. Esta política de privacidade informará como cuidamos dos seus dados pessoais quando você visita nosso site (independentemente de onde você o visita) e informa sobre seus direitos de privacidade e como a lei o protege.
        </p>
        <p className="font-bold text-red-600 dark:text-red-400">
          IMPORTANTE: Este é um modelo genérico. Você DEVE substituir este texto pela sua própria política de privacidade, adaptada às suas práticas de coleta e uso de dados e em conformidade com as leis aplicáveis (LGPD, GDPR, etc.). Consulte um profissional jurídico.
        </p>

        <h2>1. Dados que Coletamos Sobre Você</h2>
        <p>
          Podemos coletar, usar, armazenar e transferir diferentes tipos de dados pessoais sobre você, que agrupamos da seguinte forma:
          <ul>
            <li><strong>Dados de Identidade:</strong> Incluem nome, sobrenome, nome de usuário ou identificador similar.</li>
            <li><strong>Dados de Contato:</strong> Incluem endereço de e-mail e números de telefone.</li>
            <li><strong>Dados Técnicos:</strong> Incluem endereço de protocolo de internet (IP), seus dados de login, tipo e versão do navegador, configuração de fuso horário e localização, tipos e versões de plug-in do navegador, sistema operacional e plataforma e outras tecnologias nos dispositivos que você usa para acessar este site.</li>
            <li><strong>Dados de Uso:</strong> Incluem informações sobre como você usa nosso site, produtos e serviços.</li>
            {/* Adicione outras categorias de dados que você coleta */}
          </ul>
        </p>

        <h2>2. Como Usamos Seus Dados Pessoais</h2>
        <p>
          Usaremos seus dados pessoais apenas quando a lei nos permitir. Mais comumente, usaremos seus dados pessoais nas seguintes circunstâncias:
          <ul>
            <li>Onde precisamos executar o contrato que estamos prestes a celebrar ou celebramos com você.</li>
            <li>Onde for necessário para nossos interesses legítimos (ou de terceiros) e seus interesses e direitos fundamentais não se sobreponham a esses interesses.</li>
            <li>Onde precisamos cumprir uma obrigação legal ou regulatória.</li>
          </ul>
           {/* Detalhe as finalidades específicas */}
        </p>
        
        <h2>3. Divulgação de Seus Dados Pessoais</h2>
         <p>
           Podemos ter que compartilhar seus dados pessoais com as partes estabelecidas abaixo para os fins estabelecidos na seção 2 acima.
           <ul>
             <li>Terceiros internos [Ex: outras empresas do grupo].</li>
             <li>Terceiros externos [Ex: provedores de serviços, consultores profissionais, reguladores].</li>
             <li>Terceiros a quem podemos optar por vender, transferir ou mesclar partes de nossos negócios ou nossos ativos.</li>
             {/* Detalhe com quem você compartilha dados */}
           </ul>
         </p>

        {/* Adicione outras seções relevantes: */}
        {/* - Transferências internacionais */}
        {/* - Segurança de dados */}
        {/* - Retenção de dados */}
        {/* - Seus direitos legais */}
        {/* - Glossário */}
        {/* - Informações de contato */}

        <h2>Alterações a esta Política de Privacidade</h2>
        <p>
          Podemos atualizar esta política de privacidade de tempos em tempos. A versão atualizada será indicada por uma data "Última atualização" atualizada e a versão atualizada entrará em vigor assim que estiver acessível.
        </p>
        
        <h2>Contato</h2>
        <p>
          Se você tiver alguma dúvida sobre esta política de privacidade, entre em contato conosco: [Seu Endereço de Email de Contato]
        </p>
      </div>
    </div>
  );
} 