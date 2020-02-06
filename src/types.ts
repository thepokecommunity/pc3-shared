import { REACTION_OPTIONS } from './config';

export type ReactionName = keyof typeof REACTION_OPTIONS;

export enum VisibilityLevel {
  REJECTED = -3,
  SCHEDULED = -2,
  DRAFT = -1,
  MODERATED = 0,
  VISIBLE = 1,
  DELETED = 2,
}

export enum OpenLevel {
  CLOSED = 0,
  OPEN = 1,
  REDIRECT = 10,
}

export type PostLayout = 'side' | 'top';
export const DEFAULT_POST_LAYOUT: PostLayout = 'top';

export type SectionAppearance = 'tiles' | 'list';
export const DEFAULT_SECTION_APPEARANCE: SectionAppearance = 'tiles';

export type SwearFilter = 'asterisks' | 'pokemon' | 'hearts' | 'disabled';
export const DEFAULT_SWEAR_FILTER: SwearFilter = 'asterisks';

export type ProfilePostPrivacy = 'members' | 'friends';
export const DEFAULT_PROFILE_POST_PRIVACY: ProfilePostPrivacy = 'members';

// adLocations is a bitfield of 3 values
export const ADS_IN_HEADER = 0b001;
export const ADS_IN_POSTS = 0b010;
export const ADS_IN_TEXT = 0b100;

export type Gender = 'female' | 'male' | 'nonbinary' | null;
export type PokemonGoTeam = 'mystic' | 'valor' | 'instinct' | null;

// TODO figure out postDisplay

// this is confusing, but PostInfractionState is for the cached infraction value on Post, whereas InfractionAction is a property of the infractions table. It's very annoying that they use different values :/
export enum PostInfractionState {
  NONE = 0,
  WARNING = 1,
  INFRACTION = 2,
}

export enum InfractionAction {
  INFRACTION = 0,
  WARNING = 1,
  REVERSED = 2,
}

export type Nature =
  | 'Hardy'
  | 'Lonely'
  | 'Brave'
  | 'Adamant'
  | 'Naughty'
  | 'Bold'
  | 'Docile'
  | 'Relaxed'
  | 'Impish'
  | 'Lax'
  | 'Timid'
  | 'Hasty'
  | 'Serious'
  | 'Jolly'
  | 'Naive'
  | 'Modest'
  | 'Mild'
  | 'Quiet'
  | 'Bashful'
  | 'Rash'
  | 'Calm'
  | 'Gentle'
  | 'Sassy'
  | 'Careful'
  | 'Quirky'

export type BadgeDecalStyle = 
  | 'solid' 
  | 'light' 
  | 'colorless'
