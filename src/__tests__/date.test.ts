import { strftime, getDaysFromNow, getDaysAgo, getToday, getTomorrow, getYesterday, numericDateDiff, humanizedDateDiff, createDateFormat, strftimeWithoutExtensions, STRFTIME_EXTENSIONS, createdAtDateFormat } from '../helpers/date';

const TODAY = getToday();
const TOMORROW = getTomorrow();
const YESTERDAY = getYesterday();

const DAY_AFTER_TOMORROW = getDaysFromNow(2);
const DAY_BEFORE_YESTERDAY = getDaysAgo(2);

describe('date helpers', () => {

  test('numericDateDiff', () => {
    expect(numericDateDiff(YESTERDAY, TODAY)).toBe(1);
    expect(numericDateDiff(TOMORROW, TODAY)).toBe(-1);
    expect(numericDateDiff(YESTERDAY, TOMORROW)).toBe(2);
    expect(numericDateDiff(TOMORROW, YESTERDAY)).toBe(-2);
    expect(numericDateDiff(TODAY, TODAY)).toBe(0);
  });

  describe('createDateFormat', () => {
    test('with a string', () => {
      const code = '%b %e, %Y';
      const formatter = createDateFormat(code);
      expect(formatter(TODAY)).toEqual(strftime(code, TODAY));
    });

    test('with a callback', () => {
      const code = '%b %e, %Y';
      const formatter = createDateFormat(() => code);
      expect(formatter(TODAY)).toEqual(strftime(code, TODAY));
    });
  });

  test('createdAtDateFormat', () => {
    expect(createdAtDateFormat(TODAY)).toEqual(strftime('Today at %l:%M %p'));
    expect(createdAtDateFormat(YESTERDAY)).toEqual(strftime('Yesterday at %l:%M %p'));
  });

  describe('strftime extensions', () => {
    test('%_', () => {
      expect(strftime('%B %e%_')).toEqual(strftime(`%B %e${STRFTIME_EXTENSIONS._(TODAY)}`));
    });
  });
});