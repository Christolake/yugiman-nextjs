'use client'
import DeckList from "./components/DeckList"


export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

    <div>
      <h2>Select Character</h2>
      <DeckList />
    </div>
    </main>
  )
}
