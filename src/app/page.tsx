'use client'

import { useState, useEffect } from 'react'
import { Sparkles, Star, Heart, Music, Gift, ArrowRight } from 'lucide-react'

export default function BirthdayPage() {
  const [mounted, setMounted] = useState(false)
  const [currentPoemIndex, setCurrentPoemIndex] = useState(0)
  const [currentScreen, setCurrentScreen] = useState('poems') // 'poems' or 'admirable'
  const [currentTraitIndex, setCurrentTraitIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const poems = [
    {
      title: "Anjinho",
      content: `Nos caminhos da vida eu andava sem direção,
Meu coração perdido em total escuridão.
Mas surgiu um anjo com luz e com candura,
Trouxe à minha existência pura ventura.

Sua amizade é farol que me guia na jornada,
É você, meu anjinho, que me dá mais vida.
Com suas asas de carinho e de proteção,
Você ilumina tudo com imensa emoção.`
    },
    {
      title: "Batgirl da Grande Circular",
      content: `Nas ruas da cidade, na grande imensidão,
Sua energia contagia, traz imensa emoção.
Como heroína dos tempos, com sua armadura brilhante,
Você enfrenta o mundo com alma valente.

Amizade sincera, rara e tão preciosa,
É o que você me mostra, alma generosa.
É puro companheirismo, lealdade e afeto,
Um laço que fortalece, perfeito e correto.`
    },
    {
      title: "Iracema Moderna",
      content: `Como a lenda antiga, você tem seu valor,
Com força interior e muito amor.
Pela amizade pura que me ilumina por dentro,
Que torna meus dias mais serenos e mais plenos.

Batgirl, Anjinho, Iracema em um só ser,
Você é essa amiga que eu sempre quiser.
Feliz aniversário, guerreira, amiga, irmã,
Que sua vida seja bela, cheia de luz e de paz.`
    },
    {
      title: "Estrela Guia",
      content: `No céu da amizade você brilha com intensidade,
Como farol que guia com imensa clareza.
Seu riso é melodia que acalma qualquer dor,
Sua presença é presente, é calor, é fervor.

Anjinho que desceu para iluminar meu caminho,
Com asas de carinho, com o coração no ninho.
Não há nuvens que cubram seu brilho singular,
Você é a amiga que eu quero encontrar.`
    },
    {
      title: "Círculo Mágico",
      content: `Na grande circular onde seus passos marcam ritmo,
Você cria um universo de amor e de existir.
Cada volta que dá, cada sorriso que entrega,
É uma bênção que a vida nos entrega.

Batgirl com sua força, Anjinho com sua doçura,
Iracema com sua história, sua alma mais pura.
Você tece amizades como quem tece sonhos,
Com fios de alegria e laços bem fortes.`
    },
    {
      title: "Sinfonia da Amizade",
      content: `Sua vida é uma canção que encanta e emociona,
Com notas de coragem, de paz e de razão.
Como maestrina da alma, você rege nossa história,
Transformando momentos em pura memória.

Anjinho que canta, Batgirl que protege,
Iracema que acolhe, que nunca se esquece.
Sua amizade é sinfonia que nos completa,
Uma melodia eterna que nos enche de saudade.`
    },
    {
      title: "Universo Paralelo",
      content: `Se existisse um universo feito só de amizade,
Com certeza você seria a estrela mais brilhante.
Com sua energia cósmica, sua luz tão verdadeira,
Você transforma o mundo, torna-o mais sincero.

Entre galáxias de sorrisos e planetas de abraços,
Você navega com graça, nunca com desabraços.
Susuh, você é esse universo paralelo,
Onde a amizade é regra, é puro e belo.`
    }
  ]

  const admirableTraits = [
    {
      title: "Inteligência Brilhante",
      content: `Sua mente é um universo de possibilidades,
Onde ideias brilham como mil maravilhas.
Com uma inteligência que encanta e inspira,
Você resolve desafios com grande magia.

Não é só conhecimento, é sabedoria pura,
A forma como você vê o mundo nos cura.
Seu raciocínio rápido, sua lógica impecável,
Faz de você alguém simplesmente inesquecível.`
    },
    {
      title: "Fojei Encantadora",
      content: `Seu sorriso tem o poder de iluminar o dia,
Sua doçura é calma que nos acalmaria.
Com um jeito fofo que desarma e encanta,
Você transforma o ordinário em santa cantiga.

Seus gestos gentis, seu olhar tão sincero,
São detalhes que fazem o mundo inteiro.
Essa fofura que você tem não é só aparência,
É a alma linda que tem sua essência.`
    },
    {
      title: "Admirável Incomparável",
      content: `Ser admirável é sua segunda natureza,
Você encanta com sua simples existência.
Sua força interior, sua coragem imensa,
Nos mostra que a vida tem mais densidade.

Com qualidades que somam, que se multiplicam,
Você se torna referência, se qualificam.
Não há como não admirar quem é tão autêntica,
Uma pessoa especial, única e fantástica.`
    }
  ]

  useEffect(() => {
    setMounted(true)
  }, [])

  const nextPoem = () => {
    setCurrentPoemIndex((prev) => (prev + 1) % poems.length)
  }

  const prevPoem = () => {
    setCurrentPoemIndex((prev) => (prev - 1 + poems.length) % poems.length)
  }

  const nextTrait = () => {
    setCurrentTraitIndex((prev) => (prev + 1) % admirableTraits.length)
  }

  const prevTrait = () => {
    setCurrentTraitIndex((prev) => (prev - 1 + admirableTraits.length) % admirableTraits.length)
  }

  const toggleMusic = () => {
    setIsPlaying(!isPlaying)
  }

  if (!mounted) return null

  if (currentScreen === 'admirable') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-indigo-900 text-white overflow-hidden relative">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
        </div>

        {/* Floating Hearts */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            >
              <Heart className="w-2 h-2 text-pink-200" fill="currentColor" />
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="relative z-10 container mx-auto px-4 py-8">
          {/* Header */}
          <header className="text-center mb-16 animate-fade-in">
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-pink-400 via-purple-300 to-indigo-400 bg-clip-text text-transparent animate-shimmer">
                Susuh Admirável
              </h1>
              <div className="flex justify-center gap-4 mb-8">
                <Heart className="w-8 h-8 text-pink-400 animate-pulse" />
                <Sparkles className="w-8 h-8 text-yellow-400 animate-bounce" />
                <Star className="w-8 h-8 text-purple-400 animate-pulse" />
              </div>
            </div>

            {/* Music Player Section */}
            <div className="mb-12">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Music className="w-6 h-6 text-pink-300 animate-pulse" />
                <span className="text-pink-200 text-lg font-semibold">♪ Love Like You - Rebecca Sugar ♪</span>
                <Music className="w-6 h-6 text-pink-300 animate-pulse" />
              </div>
              
              {/* Elegant Audio Player */}
              <div className="flex justify-center mb-6">
                <div className="relative w-full max-w-2xl">
                  <div className="bg-gradient-to-r from-purple-800/50 to-pink-800/50 backdrop-blur-md rounded-2xl p-6 border border-purple-400/30 shadow-2xl">
                    {/* YouTube Video Embed */}
                    <div className="relative rounded-xl overflow-hidden bg-black/50 shadow-2xl border border-purple-400/30">
                      <div className="aspect-video">
                        <iframe
                          className="w-full h-full"
                          src={isPlaying 
                            ? "https://www.youtube.com/embed/GDTD24KsdGc?autoplay=1&mute=0&loop=1&playlist=GDTD24KsdGc&controls=1&showinfo=0&rel=0&modestbranding=1"
                            : "https://www.youtube.com/embed/GDTD24KsdGc?autoplay=0&mute=1&loop=1&playlist=GDTD24KsdGc&controls=1&showinfo=0&rel=0&modestbranding=1"
                          }
                          title="Love Like You - Rebecca Sugar"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                      
                      {/* Video Overlay Effects */}
                      {isPlaying && (
                        <div className="absolute inset-0 pointer-events-none">
                          <div className="absolute top-2 right-2 w-3 h-3 bg-pink-400 rounded-full animate-ping"></div>
                          <div className="absolute bottom-2 left-2 w-3 h-3 bg-purple-400 rounded-full animate-ping animation-delay-1000"></div>
                        </div>
                      )}
                    </div>
                    
                    {/* Custom Controls */}
                    <div className="text-center space-y-3 mt-4">
                      <button
                        onClick={toggleMusic}
                        className={`inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg ${
                          isPlaying 
                            ? 'bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-500 hover:to-pink-500' 
                            : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500'
                        }`}
                      >
                        {isPlaying ? (
                          <>
                            <div className="w-4 h-4 bg-white rounded-sm"></div>
                            Pausar Música
                          </>
                        ) : (
                          <>
                            <Music className="w-6 h-6" />
                            Tocar Música
                          </>
                        )}
                      </button>
                      <div className="text-xs text-purple-200">
                        {isPlaying ? '🎵 Música tocando...' : 'Clique para tocar a música'}
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating Orbs */}
                  <div className="absolute -top-2 -right-2">
                    <div className={`w-4 h-4 rounded-full transition-all duration-300 ${
                      isPlaying ? 'bg-pink-400 animate-ping' : 'bg-purple-400 opacity-50'
                    }`}></div>
                  </div>
                  <div className="absolute -bottom-2 -left-2">
                    <div className={`w-4 h-4 rounded-full transition-all duration-300 ${
                      isPlaying ? 'bg-purple-400 animate-ping animation-delay-1000' : 'bg-pink-400 opacity-50'
                    }`}></div>
                  </div>
                </div>
              </div>
              
              <p className="text-purple-200 text-sm text-center">
                🎵 {isPlaying ? 'A música está tocando enquanto você lê sobre a Susuh' : 'Clique em "Tocar Música" para ouvir "Love Like You" enquanto lê sobre si'}
              </p>
              
              <div className="text-center mt-4">
                <a 
                  href="https://youtu.be/GDTD24KsdGc" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-purple-300 hover:text-purple-200 underline text-xs"
                >
                  Ver vídeo original no YouTube
                </a>
              </div>
            </div>
          </header>

          {/* Admirable Traits Section */}
          <section className="max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-purple-800/30 to-pink-800/30 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-purple-400/20 shadow-2xl transform hover:scale-105 transition-all duration-500">
              <div className="text-center mb-8">
                <h3 className="text-3xl md:text-4xl font-bold text-purple-200 mb-4">
                  {admirableTraits[currentTraitIndex].title}
                </h3>
                <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
              </div>

              <div className="relative">
                <div className="text-lg md:text-xl leading-relaxed text-purple-100 font-serif italic text-center whitespace-pre-line animate-fade-in">
                  {admirableTraits[currentTraitIndex].content}
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevTrait}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-3 bg-purple-700/50 hover:bg-purple-600/50 rounded-full transition-all duration-300 hover:scale-110"
                  aria-label="Trait anterior"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <button
                  onClick={nextTrait}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-3 bg-purple-700/50 hover:bg-purple-600/50 rounded-full transition-all duration-300 hover:scale-110"
                  aria-label="Próximo trait"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Trait Indicators */}
              <div className="flex justify-center gap-2 mt-8">
                {admirableTraits.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTraitIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTraitIndex
                        ? 'bg-purple-400 w-8'
                        : 'bg-purple-600/50 hover:bg-purple-500/50'
                    }`}
                    aria-label={`Ir para trait ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Back Button */}
          <div className="text-center">
            <button
              onClick={() => setCurrentScreen('poems')}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <ArrowRight className="w-5 h-5 rotate-180" />
              Voltar aos Poemas
            </button>
          </div>
        </div>

        <style jsx>{`
          @keyframes shimmer {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          @keyframes fade-in {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .animate-shimmer {
            background-size: 200% 200%;
            animation: shimmer 3s ease-in-out infinite;
          }

          .animate-fade-in {
            animation: fade-in 1s ease-out;
          }

          .animation-delay-2000 {
            animation-delay: 2s;
          }

          .animation-delay-4000 {
            animation-delay: 4s;
          }

          .animation-delay-1000 {
            animation-delay: 1s;
          }
        `}</style>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Floating Stars and Shapes */}
      <div className="absolute inset-0">
        {/* Alien Stage inspired floating orbs */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`orb-${i}`}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${4 + Math.random() * 6}s`
            }}
          >
            <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full shadow-lg shadow-cyan-400/50"></div>
          </div>
        ))}
        
        {/* Gorillaz inspired elements */}
        <div className="absolute top-10 left-10 text-2xl opacity-20 animate-pulse">🎸</div>
        <div className="absolute top-20 right-20 text-3xl opacity-20 animate-pulse animation-delay-2000">🎤</div>
        <div className="absolute bottom-20 left-20 text-2xl opacity-20 animate-pulse animation-delay-4000">🎹</div>
        <div className="absolute bottom-10 right-10 text-3xl opacity-20 animate-pulse animation-delay-1000">🥁</div>
        
        {/* Regular stars */}
        {[...Array(30)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          >
            <Star className="w-1 h-1 text-blue-200" fill="currentColor" />
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Hero Section */}
        <header className="text-center mb-16 animate-fade-in">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent animate-shimmer">
              Feliz Aniversário
            </h1>
            <div className="relative inline-block">
              <h2 className="text-4xl md:text-6xl font-bold text-blue-200 mb-2">
                Susuh
              </h2>
              <Sparkles className="absolute -top-4 -right-8 w-8 h-8 text-yellow-400 animate-spin" />
            </div>
          </div>

          {/* Nicknames */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="px-6 py-3 bg-blue-800/50 backdrop-blur-sm rounded-full border border-blue-400/30 text-blue-200 font-medium hover:bg-blue-700/50 transition-all duration-300 hover:scale-105">
              ✨ Anjinho
            </span>
            <span className="px-6 py-3 bg-purple-800/50 backdrop-blur-sm rounded-full border border-purple-400/30 text-purple-200 font-medium hover:bg-purple-700/50 transition-all duration-300 hover:scale-105">
              🦇 Batgirl da Grande Circular
            </span>
            <span className="px-6 py-3 bg-cyan-800/50 backdrop-blur-sm rounded-full border border-cyan-400/30 text-cyan-200 font-medium hover:bg-cyan-700/50 transition-all duration-300 hover:scale-105">
              🌸 Iracema
            </span>
          </div>

          <div className="flex justify-center gap-4 mb-8">
            <Gift className="w-8 h-8 text-yellow-400 animate-bounce" />
            <Heart className="w-8 h-8 text-pink-400 animate-pulse" />
            <Music className="w-8 h-8 text-green-400 animate-bounce animation-delay-1000" />
          </div>
        </header>

        {/* Poems Section */}
        <section className="max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-blue-800/30 to-purple-800/30 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-blue-400/20 shadow-2xl transform hover:scale-105 transition-all duration-500">
            <div className="text-center mb-8">
              <h3 className="text-3xl md:text-4xl font-bold text-blue-200 mb-4">
                {poems[currentPoemIndex].title}
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
            </div>

            <div className="relative">
              <div className="text-lg md:text-xl leading-relaxed text-blue-100 font-serif italic text-center whitespace-pre-line animate-fade-in">
                {poems[currentPoemIndex].content}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevPoem}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-3 bg-blue-700/50 hover:bg-blue-600/50 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="Poema anterior"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={nextPoem}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-3 bg-blue-700/50 hover:bg-blue-600/50 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="Próximo poema"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Poem Indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {poems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPoemIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentPoemIndex
                      ? 'bg-blue-400 w-8'
                      : 'bg-blue-600/50 hover:bg-blue-500/50'
                  }`}
                  aria-label={`Ir para poema ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Navigation Button */}
        <div className="text-center mb-16">
          <button
            onClick={() => setCurrentScreen('admirable')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg animate-pulse"
          >
            Descubra o Quanto você é Admirável
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Message Section */}
        <section className="text-center max-w-3xl mx-auto mb-16">
          <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/20 relative overflow-hidden">
            {/* Alien Stage inspired background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-400/20 to-blue-600/20"></div>
              <div className="absolute top-4 right-4 w-16 h-16 border-2 border-cyan-400/30 rounded-full animate-pulse"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 border-2 border-purple-400/30 rounded-full animate-pulse animation-delay-2000"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-blue-200 mb-4 flex items-center justify-center gap-3">
                <span className="text-2xl">🎵</span>
                Uma Mensagem Especial
                <span className="text-2xl">🎵</span>
              </h3>
              <p className="text-lg text-blue-100 leading-relaxed">
                Susuh, sua amizade ilumina nossos caminhos como uma estrela guia. 
                Cada momento compartilhado se torna mais especial com sua presença. 
                Que seu dia seja tão incrível quanto você é!
              </p>
              <div className="mt-6 flex justify-center gap-4">
                <span className="text-3xl opacity-60 animate-bounce">🎸</span>
                <span className="text-3xl opacity-60 animate-bounce animation-delay-2000">🎤</span>
                <span className="text-3xl opacity-60 animate-bounce animation-delay-4000">🎹</span>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-8 border-t border-blue-400/20 relative overflow-hidden">
          {/* Confetti effect */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <div
                key={`confetti-${i}`}
                className="absolute animate-bounce"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 2}s`
                }}
              >
                <div className={`w-2 h-2 ${['bg-yellow-400', 'bg-pink-400', 'bg-cyan-400', 'bg-purple-400'][i % 4]} rotate-45`}></div>
              </div>
            ))}
          </div>
          
          <div className="relative z-10">
            <p className="text-blue-300 text-lg mb-2">
              Com todo carinho e admiração, 🎉
            </p>
            <p className="text-blue-400 mb-4">
              Que muitos anos de vida e alegria venham!
            </p>
            <div className="flex justify-center gap-2 text-2xl">
              <span className="animate-pulse">🎂</span>
              <span className="animate-bounce">🎈</span>
              <span className="animate-pulse animation-delay-1000">🎁</span>
              <span className="animate-bounce animation-delay-2000">🎊</span>
            </div>
          </div>
        </footer>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-shimmer {
          background-size: 200% 200%;
          animation: shimmer 3s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  )
}