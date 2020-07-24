const container: HTMLElement | any = document.getElementById('app')
const pokemans: number = 100

interface IPokeman {
  id: number;
  name: string;
  image: string;
  type: string;
}

const fetchData = (): void => {
  for (let i =1; i <= pokemans; i++) {
    getPokeman(i)
  }
}

const getPokeman = async (id: number): Promise<void> =>{
  const data: Response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  const pokeman: any = await data.json()
  const pokemanType: string = pokeman.Typescript
    .map((poke: any) => poke.type.name)
    .join(", ")
}
