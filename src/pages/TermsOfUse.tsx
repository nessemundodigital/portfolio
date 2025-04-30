import React, { useEffect } from 'react';

export default function TermsOfUse() {
  useEffect(() => {
    document.title = 'Termos de Uso - Alex Design';
  }, []);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Termos de Uso</h1>
      
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-sm text-muted-foreground mb-6">Última atualização: [Data da Última Atualização]</p>

        <h2>1. Aceitação dos Termos</h2>
        <p>
          Ao acessar e usar o site [Nome do Seu Site/Empresa] ("o Site"), você aceita e concorda em ficar vinculado aos termos e disposições deste acordo. Além disso, ao usar estes serviços específicos, você estará sujeito a quaisquer diretrizes ou regras postadas aplicáveis a tais serviços.
        </p>
         <p className="font-bold text-red-600 dark:text-red-400">
          IMPORTANTE: Este é um modelo genérico. Você DEVE substituir este texto pelos seus próprios termos de uso, adaptados aos serviços e funcionalidades do seu site. Consulte um profissional jurídico.
        </p>

        <h2>2. Descrição do Serviço</h2>
        <p>
          [Nome do Seu Site/Empresa] fornece aos usuários acesso a [descreva brevemente os serviços ou informações oferecidas no site]. Você também entende e concorda que o Serviço pode incluir certas comunicações de [Nome do Seu Site/Empresa], como anúncios de serviço, mensagens administrativas e newsletters, e que essas comunicações são consideradas parte da assinatura de [Nome do Seu Site/Empresa] e você não poderá optar por não recebê-las.
        </p>

        <h2>3. Conduta do Usuário</h2>
        <p>
          Você concorda em não usar o Serviço para:
          <ul>
            <li>Fazer upload, postar, enviar por e-mail, transmitir ou de outra forma disponibilizar qualquer Conteúdo que seja ilegal, prejudicial, ameaçador, abusivo, ofensivo, difamatório, vulgar, obsceno, invasivo da privacidade de outrem, odioso, ou racial, etnicamente ou de outra forma censurável;</li>
            <li>Prejudicar menores de qualquer forma;</li>
            <li>Personificar qualquer pessoa ou entidade;</li>
             {/* Adicione outras proibições relevantes */}
          </ul>
        </p>
        
        <h2>4. Direitos de Propriedade Intelectual</h2>
        <p>
           O Site e seu conteúdo original, recursos e funcionalidades são e permanecerão propriedade exclusiva de [Nome do Seu Site/Empresa] e seus licenciadores. O Serviço é protegido por direitos autorais, marcas registradas e outras leis do [País] e de países estrangeiros.
        </p>

        {/* Adicione outras seções relevantes: */}
        {/* - Isenção de Garantias */}
        {/* - Limitação de Responsabilidade */}
        {/* - Indenização */}
        {/* - Lei Aplicável */}
        {/* - Alterações aos Termos */}
        {/* - Informações de Contato */}

        <h2>Contato</h2>
        <p>
          Se você tiver alguma dúvida sobre estes Termos, entre em contato conosco: [Seu Endereço de Email de Contato]
        </p>
      </div>
    </div>
  );
} 