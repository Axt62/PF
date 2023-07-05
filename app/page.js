"use client"
import Header from './header/header.js'




export default function Home() {
  return ( 
    <main>
      <Header></Header>
          <div class="relative">
            <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-emerald-400">
                <h2 class="text-4xl text-white">Antoine Leconte</h2>
                <p class="text-white">Scroll Down</p>
            </div>
            <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-indigo-600 text-white">
                <h2 class="text-4xl">{"Concepteur Développeur d'Applications"}</h2>
                <p class="text-white">Scroll Down</p>
            </div>
            <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-purple-600 text-white">
                <h2 class="text-4xl">{"En recherche d'alternance pour la rentrée 2023"}</h2>
                <p class="text-white">Scroll Down</p>
            </div>
            <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-neutral-800 text-white">
                <h2 class="text-4xl">{"Voici mon Portfolio"}</h2>
            </div>
          </div>
    </main>
  )
}
