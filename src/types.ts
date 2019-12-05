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

export type PostLayout = 'side' | 'top';
export const DEFAULT_POST_LAYOUT: PostLayout = 'top';

export type SectionLayout = 'tiles' | 'list';
export const DEFAULT_SECTION_LAYOUT: SectionLayout = 'tiles';

export type SwearFilter = 'asterisks' | 'pokemon' | 'hearts' | 'disabled';
export const DEFAULT_SWEAR_FILTER: SwearFilter = 'asterisks';

export type ProfilePostPrivacy = 'members' | 'friends';
export const DEFAULT_PROFILE_POST_PRIVACY: ProfilePostPrivacy = 'members';

// adLocations is a bitfield of 3 values
export const ADS_IN_HEADER = 0b001;
export const ADS_IN_POSTS = 0b010;
export const ADS_IN_TEXT = 0b100;

// TODO figure out postDisplay