export interface ModalProps {
  exit: () => void;
  pokemon: PokemonInterface
}


export interface CommonType {
  name: string;
  url: string;
}

export interface IGame {
  version: CommonType
}

export interface IAbility {
  ability: CommonType
}

export interface PokemonType {
  slot: number;
  type: CommonType;
}

export interface PokemonStat {
  base_stat: number;
  stat: CommonType;
  name: string;
}

export interface PokemonAbility {
  is_hidden: boolean;
  ability: CommonType;
  name: string;
}

export interface PokemonInterface {
  name: string;
  image: string;
  stats: PokemonStat[];
  types: string[];
  game_indices: string[];
  abilities: PokemonAbility[]
}
